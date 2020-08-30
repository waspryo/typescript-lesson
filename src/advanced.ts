// AかつBのように、&を用いてインターセクション型を定義する方法
type Engineer = {
  kind: 'engineer';
  name: string;
  role: string;
};
type Blogger = {
  kind: 'blogger';
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

// typeof演算子

// *関数のオーバーロードを使って、戻り値の型を正しくTypeScriptに伝える方法====================================
// 関数のオーバーロード
// 関数の返り値を正しく伝えること
function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: string | number): string | number {
  if (typeof x === 'string') {
    return x.toUpperCase();
  }
  return x;
}
const upperHello = toUpperCase('hello');

// in演算子
type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
  // nameがどちらも持っているからアクセスできる
  console.log(nomadWorker.name);
  // 左にプロパティ名、キーの名前、右側にオブジェクト
  if ('role' in nomadWorker) {
    console.log(nomadWorker.role);
  }
}

// instanseOf演算子
class Dog {
  kind: 'dog' = 'dog';
  speak() {
    console.log('bow-wow');
  }
}

class Bird {
  kind: 'bird' = 'bird';
  speak() {
    console.log('tweet-tweet ');
  }
  fly() {
    console.log('flutter');
  }
}
type Pet = Dog | Bird;
function havePet(pet: Pet) {
  pet.speak();
  switch (pet.kind) {
    case 'bird':
      pet.fly();
  }
  if (pet instanceof Bird) {
    pet.fly();
  }
}
havePet(new Bird());

const input = <HTMLInputElement>document.getElementById('input');
input.value = 'initial input value';

interface Designer {
  name: string;
  [index: string]: string;
}

const designer: Designer = {
  name: 'Quill',
  role: 'web',
};

// Optional Chainingはこう使う！=======================
// この例の場合、もしuserがあればuserのnameを返し、なければundefindを返す。
// またnameがあればfirstを返し、なければundefindを返す
interface DownloadedData {
  id: number;
  user?: {
    name?: {
      first: string;
      last: string;
    };
  };
}
const downloadedData: DownloadedData = {
  id: 1,
};
console.log(downloadedData.user?.name?.first);

// Nullish Coalescing================================
// 空文字または0は左になる
// undefindまたはnullの場合は左になる
const userData = downloadedData.user ?? 'no-user';
