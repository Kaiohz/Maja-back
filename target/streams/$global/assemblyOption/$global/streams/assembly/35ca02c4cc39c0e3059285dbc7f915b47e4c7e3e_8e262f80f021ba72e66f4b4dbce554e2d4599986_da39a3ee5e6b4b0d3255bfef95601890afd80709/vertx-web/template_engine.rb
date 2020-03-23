require 'vertx/buffer'
require 'vertx-web/routing_context'
require 'vertx/util/utils.rb'
# Generated from io.vertx.ext.web.templ.TemplateEngine
module VertxWeb
  #  A template engine uses a specific template and the data in a routing context to render a resource into a buffer.
  #  <p>
  #  Concrete implementations exist for several well-known template engines.
  class TemplateEngine
    # @private
    # @param j_del [::VertxWeb::TemplateEngine] the java delegate
    def initialize(j_del)
      @j_del = j_del
    end
    # @private
    # @return [::VertxWeb::TemplateEngine] the underlying java delegate
    def j_del
      @j_del
    end
    @@j_api_type = Object.new
    def @@j_api_type.accept?(obj)
      obj.class == TemplateEngine
    end
    def @@j_api_type.wrap(obj)
      TemplateEngine.new(obj)
    end
    def @@j_api_type.unwrap(obj)
      obj.j_del
    end
    def self.j_api_type
      @@j_api_type
    end
    def self.j_class
      Java::IoVertxExtWebTempl::TemplateEngine.java_class
    end
    #  Render the template
    #  <p>
    #  <b>NOTE</b> if you call method directly (i.e. not using {::VertxWeb::TemplateHandler}) make sure
    #  that <i>templateFileName</i> is sanitized via {Nil#normalize_path}
    # @param [::VertxWeb::RoutingContext] context the routing context
    # @param [String] templateDirectory the template directory to use
    # @param [String] templateFileName the relative template file name to use
    # @yield the handler that will be called with a result containing the buffer or a failure.
    # @return [void]
    def render(context=nil,templateDirectory=nil,templateFileName=nil)
      if context.class.method_defined?(:j_del) && templateDirectory.class == String && block_given? && templateFileName == nil
        return @j_del.java_method(:render, [Java::IoVertxExtWeb::RoutingContext.java_class,Java::java.lang.String.java_class,Java::IoVertxCore::Handler.java_class]).call(context.j_del,templateDirectory,(Proc.new { |ar| yield(ar.failed ? ar.cause : nil, ar.succeeded ? ::Vertx::Util::Utils.safe_create(ar.result,::Vertx::Buffer) : nil) }))
      elsif context.class.method_defined?(:j_del) && templateDirectory.class == String && templateFileName.class == String && block_given?
        return @j_del.java_method(:render, [Java::IoVertxExtWeb::RoutingContext.java_class,Java::java.lang.String.java_class,Java::java.lang.String.java_class,Java::IoVertxCore::Handler.java_class]).call(context.j_del,templateDirectory,templateFileName,(Proc.new { |ar| yield(ar.failed ? ar.cause : nil, ar.succeeded ? ::Vertx::Util::Utils.safe_create(ar.result,::Vertx::Buffer) : nil) }))
      end
      raise ArgumentError, "Invalid arguments when calling render(#{context},#{templateDirectory},#{templateFileName})"
    end
    #  Returns true if the template engine caches template files. If false, then template files are freshly loaded each
    #  time they are used.
    # @return [true,false] True if template files are cached; otherwise, false.
    def caching_enabled?
      if !block_given?
        return @j_del.java_method(:isCachingEnabled, []).call()
      end
      raise ArgumentError, "Invalid arguments when calling caching_enabled?()"
    end
  end
end
