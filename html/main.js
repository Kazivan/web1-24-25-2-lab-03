import{userList} from './db.js';

// Primitive type
const isActiveted = true;
const username = 'Lajos';
const usercount= 15;
const nothing= null;
let base;

console.log(typeof isActiveted)
console.log(typeof username)
console.log(typeof usercount)
console.log(typeof nothing)
console.log(typeof base)

// prototype
Number.prototype.mod = function(divider)
{
    return this % divider;
}
console.log(usercount.mod(3));
// collections

const numbers=[3,5,7,[true,'marika'], 99, 0];
console.log(numbers[3][1]);
console.log(numbers.length);

console.log(userList[2].age);

const key = "name";
console.log(userList[2][key]);



console.log(userList[0].name);