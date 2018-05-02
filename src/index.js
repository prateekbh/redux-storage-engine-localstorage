import idbKeyVal from 'idb-keyval';

const idb = function idb(store) {
    return {
        load() {
            return idbKeyVal.get(store);
        },

        save(states) {
            return idbKeyVal.set(store, states);
        }
    };
};

export default idb;
