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

const ImgPreviewBox = (images, startPosition = 0) => {
  if (!instance) {
    initInstance();
  }
  
  instance.images = images;
  instance.startPosition = startPosition;
  instance.value = true;
  instance.$on('input', show => {
    instance.value = show;
  });
  instance.close =function(){
    instance.value = false;
  }
  return instance;
};

export default ImgPreviewBox;
