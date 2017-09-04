import Vue from 'vue'
const Loading = Vue.extend(require('./loading.vue'))
let instance
let timer

export default {
  show (options = {}) {
    if (!instance) {
      instance = new Loading({
        el: document.createElement('div')
      })
    }
    if (instance.visible) return
    instance.text = typeof options === 'string' ? options : options.text || ''
    document.body.appendChild(instance.$el)
    if (timer) {
      clearTimeout(timer)
    }

    Vue.nextTick(() => {
      instance.visible = true
    })
  },
  hide () {
    if (instance) {
      instance.visible = false
      timer = setTimeout(() => {
        if (instance.$el) {
          instance.$el.remove()
        }
      }, 400)
    }
  }
}
