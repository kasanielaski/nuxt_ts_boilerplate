import { ActionTree } from 'vuex/types/index';

import { IMockState } from '@/types/store/mock';
import { IRootState } from '@/types/store';

const actions: ActionTree<IMockState, IRootState> = {
    setMock({ commit }, payload: string) {
        commit('setMock', payload);
    }
};

export default actions;
