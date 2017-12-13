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
import Icon from './icon';
import Indexlist from './indexlist';
import InlineDesc from './inline-desc';
import Inlinecalendar from './inlinecalendar';
import Input from './input';
import Loading from './loading';
import Picker from './picker';
import Popup from './popup';
import PopupPicker from './popup-picker';
import Pullrefresh from './pullrefresh';
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
import Tabitem from './tabitem';
import Textarea from './textarea';
import Toast from './toast';

const version = '0.2.3';
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
  Icon,
  Indexlist,
  InlineDesc,
  Inlinecalendar,
  Input,
  Loading,
  Picker,
  Popup,
  PopupPicker,
  Pullrefresh,
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
  Tabitem,
  Textarea
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
  Icon,
  Indexlist,
  InlineDesc,
  Inlinecalendar,
  Input,
  Loading,
  Picker,
  Popup,
  PopupPicker,
  Pullrefresh,
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
  Tabitem,
  Textarea,
  Toast
};

export default {
  install,
  version
};
