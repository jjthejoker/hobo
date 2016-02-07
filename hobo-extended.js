/*!
 *
 *
 * @hobo
 * @author: kitajchuk
 *
 * @links
 * https://developer.mozilla.org/en-US/docs/Web/API/Node
 * https://developer.mozilla.org/en-US/docs/Web/API/Element
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * https://github.com/jakearchibald/es6-promise
 * http://www.html5rocks.com/en/tutorials/es6/promises/
 *
 *
 */
(function ( factory ) {

    if ( typeof exports === "object" && typeof module !== "undefined" ) {
        module.exports = factory();

    } else if ( typeof window !== "undefined" ) {
        window.hobo = factory();
    }

})(function () {

    var Hobo = require( "./lib/Hobo" ),
        utils = require( "./lib/utils" );


    // Core Hobo methods
    Hobo.prototype.on = require( "./lib/core/on" );
    Hobo.prototype.eq = require( "./lib/core/eq" );
    Hobo.prototype.not = require( "./lib/core/not" );
    Hobo.prototype.off = require( "./lib/core/off" );
    Hobo.prototype.data = require( "./lib/core/data" );
    Hobo.prototype.find = require( "./lib/core/find" );
    Hobo.prototype.filter = require( "./lib/core/filter" );
    Hobo.prototype.detach = require( "./lib/core/detach" );
    Hobo.prototype.append = require( "./lib/core/append" );
    Hobo.prototype.addClass = require( "./lib/core/addClass" );
    Hobo.prototype.removeClass = require( "./lib/core/removeClass" );


    // Extended Hobo methods
    Hobo.prototype.attr = require( "./lib/extended/attr" );
    Hobo.prototype.index = require( "./lib/extended/index" );
    Hobo.prototype.parent = require( "./lib/extended/parent" );
    Hobo.prototype.remove = require( "./lib/extended/remove" );
    Hobo.prototype.trigger = require( "./lib/extended/trigger" );
    Hobo.prototype.prepend = require( "./lib/extended/prepend" );
    Hobo.prototype.closest = require( "./lib/extended/closest" );
    Hobo.prototype.appendTo = require( "./lib/extended/appendTo" );
    Hobo.prototype.children = require( "./lib/extended/children" );
    Hobo.prototype.prependTo = require( "./lib/extended/prependTo" );
    Hobo.prototype.toggleClass = require( "./lib/extended/toggleClass" );
    Hobo.prototype.insertAfter = require( "./lib/extended/insertAfter" );
    Hobo.prototype.insertBefore = require( "./lib/extended/insertBefore" );


    /**
     *
     * @public
     * @method hobo
     * @description Wrapper for `Hobo` instances.
     * @param {string} selector The parameter passed to `querySelectorAll`
     * @param {element} context The Element used to call `querySelectorAll`
     *
     */
    hobo = function ( selector, context ) {
        return new Hobo( selector, context );
    };


    // Attach Hobo utilities to `wrapper` method
    hobo.ajax = require( "./lib/core/ajax" );
    hobo.promise = require( "./lib/core/promise" );


    return hobo;

});