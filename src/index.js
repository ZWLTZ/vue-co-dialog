(function () {

function plugin(Vue, coog) {

  if (plugin.installed) {
    return
  }
  plugin.installed = true

  if (!coog) {
    console.error('You have to install coog')
    return
  }

  Vue.coog = coog

  Object.defineProperties(Vue.prototype, {
    $coog: {
      get() {
        return coog
      }
    },
  })
}

if (typeof exports == "object") {
  module.exports = plugin
} else if (typeof define == "function" && define.amd) {
  define([], function(){ return plugin })
} else if (window.Vue && window.coog) {
  Vue.use(plugin, window.coog)
}

})();