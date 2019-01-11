export default function install (Vue, options) {
  if (this.install.installed) return

  let siteId = null

  if (typeof options === 'object') {
    siteId = options.siteId
  } else {
    siteId = options
  }

  if (!siteId) {
    return console.error('siteId is missing')
  }

  this.install.installed = true
  const script = document.createElement('script')
  script.innerHTML = `!function(e,t,n,g,i){e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},n=t.createElement("script"),tag=t.getElementsByTagName("script")[0],n.async=1,n.src=('https:'==document.location.protocol?'https://':'http://')+g,tag.parentNode.insertBefore(n,tag)}(window,document,"script","assets.growingio.com/2.1/gio.js","gio");`
  document.body.appendChild(script)
  gio('init', siteId, {})
  if(options.config) {
    // 若是路由模式为hash，需要加上 {hashtag: true}
    gio('config', options.config);
  }
  gio('send')
}
