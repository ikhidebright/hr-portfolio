import popup from "~/plugins/alert/popup.vue";

const Plugin = {
  install(Vue, options = {}) {
    /**
     * Makes sure that plugin can be installed only once
     */
    if (this.installed) {
      return;
    }
    this.installed = true;

    /**
     * Create event bus
     */

    this.event = new Vue();

    /**
     * Plugin methods
     */
    Vue.prototype.$popup = {
      show(options = {}) {
        Plugin.event.$emit("show", options, true);
      }
    };

    /**
     * Registration of <popup/> component
     */
    Vue.component("popup", popup);
  }
};

export default Plugin;