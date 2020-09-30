import ucfirst from './ucfirst';

class Ucwords {
    constructor(original) {
        this.original = original;
    }

    get words() {
        return this.original.split(' ');
    }

    static create(original) {
        const newString = new Ucwords(original);
        return newString.words.map(ucfirst).join(' ');
    }
}

export default function ucwords(original) {
    return Ucwords.create(original);
}
