import { MutationTree } from 'vuex/types/index';

import { IMockState } from '@/types/store/mock';

export const mutations: MutationTree<IMockState> = {
    setMock(state, payload: string) {
        state.mock = payload;
    }
};

export default mutations;
