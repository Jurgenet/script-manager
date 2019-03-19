import Vue from 'vue';

import { INIT, SET_PASSING_SCRIPT_ID } from './types';

const mutations = {
  [INIT](state, { scripts }) {
    Vue.set(state, 'scripts', scripts);
    Vue.set(state, 'isInit', true);
  },

  [SET_PASSING_SCRIPT_ID](state, { scriptId }) {
    Vue.set(state, 'passingScriptId', scriptId);
  },
};

export default mutations;
