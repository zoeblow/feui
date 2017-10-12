import Button from './components/button/index'
import Header from './components/header/index'
import Cell from './components/cell/index'
import Divider from './components/divider/index'
import InlineDesc from './components/inline-desc/index'
import CellBox from './components/cell-box/index'
import Icon from './components/icon/index'
import Input from './components/input/index'
import Textarea from './components/textarea/index'
import Switch from './components/switch/index'
import Indexlist from './components/indexlist/index'
import Search from './components/search/index'
import Count from './components/count/index'
import Group from './components/group/index'
import Toast from './components/toast/index'
import Loading from './components/loading/index'
import Dialog from './components/dialog/index'
import Actionsheet from './components/actionsheet/index'
import Pullrefresh from './components/pullrefresh/index'
import Radio from './components/radio/index'
import Checkicon from './components/checkicon/index'
import Range from './components/range/index'
import Rater from './components/rater/index'
import Popup from './components/popup/index'
import Scroll from './components/scroll/index'
import Flexbox from './components/flexbox/index'
import FlexboxItem from './components/flexbox-item/index'
import Picker from './components/picker/index'
import Countup from './components/countup/index'
import PopupPicker from './components/popup-picker/index'
import Address from './components/address/index'

const version = '0.0.14'
const install = function (Vue, config = {}) {
  if (install.installed) return
  Vue.component(Button.name, Button)
  Vue.component(Header.name, Header)
  Vue.component(Cell.name, Cell)
  Vue.component(Divider.name, Divider)
  Vue.component(InlineDesc.name, InlineDesc)
  Vue.component(CellBox.name, CellBox)
  Vue.component(Icon.name, Icon)
  Vue.component(Input.name, Input)
  Vue.component(Textarea.name, Textarea)
  Vue.component(Switch.name, Switch)
  Vue.component(Indexlist.name, Indexlist)
  Vue.component(Search.name, Search)
  Vue.component(Count.name, Count)
  Vue.component(Group.name, Group)
  Vue.component(Actionsheet.name, Actionsheet)
  Vue.component(Pullrefresh.name, Pullrefresh)
  Vue.component(Radio.name, Radio)
  Vue.component(Checkicon.name, Checkicon)
  Vue.component(Range.name, Range)
  Vue.component(Rater.name, Rater)
  Vue.component(Popup.name, Popup)
  Vue.component(Scroll.name, Scroll)
  Vue.component(Flexbox.name, Flexbox)
  Vue.component(FlexboxItem.name, FlexboxItem)
  Vue.component(Picker.name, Picker)
  Vue.component(Countup.name, Countup)
  Vue.component(PopupPicker.name, PopupPicker)
  Vue.component(Address.name, Address)
  
  Vue.$toast = Vue.prototype.$toast = Toast
  Vue.$dialog = Vue.prototype.$dialog = Dialog
  Vue.$loading = Vue.prototype.$loading = Loading
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
  install,
  version,
  Button,
  Header,
  Cell,
  Divider,
  InlineDesc,
  CellBox,
  Icon,
  Input,
  Textarea,
  Switch,
  Indexlist,
  Search,
  Count,
  Group,
  Toast,
  Loading,
  Dialog,
  Actionsheet,
  Pullrefresh,
  Radio,
  Checkicon,
  Range,
  Rater,
  Popup,
  Scroll,
  Flexbox,
  FlexboxItem,
  Picker,
  Countup,
  PopupPicker,
  Address
}
