import { MutationTree } from 'vuex/types/index';

export const mutations: MutationTree<any> = {
    setMock(state, payload: string) {
        state.mock = payload;
    }
};
