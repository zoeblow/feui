// not a good way but works well
window.__$nuimPopups = window.__$nuimPopups || {}
const popupDialog = function (option) {
  this.uuid = Math.random().toString(36).substring(3, 8)
  this.params = {}
  if (Object.prototype.toString.call(option) === '[object Object]') {
    this.params = {
      hideOnBlur: option.hideOnBlur,
      onOpen: option.onOpen || function () {},
      onClose: option.onClose || function () {},
      showMask: option.showMask
    }
  }
  if (!!document.querySelectorAll('.nuim-popup-mask').length <= 0) {
    this.divMask = document.createElement('a')
    this.divMask.className = 'nuim-popup-mask'
    this.divMask.dataset.uuid = ''
    this.divMask.href = 'javascript:void(0)'
    document.body.appendChild(this.divMask)
  }
  let div
  if (!option.container) {
    div = document.createElement('div')
  } else {
    div = option.container
  }

  div.className += ` nuim-popup-dialog nuim-popup-dialog-${this.uuid}`
  if (!this.params.hideOnBlur) {
    div.className += ' nuim-popup-mask-disabled'
  }

  this.div = div

  if (!option.container) {
    document.body.appendChild(div)
  }
  this.container = document.querySelector('.nuim-popup-dialog-' + this.uuid)
  this.mask = document.querySelector('.nuim-popup-mask')
  this.mask.dataset.uuid += `,${this.uuid}`
  this._bindEvents()
  option = null
  this.containerHandler = () => {
    this.mask && !/show/.test(this.mask.className) && setTimeout(() => {
      !/show/.test(this.mask.className) && (this.mask.style['zIndex'] = -1)
    }, 200)
  }

  this.container.addEventListener('webkitTransitionEnd', this.containerHandler)
  this.container.addEventListener('transitionend', this.containerHandler)
}

popupDialog.prototype.onClickMask = function () {
  this.params.hideOnBlur && this.params.onClose()
}

popupDialog.prototype._bindEvents = function () {
  this.params.hideOnBlur && this.mask.addEventListener('click', this.onClickMask.bind(this), false)
}

popupDialog.prototype.show = function () {
  if (this.params.showMask) {
    this.mask.classList.add('nuim-popup-show')
    this.mask.style['zIndex'] = 500
  }
  this.container.classList.add('nuim-popup-show')
  this.params.onOpen && this.params.onOpen(this)
  window.__$nuimPopups[this.uuid] = 1
}

popupDialog.prototype.hide = function (shouldCallback = true) {
  this.container.classList.remove('nuim-popup-show')
  if (!document.querySelector('.nuim-popup-dialog.nuim-popup-show')) {
    this.mask.classList.remove('nuim-popup-show')
    setTimeout(() => {
      this.mask && !/show/.test(this.mask.className) && (this.mask.style['zIndex'] = -1)
    }, 400)
  }
  shouldCallback === false && this.params.onClose && this.params.hideOnBlur && this.params.onClose(this)
  this.isShow = false
  delete window.__$nuimPopups[this.uuid]
}

popupDialog.prototype.destroy = function () {
  this.mask.dataset.uuid = this.mask.dataset.uuid.replace(new RegExp(`,${this.uuid}`, 'g'), '')
  if (!this.mask.dataset.uuid) {
    this.mask.removeEventListener('click', this.onClickMask.bind(this), false)
    this.mask && this.mask.parentNode && this.mask.parentNode.removeChild(this.mask)
  } else {
    this.hide()
  }
  this.container.removeEventListener('webkitTransitionEnd', this.containerHandler)
  this.container.removeEventListener('transitionend', this.containerHandler)
  delete window.__$nuimPopups[this.uuid]
}

export default popupDialog
