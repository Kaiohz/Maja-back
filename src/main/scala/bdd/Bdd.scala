package bdd

import com.typesafe.config.{Config, ConfigFactory}
import io.vertx.lang.scala.json.JsonObject
import io.vertx.scala.ext.jdbc.JDBCClient
import server.MajaVertx

object Bdd {
  private val configuration: Config = ConfigFactory.load()
  private val server: String = configuration.getString("mysql.server")
  private val port: String = configuration.getString("mysql.port")
  private val database: String = configuration.getString("mysql.database")
  private val driver: String = configuration.getString("mysql.driver")
  private val user: String = configuration.getString("mysql.user")
  private val password: String = configuration.getString("mysql.password")
  private val protocol: String = configuration.getString("mysql.protocol")
  val jdbc = JDBCClient.createShared(MajaVertx.vertx, new JsonObject()
    .put("url", protocol+server+":"+port+"/"+database)
    .put("driver_class", driver)
    .put("max_pool_size", 30)
    .put("user", user)
    .put("password", password))

}
