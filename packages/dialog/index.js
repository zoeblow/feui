import Vue from 'vue';
import DialogComponent from './dialog';

let instance;

const initInstance = () => {
  const DialogConstructor = Vue.extend(DialogComponent);
  instance = new DialogConstructor({
    el: document.createElement('div')
  });

  instance.$on('input', value => {
    instance.value = value;
  });

  document.body.appendChild(instance.$el);
};

const Dialog = options => {
  return new Promise((resolve, reject) => {
    if (!instance) {
      initInstance();
    }

    Object.assign(instance, Dialog.currentOptions, options, {
      resolve,
      reject
    });
  });
};

Dialog.defaultOptions = {
  value: true,
  title: '',
  message: '',
  skin: 'ios',
  className: '',
  overlay: true,
  lockOnScroll: true,
  beforeClose: null,
  messageAlign: '',
  confirmButtonText: '确定',
  cancelButtonText: '取消',
  showConfirmButton: true,
  showCancelButton: false,
  closeOnClickOverlay: false,
  callback: action => {
    instance[action === 'confirm' ? 'resolve' : 'reject'](action);
  }
};

Dialog.alert = Dialog;

Dialog.confirm = options =>
  Dialog({
    showCancelButton: true,
    ...options
  });

Dialog.close = () => {
  if (instance) {
    instance.value = false;
  }
};

Dialog.setDefaultOptions = options => {
  Object.assign(Dialog.currentOptions, options);
};

Dialog.resetDefaultOptions = () => {
  Dialog.currentOptions = { ...Dialog.defaultOptions };
};

Dialog.install = () => {
  Vue.use(DialogComponent);
};

Vue.prototype.$dialog = Dialog;
Dialog.resetDefaultOptions();

export default Dialog;
