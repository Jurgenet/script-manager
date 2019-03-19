import mockData from './mockData.json';

import { INIT, SET_PASSING_SCRIPT_ID } from './types';

const actions = {
  init({ commit }) {
    const { scripts } = mockData;

    commit(INIT, { scripts });
  },

  setPassingScriptId({ commit }, { scriptId }) {
    commit(SET_PASSING_SCRIPT_ID, { scriptId });
  },
};

export default actions;
