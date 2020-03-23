require 'vertx-auth-common/user'
require 'vertx-auth-common/auth_provider'
require 'vertx/util/utils.rb'
# Generated from io.vertx.ext.auth.ChainAuth
module VertxAuthCommon
  #  Chain several auth providers as if they were one. This is useful for cases where one want to authenticate across
  #  several providers, for example, database and fallback to passwd file.
  class ChainAuth < ::VertxAuthCommon::AuthProvider
    # @private
    # @param j_del [::VertxAuthCommon::ChainAuth] the java delegate
    def initialize(j_del)
      super(j_del)
      @j_del = j_del
    end
    # @private
    # @return [::VertxAuthCommon::ChainAuth] the underlying java delegate
    def j_del
      @j_del
    end
    @@j_api_type = Object.new
    def @@j_api_type.accept?(obj)
      obj.class == ChainAuth
    end
    def @@j_api_type.wrap(obj)
      ChainAuth.new(obj)
    end
    def @@j_api_type.unwrap(obj)
      obj.j_del
    end
    def self.j_api_type
      @@j_api_type
    end
    def self.j_class
      Java::IoVertxExtAuth::ChainAuth.java_class
    end
    #  Authenticate a user.
    #  <p>
    #  The first argument is a JSON object containing information for authenticating the user. What this actually contains
    #  depends on the specific implementation. In the case of a simple username/password based
    #  authentication it is likely to contain a JSON object with the following structure:
    #  <pre>
    #    {
    #      "username": "tim",
    #      "password": "mypassword"
    #    }
    #  </pre>
    #  For other types of authentication it contain different information - for example a JWT token or OAuth bearer token.
    #  <p>
    #  If the user is successfully authenticated a {::VertxAuthCommon::User} object is passed to the handler in an {AsyncResult}.
    #  The user object can then be used for authorisation.
    # @param [Hash{String => Object}] authInfo The auth information
    # @yield The result handler
    # @return [void]
    def authenticate(authInfo=nil)
      if authInfo.class == Hash && block_given?
        return @j_del.java_method(:authenticate, [Java::IoVertxCoreJson::JsonObject.java_class,Java::IoVertxCore::Handler.java_class]).call(::Vertx::Util::Utils.to_json_object(authInfo),(Proc.new { |ar| yield(ar.failed ? ar.cause : nil, ar.succeeded ? ::Vertx::Util::Utils.safe_create(ar.result,::VertxAuthCommon::User) : nil) }))
      end
      raise ArgumentError, "Invalid arguments when calling authenticate(#{authInfo})"
    end
    #  Create a Chainable Auth Provider auth provider
    # @return [::VertxAuthCommon::ChainAuth] the auth provider
    def self.create
      if !block_given?
        return ::Vertx::Util::Utils.safe_create(Java::IoVertxExtAuth::ChainAuth.java_method(:create, []).call(),::VertxAuthCommon::ChainAuth)
      end
      raise ArgumentError, "Invalid arguments when calling create()"
    end
    #  Appends a auth provider to the chain.
    # @param [::VertxAuthCommon::AuthProvider] other auth provider
    # @return [self]
    def append(other=nil)
      if other.class.method_defined?(:j_del) && !block_given?
        @j_del.java_method(:append, [Java::IoVertxExtAuth::AuthProvider.java_class]).call(other.j_del)
        return self
      end
      raise ArgumentError, "Invalid arguments when calling append(#{other})"
    end
    #  Removes a provider from the chain.
    # @param [::VertxAuthCommon::AuthProvider] other provider to remove
    # @return [true,false] true if provider was removed, false if non existent in the chain.
    def remove?(other=nil)
      if other.class.method_defined?(:j_del) && !block_given?
        return @j_del.java_method(:remove, [Java::IoVertxExtAuth::AuthProvider.java_class]).call(other.j_del)
      end
      raise ArgumentError, "Invalid arguments when calling remove?(#{other})"
    end
    #  Clears the chain.
    # @return [void]
    def clear
      if !block_given?
        return @j_del.java_method(:clear, []).call()
      end
      raise ArgumentError, "Invalid arguments when calling clear()"
    end
  end
end
