const CACHED = {};

export default class Registry {

    #prefix = '';

    get prefix() {
        return this.#prefix||'';
    }

    get(key, defaultValue) {

        key = (this.#prefix||'') + key;

        if(!(key in CACHED)) {
            try {
                return CACHED[key] = JSON.parse(localStorage.getItem(key) || 'null');
            }catch{
                return CACHED[key] = defaultValue;
            }
        }

        return CACHED[key];
    }

    set(key, value) {
        key = (this.#prefix||'') + key;

        CACHED[key] = value;
        localStorage.setItem(key, JSON.stringify(value));
    }

    remove(key) {
        key = (this.#prefix||'') + key;
        localStorage.removeItem(key);
        delete CACHED[key];
    }

    has(key) {
        return this.get(key)!==void 0;
    }
};