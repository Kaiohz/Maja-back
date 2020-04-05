package router

import io.vertx.scala.ext.web.Router
import io.vertx.scala.ext.web.handler.CorsHandler
import server.MajaVertx

object MajaRouter {
  val router = Router.router(MajaVertx.vertx)
  router.route().handler(CorsHandler.create("*"))
  AuthRoutes.initRoutes()
  UserRoutes.initRoutes()
}