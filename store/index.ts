import Vuex from 'vuex';

import { mock } from './mock';

const createStore = () => {
    return new Vuex.Store({
        state: {},
        modules: {
            mock
        }
    });
};

export default createStore;
