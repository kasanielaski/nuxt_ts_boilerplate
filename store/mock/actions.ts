import { ActionTree } from 'vuex/types/index';

export const actions: ActionTree<any, any> = {
    setMock({ commit }, payload: string) {
        commit('setMock', payload);
    }
};
