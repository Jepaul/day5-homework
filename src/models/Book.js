

export default class Book {
    constructor(name, completed) {
        this.id = new Date().getTime();
        this.name = name;
        this.completed = completed;
    }
}