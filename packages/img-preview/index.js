import Vue from 'vue';
import ImgPreview from './img-preview';

let instance;

const ImgPreviewConstructor = Vue.extend(ImgPreview);

const initInstance = () => {
  instance = new ImgPreviewConstructor({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);
};

const ImgPreviewBox = (images, startPosition) => {
  if (!instance) {
    initInstance();
  }
  const config = Array.isArray(images) ? { images, startPosition } : images;
  // console.log(config)
  instance.images = config.images;
  instance.startPosition = config.startPosition || 0;
  instance.value = true;
  instance.$on('input', show => {
    instance.value = show;
  });
  instance.close =function(){
    instance.value = false;
  }
  console.log(instance)
  return instance;
};
export default ImgPreviewBox;
