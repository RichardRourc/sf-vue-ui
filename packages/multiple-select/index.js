import MultiSelect from './src/SelectCascade';
/* istanbul ignore next */
MultiSelect.install = function (Vue) {
  Vue.component(MultiSelect.name, MultiSelect);
};

export default MultiSelect;