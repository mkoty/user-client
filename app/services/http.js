import $ from "jquery";

export default class http {
    constructor() {
    }

    static URL = 'http://localhost:9000/';

    static getNames(name, lastName, fatherName) {
        return $.post(this.URL + 'names', {name, lastName, fatherName});
    }

    static getLastNames(name, lastName, fatherName) {
        return $.post(this.URL + 'lastNames', {name, lastName, fatherName});
    }

    static getFatherNames(name, lastName, fatherName) {
        return $.post(this.URL + 'fatherNames', {name, lastName, fatherName});
    }

    static getUsersByFullName(name, lastName, fatherName) {
        return $.post(this.URL + 'usersByFullName', {name, lastName, fatherName});
    }
}