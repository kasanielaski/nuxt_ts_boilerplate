import { GetterTree } from 'vuex/types/index';

const getters: GetterTree<any, any> = {
    getMock({ mock }: { mock: string }) {
        return mock;
    }
};

export default getters;
