/**
 * Create a component with common options
 */
import Icon from '../icons';
import install from './install';
import Loading from '../loading';

export default function(sfc) {
  sfc.install = sfc.install || install;
  sfc.mixins = sfc.mixins || [];
  sfc.components = sfc.components || {};
  sfc.components.icon = Icon;
  sfc.components.loading = Loading;
  return sfc;
};
