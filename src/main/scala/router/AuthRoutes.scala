package router
import com.typesafe.config.{Config, ConfigFactory}
import bdd.{Bdd, BddQueries}
import io.vertx.lang.scala.json.Json
import io.vertx.scala.ext.auth.jwt.JWTOptions
import jwt.JwtUtils
import utils.Logs

import scala.concurrent.ExecutionContext
import scala.util.{Failure, Success}



object AuthRoutes {
  private val configuration: Config = ConfigFactory.load()
  private val authURL: String = configuration.getString("routes.auth.connect")
  private val subUrl: String = configuration.getString("routes.auth.subscribe")
  private val loginParam: String = configuration.getString("routes.auth.params.login")
  private val passParam: String = configuration.getString("routes.auth.params.password")




  def initRoutes(): Unit ={
    auth()
    subscribe()
  }

  /**
   * authenticate user, infos in url (to change)
   */
  private def auth(): Unit ={
    MajaRouter.router.route().path(authURL).handler((rC: io.vertx.scala.ext.web.RoutingContext) => {
      rC.response.putHeader("content-type", "text/plain")
      val login = rC.request.getParam(loginParam).getOrElse(Logs.orElse)
      val pass = rC.request.getParam(passParam).getOrElse(Logs.orElse)
      val queryParams = new io.vertx.core.json.JsonArray().add(login)
      Bdd.jdbc.queryWithParamsFuture(BddQueries.authQuery,queryParams).onComplete{
        case Success(result) => {
          if(result.getResults.length > 0 && result.getResults(0).getString(0).equals(pass)){
            println(s"Authentication success -> $login")
            rC.response().setStatusCode(200).end(JwtUtils.generateToken(login))
          }else{
            println(s"Authentication Failure -> Wrong login/password")
            rC.response().setStatusCode(401).end()
          }
        }
        case Failure(cause) => {
          println(s"Authentication Failure -> $cause")
          rC.response().setStatusCode(500).end()
        }
      }(ExecutionContext.global)
    })
  }

  private def subscribe(): Unit ={
    MajaRouter.router.route().path(subUrl).handler((rC: io.vertx.scala.ext.web.RoutingContext) => {
      val login = rC.request.getParam(loginParam).getOrElse(Logs.orElse)
      val pass = rC.request.getParam(passParam).getOrElse(Logs.orElse)
      Bdd.jdbc.updateWithParamsFuture(BddQueries.subQuery, new io.vertx.core.json.JsonArray().add(login).add(pass)).onComplete{
        case Success(result) => {
          println(s"Subscription of -> $login is OK")
          rC.response().setStatusCode(200).end()
        }
        case Failure(cause) =>{
          println(s"Subscription Failed -> $cause")
          rC.response().setStatusCode(500).end()
        }
      }(ExecutionContext.global)
    })
  }
}
