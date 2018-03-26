// This file is auto gererated by build/bin/build-entry.js
import Actionsheet from './actionsheet';
import Address from './address';
import Badge from './badge';
import Button from './button';
import Calendar from './calendar';
import Cell from './cell';
import CellBox from './cell-box';
import Checkicon from './checkicon';
import Checklist from './checklist';
import Count from './count';
import Countup from './countup';
import Datetime from './datetime';
import Dialog from './dialog';
import Divider from './divider';
import Flexbox from './flexbox';
import FlexboxItem from './flexbox-item';
import Group from './group';
import Header from './header';
import Icons from './icons';
import ImgPreview from './img-preview';
import Indexlist from './indexlist';
import InlineDesc from './inline-desc';
import Inlinecalendar from './inlinecalendar';
import Input from './input';
import Keyboard from './keyboard';
import Lazyload from './lazyload';
import Loading from './loading';
import Noticebar from './noticebar';
import Picker from './picker';
import Popup from './popup';
import PopupPicker from './popup-picker';
import Pullrefresh from './pullrefresh';
import Pwdinput from './pwdinput';
import Qrcode from './qrcode';
import Radio from './radio';
import Range from './range';
import Rater from './rater';
import Scroll from './scroll';
import Search from './search';
import Slidbtn from './slidbtn';
import Step from './step';
import Steps from './steps';
import Swiper from './swiper';
import SwiperItem from './swiper-item';
import Switch from './switch';
import Tab from './tab';
import TabItem from './tab-item';
import Tabbar from './tabbar';
import TabbarItem from './tabbar-item';
import Textarea from './textarea';
import Toast from './toast';
import Uploader from './uploader';

const version = '0.4.14';
const components = [
  Actionsheet,
  Address,
  Badge,
  Button,
  Calendar,
  Cell,
  CellBox,
  Checkicon,
  Checklist,
  Count,
  Countup,
  Datetime,
  Divider,
  Flexbox,
  FlexboxItem,
  Group,
  Header,
  Icons,
  ImgPreview,
  Indexlist,
  InlineDesc,
  Inlinecalendar,
  Input,
  Keyboard,
  Loading,
  Noticebar,
  Picker,
  Popup,
  PopupPicker,
  Pullrefresh,
  Pwdinput,
  Qrcode,
  Radio,
  Range,
  Rater,
  Scroll,
  Search,
  Slidbtn,
  Step,
  Steps,
  Swiper,
  SwiperItem,
  Switch,
  Tab,
  TabItem,
  Tabbar,
  TabbarItem,
  Textarea,
  Uploader
];

const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
  Actionsheet,
  Address,
  Badge,
  Button,
  Calendar,
  Cell,
  CellBox,
  Checkicon,
  Checklist,
  Count,
  Countup,
  Datetime,
  Dialog,
  Divider,
  Flexbox,
  FlexboxItem,
  Group,
  Header,
  Icons,
  ImgPreview,
  Indexlist,
  InlineDesc,
  Inlinecalendar,
  Input,
  Keyboard,
  Lazyload,
  Loading,
  Noticebar,
  Picker,
  Popup,
  PopupPicker,
  Pullrefresh,
  Pwdinput,
  Qrcode,
  Radio,
  Range,
  Rater,
  Scroll,
  Search,
  Slidbtn,
  Step,
  Steps,
  Swiper,
  SwiperItem,
  Switch,
  Tab,
  TabItem,
  Tabbar,
  TabbarItem,
  Textarea,
  Toast,
  Uploader
};

export default {
  install,
  version
};
