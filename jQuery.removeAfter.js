(function( $ ) {
  $.fn.addClassForPeriod = function(cssClass, removeAfter) {
    // add a class to the matched elements
    // after 'removeAfter' milliseconds remove the class
    var self = this;
    removeAfter = removeAfter || 0;
    this.addClass(cssClass);
    setTimeout(function () { self.removeClass(cssClass); },removeAfter);
    return this;
  };
})( jQuery );
