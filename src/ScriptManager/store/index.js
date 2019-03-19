import Vue from 'vue';
import Vuex from 'vuex';

/**
 * Modules
 */
import Base from './modules/Base';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Base,
  },
});
