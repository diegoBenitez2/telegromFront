export default {
    state: {
        modals: false,
    },
    getters: {
        getModals: (state) => state.modals,
    },
    mutations: {
        TOGGLE_MODALS(state) {
            state.modals = !state.modals;
        },
    },
    namespaced: true,
};
