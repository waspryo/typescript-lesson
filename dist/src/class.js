"use strict";
class Person {
    // name: string;
    // private age: number;
    // constructorは初期化するときに必要な関数
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // this.name = initName;
        // this.age = initAge;
    }
    static isAdult(age) {
        if (age > 17)
            return true;
        return false;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`hello my name is ${this.name}, age is ${this.age}`);
    }
}
Person.species = "Homo sapiens";
let person2 = Person;
const quill = new Person("Quill", 38);
console.log(quill.greeting());
quill.greeting();
class Teacher extends Person {
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    get subject() {
        if (!this._subject) {
            throw new Error("there is no subject");
        }
        return this._subject;
    }
    set subject(value) {
        if (!value) {
            throw new Error("there is no subject");
        }
        this._subject = value;
    }
    greeting() {
        console.log(`hello my name is ${this.name}, age is ${this.age} i teach ${this.subject}`);
    }
}
const teacher = new Teacher("Quill", 12, "Math");
teacher.subject = "Music";
console.log(teacher.subject, "aaaaaaaa");
teacher.greeting();
console.log(Person.species, "aaaaaaa");
console.log(Person.isAdult(12), "aaaaaaa");
