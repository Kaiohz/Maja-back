package router

import bdd.{Bdd, BddQueries}
import com.typesafe.config.{Config, ConfigFactory}
import jwt.JwtUtils
import utils.Logs

import scala.concurrent.ExecutionContext
import scala.util.{Failure, Success}

object UserRoutes {

  private val configuration: Config = ConfigFactory.load()
  private val updatePasswordUrl: String = configuration.getString("routes.user.updatePassword")
  private val updateLoginUrl: String = configuration.getString("routes.user.updateLogin")
  private val delUserUrl: String = configuration.getString("routes.user.delUser")

  private val loginParam: String = configuration.getString("routes.user.params.login")
  private val newPasswordParam: String = configuration.getString("routes.user.params.newPassword")
  private val newLoginParam: String = configuration.getString("routes.user.params.newLogin")
  private val tokenParam: String = configuration.getString("routes.user.params.token")






  def initRoutes(): Unit ={
    updatePassword()
    changeLogin()
    delUser()
  }

  /**
   * authenticate user, infos in url (to change)
   */
  private def updatePassword(): Unit ={
    MajaRouter.router.route().path(updatePasswordUrl).handler((rC: io.vertx.scala.ext.web.RoutingContext) => {
      val token = rC.request.getParam(tokenParam).getOrElse(Logs.orElse)
      JwtUtils.isAuthorized(token).onComplete{
        case Success(result) => {
          updatePasswordBdd(rC)
        }
        case Failure(cause) => {
          println(s"jwt authentication failed ->$cause")
          rC.response().setStatusCode(401).end()
        }
      }(ExecutionContext.global)
    })
  }

  private def updatePasswordBdd(rC: io.vertx.scala.ext.web.RoutingContext): Unit = {
    val login = rC.request.getParam(loginParam).getOrElse(Logs.orElse)
    val pass = rC.request.getParam(newPasswordParam).getOrElse(Logs.orElse)
    val queryParams = new io.vertx.core.json.JsonArray().add(pass).add(login)
    Bdd.jdbc.queryWithParamsFuture(BddQueries.updatePassword, queryParams).onComplete {
      case Success(result) => {
        println(s"Password for $login changes.")
        rC.response().setStatusCode(200).end()
      }
      case Failure(cause) => {
        println(s"Password for $login not changed -> $cause")
        rC.response().setStatusCode(500).end()
      }
    }(ExecutionContext.global)
  }

  private def changeLoginBdd(rC: io.vertx.scala.ext.web.RoutingContext): Unit = {
    val login = rC.request.getParam(loginParam).getOrElse(Logs.orElse)
    val newLogin = rC.request.getParam(newLoginParam).getOrElse(Logs.orElse)
    Bdd.jdbc.updateWithParamsFuture(BddQueries.updateLogin, new io.vertx.core.json.JsonArray().add(newLogin).add(login)).onComplete{
      case Success(result) => {
        println(s"Change login of -> $login is OK")
        rC.response().setStatusCode(200).end()
      }
      case Failure(cause) =>{
        println(s"change login Failed -> $cause")
        rC.response().setStatusCode(500).end()
      }
    }(ExecutionContext.global)
  }

  private def changeLogin(): Unit ={
    MajaRouter.router.route().path(updateLoginUrl).handler((rC: io.vertx.scala.ext.web.RoutingContext) => {
      val token = rC.request.getParam(tokenParam).getOrElse(Logs.orElse)
      JwtUtils.isAuthorized(token).onComplete{
        case Success(result) => {
          changeLoginBdd(rC)
        }
        case Failure(cause) => {
          println(s"jwt authentication failed ->$cause")
          rC.response().setStatusCode(401).end()
        }
      }(ExecutionContext.global)
    })
  }

  private def delUser(): Unit = {
    MajaRouter.router.route().path(delUserUrl).handler((rC: io.vertx.scala.ext.web.RoutingContext) => {
      val token = rC.request.getParam(tokenParam).getOrElse(Logs.orElse)
      JwtUtils.isAuthorized(token).onComplete{
        case Success(result) => {
          delUserBdd(rC)
        }
        case Failure(cause) => {
          println(s"jwt authentication failed ->$cause")
          rC.response().setStatusCode(401).end()
        }
      }(ExecutionContext.global)
    })
  }

  private def delUserBdd(rC: io.vertx.scala.ext.web.RoutingContext): Unit ={
      val login = rC.request.getParam(loginParam).getOrElse(Logs.orElse)
      Bdd.jdbc.updateWithParamsFuture(BddQueries.delUser, new io.vertx.core.json.JsonArray().add(login)).onComplete{
        case Success(result) => {
          println(s"Deletion of -> $login is OK")
          rC.response().setStatusCode(200).end()
        }
        case Failure(cause) =>{
          println(s"Deletion Failed -> $cause")
          rC.response().setStatusCode(500).end()
        }
      }(ExecutionContext.global)
  }

}
