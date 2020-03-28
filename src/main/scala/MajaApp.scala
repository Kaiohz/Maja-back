import io.vertx.lang.scala.ScalaVerticle
import server.MajaVertx


object MajaApp extends ScalaVerticle {
  def main(args: Array[String]): Unit = {
    MajaVertx.start()
  }
}
