const username: string = 'lsilva';

const sum = (a: number, b: number) => {
  return a + b;
}

sum(1, 2);

class Person {

  constructor(public age: number, public lastName: string) {}

}

const lsilva = new Person(30, 'Silva');

lsilva.age;
