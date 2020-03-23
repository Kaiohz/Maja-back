require 'vertx/vertx'
require 'vertx/util/utils.rb'
# Generated from io.vertx.ext.auth.VertxContextPRNG
module VertxAuthCommon
  #  A secure non blocking random number generator isolated to the current context. The PRNG is bound to the vert.x
  #  context and setup to close when the context shuts down.
  #  <p>
  #  When applicable, use of VertxContextPRNG rather than create new PRNG objects is helpful to keep the system entropy
  #  usage to the minimum avoiding potential blocking across the application.
  #  <p>
  #  The use of VertxContextPRNG is particularly appropriate when multiple handlers use random numbers.
  class VertxContextPRNG
    # @private
    # @param j_del [::VertxAuthCommon::VertxContextPRNG] the java delegate
    def initialize(j_del)
      @j_del = j_del
    end
    # @private
    # @return [::VertxAuthCommon::VertxContextPRNG] the underlying java delegate
    def j_del
      @j_del
    end
    @@j_api_type = Object.new
    def @@j_api_type.accept?(obj)
      obj.class == VertxContextPRNG
    end
    def @@j_api_type.wrap(obj)
      VertxContextPRNG.new(obj)
    end
    def @@j_api_type.unwrap(obj)
      obj.j_del
    end
    def self.j_api_type
      @@j_api_type
    end
    def self.j_class
      Java::IoVertxExtAuth::VertxContextPRNG.java_class
    end
    #  Get or create a secure non blocking random number generator using the current vert.x instance. Since the context
    #  might be different this method will attempt to use the current context first if available and then fall back to
    #  create a new instance of the PRNG.
    # @param [::Vertx::Vertx] vertx a Vert.x instance.
    # @return [::VertxAuthCommon::VertxContextPRNG] A secure non blocking random number generator.
    def self.current(vertx=nil)
      if !block_given? && vertx == nil
        return ::Vertx::Util::Utils.safe_create(Java::IoVertxExtAuth::VertxContextPRNG.java_method(:current, []).call(),::VertxAuthCommon::VertxContextPRNG)
      elsif vertx.class.method_defined?(:j_del) && !block_given?
        return ::Vertx::Util::Utils.safe_create(Java::IoVertxExtAuth::VertxContextPRNG.java_method(:current, [Java::IoVertxCore::Vertx.java_class]).call(vertx.j_del),::VertxAuthCommon::VertxContextPRNG)
      end
      raise ArgumentError, "Invalid arguments when calling current(#{vertx})"
    end
    #  Returns a Base64 mime encoded String of random data with the given length. The length parameter refers to the length
    #  of the String before the encoding step.
    # @param [Fixnum] length the desired string length before Base64 encoding.
    # @return [String] A base 64 encoded string.
    def next_string(length=nil)
      if length.class == Fixnum && !block_given?
        return @j_del.java_method(:nextString, [Java::int.java_class]).call(length)
      end
      raise ArgumentError, "Invalid arguments when calling next_string(#{length})"
    end
    #  Returns a secure random int
    # @return [Fixnum] random int.
    def next_int
      if !block_given?
        return @j_del.java_method(:nextInt, []).call()
      end
      raise ArgumentError, "Invalid arguments when calling next_int()"
    end
  end
end
