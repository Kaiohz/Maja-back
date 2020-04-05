package jwt

import com.typesafe.config.{Config, ConfigFactory}
import io.vertx.core.json.JsonObject
import io.vertx.scala.ext.auth.{KeyStoreOptions, User}
import io.vertx.scala.ext.auth.jwt.{JWTAuth, JWTAuthOptions, JWTOptions}
import server.MajaVertx

import scala.concurrent.{ExecutionContext, Future}
import scala.util.{Failure, Success}

object JwtUtils {

  private val configuration: Config = ConfigFactory.load()

  private val expires = configuration.getInt("jwt.expires")
  private val user = configuration.getString("jwt.jwtUser")
  private val keystore = configuration.getString("jwt.keystore")
  private val password = configuration.getString("jwt.password")


  val config = JWTAuthOptions()
    .setKeyStore(KeyStoreOptions()
      .setPath(keystore)
      .setPassword(password)
    )


  val provider = JWTAuth.create(MajaVertx.vertx, config)

  def generateToken(login: String): String = {
    val claims = new io.vertx.core.json.JsonObject()
    claims.put(user,login)
    return provider.generateToken(claims, JWTOptions().setExpiresInMinutes(expires))
  }

  def isAuthorized(token: String): Future[User] = {
    val jwt = new JsonObject().put("jwt", token)
    return provider.authenticateFuture(jwt)
  }
}
