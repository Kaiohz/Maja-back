/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/** @module vertx-web-js/chain_auth_handler */
var utils = require('vertx-js/util/utils');
var AuthHandler = require('vertx-web-js/auth_handler');
var User = require('vertx-auth-common-js/user');
var RoutingContext = require('vertx-web-js/routing_context');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JChainAuthHandler = Java.type('io.vertx.ext.web.handler.ChainAuthHandler');

/**
 An auth handler that chains to a sequence of handlers.

 @class
*/
var ChainAuthHandler = function(j_val) {

  var j_chainAuthHandler = j_val;
  var that = this;
  AuthHandler.call(this, j_val);

  /**

   @public
   @param arg0 {RoutingContext} 
   */
  this.handle = function(arg0) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_chainAuthHandler["handle(io.vertx.ext.web.RoutingContext)"](arg0._jdel);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Add a required authority for this auth handler

   @public
   @param authority {string} the authority 
   @return {AuthHandler} a reference to this, so the API can be used fluently
   */
  this.addAuthority = function(authority) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      j_chainAuthHandler["addAuthority(java.lang.String)"](authority);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Add a set of required authorities for this auth handler

   @public
   @param authorities {Array.<string>} the set of authorities 
   @return {AuthHandler} a reference to this, so the API can be used fluently
   */
  this.addAuthorities = function(authorities) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      j_chainAuthHandler["addAuthorities(java.util.Set)"](utils.convParamSetBasicOther(authorities));
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Parses the credentials from the request into a JsonObject. The implementation should
   be able to extract the required info for the auth provider in the format the provider
   expects.

   @public
   @param context {RoutingContext} the routing context 
   @param handler {function} the handler to be called once the information is available. 
   */
  this.parseCredentials = function(context, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      j_chainAuthHandler["parseCredentials(io.vertx.ext.web.RoutingContext,io.vertx.core.Handler)"](context._jdel, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Authorizes the given user against all added authorities.

   @public
   @param user {User} a user. 
   @param handler {function} the handler for the result. 
   */
  this.authorize = function(user, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      j_chainAuthHandler["authorize(io.vertx.ext.auth.User,io.vertx.core.Handler)"](user._jdel, function(ar) {
      if (ar.succeeded()) {
        handler(null, null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Appends a auth provider to the chain.

   @public
   @param authHandler {AuthHandler} auth handler 
   @return {ChainAuthHandler} self
   */
  this.append = function(authHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_chainAuthHandler["append(io.vertx.ext.web.handler.AuthHandler)"](authHandler._jdel);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Removes a provider from the chain.

   @public
   @param authHandler {AuthHandler} provider to remove 
   @return {boolean} true if provider was removed, false if non existent in the chain.
   */
  this.remove = function(authHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      return j_chainAuthHandler["remove(io.vertx.ext.web.handler.AuthHandler)"](authHandler._jdel);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Clears the chain.

   @public

   */
  this.clear = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_chainAuthHandler["clear()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_chainAuthHandler;
};

ChainAuthHandler._jclass = utils.getJavaClass("io.vertx.ext.web.handler.ChainAuthHandler");
ChainAuthHandler._jtype = {
  accept: function(obj) {
    return ChainAuthHandler._jclass.isInstance(obj._jdel);
  },
  wrap: function(jdel) {
    var obj = Object.create(ChainAuthHandler.prototype, {});
    ChainAuthHandler.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
ChainAuthHandler._create = function(jdel) {
  var obj = Object.create(ChainAuthHandler.prototype, {});
  ChainAuthHandler.apply(obj, arguments);
  return obj;
}
/**

 @memberof module:vertx-web-js/chain_auth_handler

 @return {ChainAuthHandler}
 */
ChainAuthHandler.create = function() {
  var __args = arguments;
  if (__args.length === 0) {
    return utils.convReturnVertxGen(ChainAuthHandler, JChainAuthHandler["create()"]());
  } else throw new TypeError('function invoked with invalid arguments');
};

module.exports = ChainAuthHandler;