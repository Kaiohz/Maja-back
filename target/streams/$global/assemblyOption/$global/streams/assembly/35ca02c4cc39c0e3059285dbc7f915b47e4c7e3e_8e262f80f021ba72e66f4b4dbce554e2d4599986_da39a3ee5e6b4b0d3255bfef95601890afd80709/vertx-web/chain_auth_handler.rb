require 'vertx-web/auth_handler'
require 'vertx-auth-common/user'
require 'vertx-web/routing_context'
require 'vertx/util/utils.rb'
# Generated from io.vertx.ext.web.handler.ChainAuthHandler
module VertxWeb
  #  An auth handler that chains to a sequence of handlers.
  class ChainAuthHandler
    include ::VertxWeb::AuthHandler
    # @private
    # @param j_del [::VertxWeb::ChainAuthHandler] the java delegate
    def initialize(j_del)
      @j_del = j_del
    end
    # @private
    # @return [::VertxWeb::ChainAuthHandler] the underlying java delegate
    def j_del
      @j_del
    end
    @@j_api_type = Object.new
    def @@j_api_type.accept?(obj)
      obj.class == ChainAuthHandler
    end
    def @@j_api_type.wrap(obj)
      ChainAuthHandler.new(obj)
    end
    def @@j_api_type.unwrap(obj)
      obj.j_del
    end
    def self.j_api_type
      @@j_api_type
    end
    def self.j_class
      Java::IoVertxExtWebHandler::ChainAuthHandler.java_class
    end
    # @param [::VertxWeb::RoutingContext] arg0 
    # @return [void]
    def handle(arg0=nil)
      if arg0.class.method_defined?(:j_del) && !block_given?
        return @j_del.java_method(:handle, [Java::IoVertxExtWeb::RoutingContext.java_class]).call(arg0.j_del)
      end
      raise ArgumentError, "Invalid arguments when calling handle(#{arg0})"
    end
    #  Add a required authority for this auth handler
    # @param [String] authority the authority
    # @return [self]
    def add_authority(authority=nil)
      if authority.class == String && !block_given?
        @j_del.java_method(:addAuthority, [Java::java.lang.String.java_class]).call(authority)
        return self
      end
      raise ArgumentError, "Invalid arguments when calling add_authority(#{authority})"
    end
    #  Add a set of required authorities for this auth handler
    # @param [Set<String>] authorities the set of authorities
    # @return [self]
    def add_authorities(authorities=nil)
      if authorities.class == Set && !block_given?
        @j_del.java_method(:addAuthorities, [Java::JavaUtil::Set.java_class]).call(Java::JavaUtil::LinkedHashSet.new(authorities.map { |element| element }))
        return self
      end
      raise ArgumentError, "Invalid arguments when calling add_authorities(#{authorities})"
    end
    #  Parses the credentials from the request into a JsonObject. The implementation should
    #  be able to extract the required info for the auth provider in the format the provider
    #  expects.
    # @param [::VertxWeb::RoutingContext] context the routing context
    # @yield the handler to be called once the information is available.
    # @return [void]
    def parse_credentials(context=nil)
      if context.class.method_defined?(:j_del) && block_given?
        return @j_del.java_method(:parseCredentials, [Java::IoVertxExtWeb::RoutingContext.java_class,Java::IoVertxCore::Handler.java_class]).call(context.j_del,(Proc.new { |ar| yield(ar.failed ? ar.cause : nil, ar.succeeded ? ar.result != nil ? JSON.parse(ar.result.encode) : nil : nil) }))
      end
      raise ArgumentError, "Invalid arguments when calling parse_credentials(#{context})"
    end
    #  Authorizes the given user against all added authorities.
    # @param [::VertxAuthCommon::User] user a user.
    # @yield the handler for the result.
    # @return [void]
    def authorize(user=nil)
      if user.class.method_defined?(:j_del) && block_given?
        return @j_del.java_method(:authorize, [Java::IoVertxExtAuth::User.java_class,Java::IoVertxCore::Handler.java_class]).call(user.j_del,(Proc.new { |ar| yield(ar.failed ? ar.cause : nil) }))
      end
      raise ArgumentError, "Invalid arguments when calling authorize(#{user})"
    end
    # @return [::VertxWeb::ChainAuthHandler]
    def self.create
      if !block_given?
        return ::Vertx::Util::Utils.safe_create(Java::IoVertxExtWebHandler::ChainAuthHandler.java_method(:create, []).call(),::VertxWeb::ChainAuthHandler)
      end
      raise ArgumentError, "Invalid arguments when calling create()"
    end
    #  Appends a auth provider to the chain.
    # @param [::VertxWeb::AuthHandler] authHandler auth handler
    # @return [self]
    def append(authHandler=nil)
      if authHandler.class.method_defined?(:j_del) && !block_given?
        @j_del.java_method(:append, [Java::IoVertxExtWebHandler::AuthHandler.java_class]).call(authHandler.j_del)
        return self
      end
      raise ArgumentError, "Invalid arguments when calling append(#{authHandler})"
    end
    #  Removes a provider from the chain.
    # @param [::VertxWeb::AuthHandler] authHandler provider to remove
    # @return [true,false] true if provider was removed, false if non existent in the chain.
    def remove?(authHandler=nil)
      if authHandler.class.method_defined?(:j_del) && !block_given?
        return @j_del.java_method(:remove, [Java::IoVertxExtWebHandler::AuthHandler.java_class]).call(authHandler.j_del)
      end
      raise ArgumentError, "Invalid arguments when calling remove?(#{authHandler})"
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
