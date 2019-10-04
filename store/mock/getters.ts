import { GetterTree } from 'vuex/types/index';

export const getters: GetterTree<any, any> = {
    getMock({ mock }: { mock: string }) {
        return mock;
    }
};
