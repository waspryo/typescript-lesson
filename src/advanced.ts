// AかつBのように、&を用いてインターセクション型を定義する方法
type Engineer = {
  name: string;
  role: string;
};
type Blogger = {
  name: string;
  follower: number;
};
// name role かつfollowerがないとダメ
// interfaceで書くこともできる
// type EngineerBlogger = Engineer & Blogger;
interface EngineerBlogger extends Engineer, Blogger {}

const quill1: EngineerBlogger = {
  name: 'Quill',
  role: 'front-end',
  follower: 21,
};

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

// 条件文を使って型を絞り込む、３つのType guard
