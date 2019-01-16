export default function install (Vue, options) {
  if (this.install.installed) return

  var siteId = null
  var config = {}

  if (typeof options === 'object') {
    siteId = options.siteId
    config = options.config || config
  } else {
    siteId = options
  }

  if (!siteId) {
    return console.error('siteId is missing')
  }

  this.install.installed = true
  var script = document.createElement('script')
  script.innerHTML = `!function(e,t,n,g,i){e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},n=t.createElement("script"),tag=t.getElementsByTagName("script")[0],n.async=1,n.src=('https:'==document.location.protocol?'https://':'http://')+g,tag.parentNode.insertBefore(n,tag)}(window,document,"script","assets.growingio.com/2.1/gio.js","gio");`
  document.body.appendChild(script)
  gio('init', siteId, config)
  gio('send')
}
