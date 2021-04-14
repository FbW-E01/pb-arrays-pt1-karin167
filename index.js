//1 
const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
console.log(euroCities);

const foo = euroCities[1];
const boo = "London";


//2
 euroCities[1] = "Berlin"
 console.log(euroCities);

 //3
console.log(euroCities.length);

//4
console.log(euroCities.pop());
console.log(euroCities);

//5
console.log(euroCities.unshift("Budapest"));
console.log(euroCities);
//6
console.log(euroCities.splice(2, 2));
console.log(euroCities);

//7
const asianCities =["Shanghai", "Tokyo", "Almaty", "Kabul", "Marmaris"];
console.log(asianCities);

//9*****

//8
const asiaone = asianCities.slice(1,4);
console.log(asiaone);

//10
console.log(asiaone.reverse());

//11***
console.log(euroCities.splice(2,1, "NYC"));
(console.log(euroCities));


//12
console.log(asianCities.splice(1,0, "Washington"));
(console.log(asianCities));

//13
const worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"];
console.log(worldCities.join("+"));

//**Bonus**
//1
let goo = "hello world";
let splited= goo.split("");
let rev =splited.reverse();
console.log(rev.join(""));