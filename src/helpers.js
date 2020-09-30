import ucfirst from './modules/ucfirst';
import ucwords from './modules/ucwords';

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

    /**
     * Uppercase the first character of each word in a string
     *
     * @return {string}
     */
    get ucwords() {
        return ucwords(this);
    }
}

export { Str, ucfirst, ucwords };
