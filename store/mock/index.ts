import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

const defState = {
    mock: 'ss'
};

const state = defState;

export const mock = {
    state,
    actions,
    mutations,
    getters,
    namespaced: true
};
