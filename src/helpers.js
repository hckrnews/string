import ucfirst from './modules/ucfirst';

/**
 * String helper
 */
class Str extends String {
    /**
     * Make a string's first character uppercase
     *
     * @return {string}
     */
    get ucfirst() {
        return ucfirst(this);
    }
}

export { Str, ucfirst };
