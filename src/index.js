import install from './install'

var deferred = {};
deferred.promise = new Promise(function(resolve, reject) {
  deferred.resolve = resolve
  deferred.reject = reject
})
var gio = {
  /**
  * internal user only
  */
  _cache: [],
  /**
   * internal user only, resolve the promise
   */
  _resolve () {
    deferred.resolve()
  },
  /**
     * internal user only, reject the promise
     */
  _reject () {
    deferred.reject()
  },

  /**
   * debug
   */
  debug () {},
  /**
   * the plugins is ready when the script is loaded
   */
  ready () {
    return deferred.promise
  },
  /**
   * install function
   */

  install,
}

export default gio
