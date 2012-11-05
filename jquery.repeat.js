/*jslint plusplus: true */
/*global jQuery */
(function ($) {
    "use strict";
    var options = {func: "append", times: 1};

    $.fn.repeat = function (opts) {
        var settings = $.extend(options, opts);
        if (!settings.content) {
            return this;
        }
        return this.each(function () {
            var $this, i;
            $this = $(this);
            for (i = 0; i < settings.times; i++) {
                $this[settings.func](settings.content);
            }
        });
    };
}(jQuery));