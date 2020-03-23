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

/** @module vertx-bridge-common-js/base_bridge_event */
var utils = require('vertx-js/util/utils');
var Future = require('vertx-js/future');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JBaseBridgeEvent = Java.type('io.vertx.ext.bridge.BaseBridgeEvent');

/**
 Represents an event that occurs on the event bus bridge.
 <p>
 Please consult the documentation for a full explanation.

 @class
*/
var BaseBridgeEvent = function(j_val) {

  var j_baseBridgeEvent = j_val;
  var that = this;
  Future.call(this, j_val, undefined);

  /**

   @public

   @return {boolean}
   */
  this.isComplete = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_baseBridgeEvent["isComplete()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param arg0 {function} 
   @return {Future}
   */
  this.setHandler = function(arg0) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_baseBridgeEvent["setHandler(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        arg0(ar.result(), null);
      } else {
        arg0(null, ar.cause());
      }
    });
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param arg0 {boolean} 
   */
  this.complete = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_baseBridgeEvent["complete()"]();
    }  else if (__args.length === 1 && typeof __args[0] ==='boolean') {
      j_baseBridgeEvent["complete(java.lang.Boolean)"](__args[0]);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param arg0 {string} 
   */
  this.fail = function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object') {
      j_baseBridgeEvent["fail(java.lang.Throwable)"](utils.convParamThrowable(__args[0]));
    }  else if (__args.length === 1 && typeof __args[0] === 'string') {
      j_baseBridgeEvent["fail(java.lang.String)"](__args[0]);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param arg0 {boolean} 
   @return {boolean}
   */
  this.tryComplete = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_baseBridgeEvent["tryComplete()"]();
    }  else if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return j_baseBridgeEvent["tryComplete(java.lang.Boolean)"](__args[0]);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param arg0 {string} 
   @return {boolean}
   */
  this.tryFail = function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object') {
      return j_baseBridgeEvent["tryFail(java.lang.Throwable)"](utils.convParamThrowable(__args[0]));
    }  else if (__args.length === 1 && typeof __args[0] === 'string') {
      return j_baseBridgeEvent["tryFail(java.lang.String)"](__args[0]);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {boolean}
   */
  this.result = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_baseBridgeEvent["result()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {todo}
   */
  this.cause = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnThrowable(j_baseBridgeEvent["cause()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {boolean}
   */
  this.succeeded = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_baseBridgeEvent["succeeded()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {boolean}
   */
  this.failed = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_baseBridgeEvent["failed()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @param next {Future} 
   @return {Future}
   */
  this.compose = function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(Future, j_baseBridgeEvent["compose(java.util.function.Function)"](function(jVal) {
      var jRet = __args[0](jVal);
      return jRet._jdel;
    }), undefined);
    }  else if (__args.length === 2 && typeof __args[0] === 'function' && typeof __args[1] === 'object' && __args[1]._jdel) {
      return utils.convReturnVertxGen(Future, j_baseBridgeEvent["compose(io.vertx.core.Handler,io.vertx.core.Future)"](function(jVal) {
      __args[0](jVal);
    }, __args[1]._jdel), undefined);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param value {Object} 
   @return {Future}
   */
  this.map = function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(Future, j_baseBridgeEvent["map(java.util.function.Function)"](function(jVal) {
      var jRet = __args[0](jVal);
      return utils.convParamTypeUnknown(jRet);
    }), undefined);
    }  else if (__args.length === 1 && typeof __args[0] !== 'function') {
      return utils.convReturnVertxGen(Future, j_baseBridgeEvent["map(java.lang.Object)"](utils.convParamTypeUnknown(__args[0])), undefined);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Future}
   */
  this.mapEmpty = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(Future, j_baseBridgeEvent["mapEmpty()"](), undefined);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {function}
   */
  this.completer = function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedcompleter == null) {
        that.cachedcompleter = utils.convReturnHandlerAsyncResult(j_baseBridgeEvent["completer()"](), function(result) { return result; });
      }
      return that.cachedcompleter;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param mapper {todo} 
   @return {Future}
   */
  this.recover = function(mapper) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(Future, j_baseBridgeEvent["recover(java.util.function.Function)"](function(jVal) {
      var jRet = mapper(utils.convReturnThrowable(jVal));
      return jRet._jdel;
    }), undefined);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param value {boolean} 
   @return {Future}
   */
  this.otherwise = function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(Future, j_baseBridgeEvent["otherwise(java.util.function.Function)"](function(jVal) {
      var jRet = __args[0](utils.convReturnThrowable(jVal));
      return jRet;
    }), undefined);
    }  else if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnVertxGen(Future, j_baseBridgeEvent["otherwise(java.lang.Boolean)"](__args[0]), undefined);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Future}
   */
  this.otherwiseEmpty = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(Future, j_baseBridgeEvent["otherwiseEmpty()"](), undefined);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Object} the type of the event
   */
  this.type = function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedtype == null) {
        that.cachedtype = utils.convReturnEnum(j_baseBridgeEvent["type()"]());
      }
      return that.cachedtype;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Get the raw JSON message for the event. This will be null for SOCKET_CREATED or SOCKET_CLOSED events as there is
   no message involved. If the returned message is modified, {@link BaseBridgeEvent#setRawMessage} should be called with the
   new message.

   @public

   @return {Object} the raw JSON message for the event
   */
  this.getRawMessage = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnJson(j_baseBridgeEvent["getRawMessage()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Get the raw JSON message for the event. This will be null for SOCKET_CREATED or SOCKET_CLOSED events as there is
   no message involved.

   @public
   @param message {Object} the raw message 
   @return {BaseBridgeEvent} this reference, so it can be used fluently
   */
  this.setRawMessage = function(message) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      j_baseBridgeEvent["setRawMessage(io.vertx.core.json.JsonObject)"](utils.convParamJsonObject(message));
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_baseBridgeEvent;
};

BaseBridgeEvent._jclass = utils.getJavaClass("io.vertx.ext.bridge.BaseBridgeEvent");
BaseBridgeEvent._jtype = {
  accept: function(obj) {
    return BaseBridgeEvent._jclass.isInstance(obj._jdel);
  },
  wrap: function(jdel) {
    var obj = Object.create(BaseBridgeEvent.prototype, {});
    BaseBridgeEvent.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
BaseBridgeEvent._create = function(jdel) {
  var obj = Object.create(BaseBridgeEvent.prototype, {});
  BaseBridgeEvent.apply(obj, arguments);
  return obj;
}
module.exports = BaseBridgeEvent;