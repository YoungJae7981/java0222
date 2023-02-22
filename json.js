// JSON(Javascript(자바스크립트) Object(객체) Notation(표기법))=자바스크립트객체의 문서표기법

// XML XML(eXtensible Markup Language)

const user = {
  name: "smith",
  age: 28,
  job: "nothing",
  email: "nope@nope",
};
const json1 = JSON.stringify(user);
console.log(json1);

const user2 = JSON.parse(json1);
console.log(user2);
