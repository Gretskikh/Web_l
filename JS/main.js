// var counter = (function(){
// 	var count = 0;
// 	return function(num){
// 		count = num !== undefined ? num : count;
// 		return count++;
// 	}
// }());

// console.log(counter());
// console.log(counter());
// console.log(counter(50));
// console.log(counter());
// console.log(counter());

// var calcul = function(n){
// 	if(n==0) throw new ReferenceError("Infinity");
// 	return 10/n;
// };

// try{
// 	calcul(0);

// }
// catch(e){
//  throw e;
// }


// var person = {
// 	name: 'John',
// 	_age: 20,
// 	get age(){
// 		return this._age;
// 	},
// 	set age(value){
// 		this._age = value<0 ? 0 : value > 122 ?122 : value;
// 	}
	
// };

// // console.log(Object.getOwnPropertyDescriptor(person, 'name'));

// // console.log(Object.getOwnPropertyDescriptor(person, 'age'));
// console.log(Object.getOwnPropertyDescriptor(person, 'name'));

// person.name = "Nik";

// Object.defineProperty(person, "name", {
// 	value: "John",
// 	writable: false,
// 	enumerable: true,
// 	configurable: false
// });

// person.name = "Nik";
// console.log(person.name);
// // console.log(Object.getOwnPropertyDescriptor(person, 'male'));

// Object.defineProperty(person, "gender", {
// 	value: "male",
// 	writable: true,
// 	enumerable: false,
// 	configurable: false
// });

// console.log(person.gender);

// person.gender = "female";

// console.log(person.gender);

// for(property in person){
// 	console.log(property);
// }

// console.log(Object.keys(person));

// var o = {};
// Object.defineProperties(o, {
// 	x: {
// 		value: 10,
// 		writable: false
// 	},
// 	y: {
// 		value: 20,
// 		writable: false
// 	},
// 	r: {
// 		get: function() {
// 			return (this.x * this.y);
// 		}
// 	}
// });

// o.x = 35;
// console.log(o.x);
// console.log(o.y);
// console.log(o.r);
// var a = {x:15};
// var b = {x:25};
// a=b;
// a.x=10;
// console.log(a.x);
// console.log(b.x);

// var Person, person, anotherPerson;

// Person = function(name) {
// 	this.name = name;
// };

// person = new Person("Jack");
// console.log(person.name);

// anotherPerson = new Person("Bruce");
// console.log(anotherPerson.name);



// "use strict";


// var Track = function(params) {
// 	this.name = params.name;
// 	this.url = params.url;

// 	// this.playTrack = function() {
// 	// 	console.log("We started playing", this.name);
// 	// }
// };

// Track.prototype.playTrack = function() {
// 		console.log("We started playing", this.name);
// 	};


// var YoutubeTrack = function(params){
// 	Track.apply(this, arguments);
// 	this.image = params.image;
// };

// YoutubeTrack.prototype = Object.create(Track.prototype);

// YoutubeTrack.prototype.constructor=YoutubeTrack;

// var track01 = new Track({
// 	name: 'track01',
// 	url: 'track01.mp3'
// });

// var track02 = new Track({
// 	name: 'track02',
// 	url: 'track02.mp3'
// });

// var youtubetrack01 = new YoutubeTrack({
// 	name: 'youtubetrack01',
// 	url: 'youtubetrack01.mp3',
// 	image: 'youtubetrack01.jpg'
// });

// var youtubetrack02 = new YoutubeTrack({
// 	name: 'youtubetrack02',
// 	url: 'youtubetrack02.mp3',
// 	image: 'youtubetrack02.jpg'
// });

// console.log(Track.toString);
// console.log(Track.valueOf);
// console.log(youtubetrack01);
// console.log(youtubetrack02);

// youtubetrack01.playTrack();

// var ObjectProto = {
// 	name: "Anatoly"
// };

