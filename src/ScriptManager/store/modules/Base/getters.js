const getters = {
  isInit(state) {
    return state.isInit;
  },

  scripts(state) {
    return state.scripts;
  },

  isScriptSelected(state) {
    return state.passingScriptId !== null;
  },

  selectedScript(state) {
    return state.scripts.find(script => {
      return script.id === state.passingScriptId;
    });
  },
};

export default getters;
