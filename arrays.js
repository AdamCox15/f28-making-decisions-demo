let backpack = [];

backpack.push('Jedi Robe');
backpack.push('Lightsaber');
backpack.push('Crippling sense of failure and guilt');

backpack.splice(1,1);
backpack.push('Wookie Coat');

backpack.pop();
backpack.push('Blue Milk', 'Baby Yoda', 'a child named Luke', 'Com Device', 'High Ground', 'Blaster');

let stroller = backpack.splice(3,2);

console.log(backpack);
console.log(stroller);