// var ob1 = Object.create(ObjectProto);
// var ob2 = Object.create(ObjectProto);
// var ob3 = Object.create(ObjectProto);
// console.log(ob1.name);
// console.log(ob2.name);
// console.log(ob3.name);

// function Calculator() {

//   this.read = function() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   };

//   this.sum = function() {
//     return this.a + this.b;
//   };

//   this.mul = function() {
//     return this.a * this.b;
//   };
// }

// var calculator = new Calculator();
// calculator.read();

// alert( "Сумма=" + calculator.sum() );
// alert( "Произведение=" + calculator.mul() );

// var Accumulator = function(startingValue){
// 	this.value = startingValue;
// 	// this.read = function(){
// 	// 	this.value += +prompt('Сколько добавлять будем?', 0);
		
// 	// }
// };

// Accumulator.prototype.read= function(){
// 		this.value += +prompt('Сколько добавлять будем?', 0);
		
// 	}


// var accu = new Accumulator(11); // начальное значение 1
// accu.read(); // прибавит ввод prompt к текущему значению
// alert( accu.value ); // выведет текущее значение

// var f = function(){
// 	var c = 0;
// 	return function(valC){
// 		с = valC !== undefined ? valC : c;
// 		return c++;
// 	}
// }

// var f1 = f();
// console.log(f1());
// console.log(f1());
// console.log(f1());
// console.log(f1());
// console.log(f1());
// console.log(f1(0));
// console.log(f1());
// console.log(f1());

// var cl = {
// 	a: 5,
// 	b: 245,
// 	string: "str"
// };


// //var cl1 = new Object();
// var cl1 = Object.create(cl);
// //cl1.a = "stroka";


// console.log(cl);

// cl.b=200;

// for(i in cl1){
// 	console.log(cl1[i]);
// }

// var obj = {
// 	x: 100,
// 	y: 20,

// 	get test() {
// 		return this.x + this.y;
// 	},

// 	set test(val) {
// 		this.x = val.a;
// 		this.y = val.b;
// 		//return this.x + this.y;
// 	},

// 	my_method: function (){
// 	//console.log(this);
// 	return this.x + this.y;
// }
// }

// var uuu = {
// 	x:555,
// 	y:1000
// }

// console.log(obj.my_method());
// console.log(obj.my_method.call(uuu));
// obj.test = {a:5, b:17};
// console.log(obj.my_method());





// var Car = function() {
// 	this.color,
// 	this.type,

// 	this.get_param = function() {
// 		var data;
// 		data = prompt("Введите параметры автомобиля в формате", "Синий|Седан");
// 		this.color = data.substring(0,data.indexOf("|"));
// 		this.type = data.substring(data.indexOf("|")+1);
// 		console.log(this);
// 	}
// 	,
// 	this.showCar = function(){
// 		alert("Вы ввели авто цвет:" + this.color + ";  кузов:" + this.type);
// 	} 
// };

// var Car_1 = new Car();
// Car_1.get_param();
// Car_1.showCar();





// var user = {
//   firstName: "Вася",
//   sayHi: function() {
//     alert( this.firstName );
//   }
// };

// // user.sayHi();
// setTimeout(user.sayHi, 1000);

// var arc = new Array();
// console.log(arc);

// function func(){
// 	var arg = [].slice.call(arguments);
// 	console.log(arguments);
// 	console.log(arg);
// }

// func(5,7,4,8,9);

// function Cons(){
// 	this.p = "Свойство Р";
// 	var f = this;
// 	function pM(){
// 		console.log(f.p);
// 	};

// 	this.method = function(){
// 		pM();
		
// 	}
// }

// (new Cons()).method();

function CoffeeMachine(power, capacity) {
  //...
  this.setWaterAmount = function(amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить воды больше, чем " + capacity);
    }

    waterAmount = amount;
  };

  this.getWaterAmount = function() {
    return waterAmount;
  };

  this.getPower = function() {
  	return power;
  };

}

var coffeeMachine = new CoffeeMachine(1000, 500);

// пример использования
alert( coffeeMachine.getPower() ); // 450