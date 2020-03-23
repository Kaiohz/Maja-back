import io.vertx.lang.scala.ScalaVerticle
import io.vertx.scala.core.Vertx

object MajaServer extends ScalaVerticle {
  def main(args: Array[String]): Unit = {
    Vertx.vertx()
      .createHttpServer()
      .requestHandler(_.response()
        .putHeader("content-type", "text/plain")
        .end("Hello from Maja Server"))
      .listen(8081)

  }
}
