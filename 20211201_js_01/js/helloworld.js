'use strict';
// java script 출력문 1
console.log('hello world');

let x = NaN;
let y = 5;
console.log(typeof(x));
const person = {
    name: {
        first: 'Bob',
        last: 'Smith'},
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function() {
      alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    greeting: function() {
      alert('Hi! I\'m ' + this.name[0] + '.');
    }
  };
  document.write(person.name.last);