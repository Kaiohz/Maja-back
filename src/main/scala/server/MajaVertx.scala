package server

import com.typesafe.config.{Config, ConfigFactory}
import io.vertx.scala.core.Vertx
import router.MajaRouter

object MajaVertx {
  private val configuration: Config = ConfigFactory.load()
  private val port: Integer = configuration.getInt("vertx.port")
  var vertx = Vertx.vertx();

  def start(): Unit ={
    vertx.createHttpServer().requestHandler(MajaRouter.router)
      .listen(port)
  }
}