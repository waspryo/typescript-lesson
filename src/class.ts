abstract class Person {
  static species = "Homo sapiens";
  static isAdult(age: number) {
    if (age > 17) return true;
    return false;
  }
  // name: string;
  // private age: number;
  // constructorは初期化するときに必要な関数
  constructor(public readonly name: string, protected age: number) {
    // this.name = initName;
    // this.age = initAge;
  }
  incrementAge() {
    this.age += 1;
  }
  greeting(this: Person) {
    console.log(`hello my name is ${this.name}, age is ${this.age}`);
    this.explainJob();
  }
  abstract explainJob(): void;
}
let person2 = Person;

const quill = new Person("Quill", 38);
console.log(quill.greeting());
quill.greeting();

class Teacher extends Person {
  private static instance: Teacher;
  explainJob() {
    console.log(`i teach ${this.subject}`);
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
  private constructor(name: string, age: number, private _subject: string) {
    super(name, age);
  }
  static getInstance() {
    if (Teacher.instance) return Teacher.instance;
    Teacher.instance = new Teacher("Quill", 17, "Math");
    return Teacher.instance;
  }
  // greeting() {
  //   console.log(
  //     `hello my name is ${this.name}, age is ${this.age} i teach ${this.subject}`
  //   );
  // }
}
// const teacher = new Teacher("Quill", 12, "Math");
// teacher.subject = "Music";
// console.log(teacher.subject, "aaaaaaaa");
// teacher.greeting();

// console.log(Person.species, "aaaaaaa");
// console.log(Person.isAdult(12), "aaaaaaa");

const teacher = Teacher.getInstance();
teacher.greeting;
