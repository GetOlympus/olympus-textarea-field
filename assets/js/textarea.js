!function(n){"use strict";function o(t,e){var o=this;o.$el=t,o.options=e,o.$field=o.$el.find(o.options.field),o.$counter=o.$el.find(o.options.counter),o.$counter.text(o.$field.val().length),o.$field.on("keyup",n.proxy(o.char_counter,o))}o.prototype.$counter=null,o.prototype.$field=null,o.prototype.$el=null,o.prototype.options=null,o.prototype.char_counter=function(){this.$counter.text(this.$field.val().length)};var e={init:function(t){if(!this.length)return!1;var e={counter:".counter",field:"textarea"};return this.each(function(){t&&n.extend(e,t),new o(n(this),e)})}};n.fn.dionysosTextarea=function(t){return e[t]?e[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?(n.error("Method "+t+" does not exist on dionysosTextarea"),!1):e.init.apply(this,arguments)}}(window.jQuery);