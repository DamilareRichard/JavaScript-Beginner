// string,numbers, boolean, null, undefined

// 	const name ='John';
// 	const age = 30;
// 	// const rating = 4.5;
// 	// const isCool = true;
// 	// const x = null;
// 	// const y = undefined;
// 	// let z;

// 	// console.log(typeof rating);

// //Concatenation
	// const name ='John';
// 	const age = 30;
// console.log('my name is ' + name + ' and i am ' + age)

// // //Template String
// // console.log(`my name is ${name} and i am ${age}`);

// //Template String
// const hello= `my name is ${name} and i am ${age}`;

// console.log(hello)

// const s ='margin, padding, border, width';

// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.substring(0,5));
// console.log(s.substring(0, 5).toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.split(', '))

//Arrays- variable that hold multiple values
      // Arrays are zero based i.e values a numbered from 0, 1, 2, 3....
	// Using the constructor
// 	const numbers = new Array(1,2,3,4,5);

// 	console.log(numbers);

// 	// or

// 	const fruits = ['apples', 'oranges', 'mangoes', 'pineapple'];
	
// // to add fruits; use the .push

// 	fruits.push('watermelon', 'pawpaw');
// 	// to add to the beginning(before apples)
// 	fruits.unshift('Avocado');
// 	// to remove the last from the list

// 	fruits.pop();
// 	console.log(fruits);
// 	 // To access just oranges
// 	 console.log(fruits[1]);

// 	// to check if something is in the Array
// 	console.log(Array.isArray(fruits));

// 	// to get index
// 	console.log(fruits.indexOf('watermelon')); 

// 	// OBJECT LITERALS

// 	const person = {
// 		firstName: 'Mathew',
// 		lastName: 'Toe',
// 		age: 30,
// 		hobbies: ['music', 'sport', 'movies'],
// 		address: {
// 			street:'20 js street',
// 			city: 'Boston',
// 			state: 'MA'
// 		}
// 	}

	// console.log(person.firstName);
	// console.log(person.hobbies[1]);

	// const{ firstName, lastName, address: {state}} = person;

	// console.log(state);
	// To add property, use.
	// person.email = 'mathewtoe@gmail.com';
	// console.log(person);
// 	const todos = [ 
// 	{
// 		id:1,
// 		text: 'Take out trash',
// 		isCompleted: true
// 	},
// 	{
// 		id:2,
// 		text: 'Meeting with tutor',
// 		isCompleted: true
// 	},
// 	{
// 		id:3,
// 		text: 'Visit the market',
// 		isCompleted: false
// 	}
// 	];
// // High Order Array methods (forEach, map, filter)
// 	const todoText = todos.map(function(todo) {
// 		return todo.text;

// 	}); 
//     console.log(todoText);


	// todos.forEach(function(todo) {
	// 	console.log(todo.text);

	// }); 

	// for(let todo of todos) {
	// console.log(todo.text);
	// }

	 

	// //For
	// for(let i = 0; i <= 10; i++) {
	// 	console.log(`For Loop Number ${i}`);

	// }

	// //While
	// let i = 0;
	// while(i < 10){
	// 	console.log(`While Loop Number ${i}`);
	// 	i++;
	// }

	// console.log(todos[1].text)

	// JSON:data formart 
	// const todoJSON = JSON.stringify(todos);
	// console.log(todoJSON);


// const x = 10;

// if(x == 10){
// 	console.log('x is 10'); 
// }

// const x = 20;

// if(x === 10){
// 	console.log('x is 10'); 
// } else if(x > 10){
// 	console.log('x is greater than 10');
// }
// else {
// 	console.log ('x is less than 10');  
// }

// const x = 4;
// const y = 10;

// if(x > 5 || y > 10) {
// 	console.log('x is more than 5 or y is more than 10');
// }

// const x = 4;
// const y = 11;

// if(x > 5 || y > 10) {
// 	console.log('x is more than 5 or y is more than 10');
// }

// const x = 4;
// const y = 11;

// if(x > 5 && y > 10) {
// 	console.log('x is more than 5 or y is more than 10');
// }

// const x = 6;
// const y = 11;

// if(x > 5 && y > 10) {
// 	console.log('x is more than 5 or y is more than 10');
// }sss

// Tonery operator

// const x = 10;

// const color = x > 10 ? 'red' : 'blue'; 

// console.log(color);

//Switches
// const x = 9;

// const color = x > 10 ? 'red' : 'blue'; 


// 	switch(color){
// 		case 'red':
// 		console.log('color is red');
// 		break;
// 		case 'blue':
// 		console.log('color is blue');
// 		break;
// 		default:
// 		console.og ('color is NOT red or blue');
// 		break;


// }

// const x = 9;

// const color = 'green'; 


// 	switch(color){
// 		case 'red':
// 		console.log('color is red');
// 		break;
// 		case 'blue':
// 		console.log('color is blue');
// 		break;
// 		default:
// 		console.log ('color is NOT red or blue');
// 		break;


// }


	// Functions

	// function addNums(num1, num2){
	// 	console.log(num1 + num2);
	// }

	// addNums(3,7);

	// function addNums(num1 = 1, num2 = 1){
	// 	return num1 + num2;
	// }

	// console.log(addNums(5,4));

	// Arrow function

	// const addNums = (num1 = 1, num2 = 1) => {
	// 	return num1 + num2;
	// }

	// console.log(addNums(5,4));

	// OOP
	// Constructor function

	// function Person(firstName, lastName, dob) {
	// 	this.firstName = firstName;
	// 	this.lastName = lastName;
	//  	this.dob = new Date(dob);
	//  	this.getBirthYear = function() {
	//  		return this.dob.getFullYear();
	//  	}
	//  	this.getFullName = function(){
	//  		return `${this.firstName} ${this.lastName}`;
	//  	}
	// }

	// // Instantiate OBJECT
	// 	const person1 = new Person('Damilare', 'Richard', '10-8-1992');
	// 	const person2 = new Person('Damola', 'Esther', '6-20-1994');

	// 	console.log(person1);
	// 	// console.log(person2.getFullName());




// function Person(firstName, lastName, dob) {
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 	 	this.dob = new Date(dob);
	 	
// 	}
// 		Person.prototype.getBirthYear = function() {
// 	 		return this.dob.getFullYear();
// 	 	}

// 	 	Person.prototype.getFullName = function() {
// 	 		return `${this.firstName} ${this.lastName}`;
// 	 	}

	 	//Class
	//  	class Person{
	//  		constructor (firstName, lastName, dob) {
	//  			this.firstName = firstName;
	// 			this.lastName = lastName;
	//  			this.dob = new Date(dob);
	//  	}

	//  	getBirthYear () {
	//  		return this.dob.getFullYear();
	//  	}

	//  	getFullName() {
	//  		return `${this.firstName} ${this.lastName}`;
	//  	}
	//  }
	// // Instantiate OBJECT
	// 	const person1 = new Person('Damilare', 'Richard', '10-8-1992');
	// 	const person2 = new Person('Damola', 'Esther', '6-20-1994');

	// 	console.log(person1);
	// 	console.log(person2.getFullName());


		// DOM
	//Single Element Selectors
	// const form = document.getElementById('my-form');
	// console.log(form);
	// console.log (document.getElementById('my-form'));
	// console.log (document.querySelector('.container'));



	//	Multiple Element Selectors 
	// console.log(document.querySelectorAll('item'));
		// console.log(document.getElementsByClassName('item'));
		// console.log(document.getElementsByTagName('li'));

		// const items = document.querySelectorAll('.items');

		// items.forEach((item) => console.log(item ));

		// const ul = document.querySelector('.items')

		// // ul.remove(); //To remove all element
		// // ul.lastElementChild.remove(); //To remove last element child
		// ul.firstElementChild.textContent = 'Hello';
		// ul.children[1].innerText = 'Richard';
		// ul.lastElementChild.innerHTML = '<h1>Hello</h1>'; 

		// const btn = document.querySelector('.btn');
		// btn.style.background = 'blue';


		// const btn = document.querySelector('.btn');

		// btn.addEventListener('click',(e) =>{
		// 	e.preventDefault(); 
		// 	console.log('click');
		// });

		// const btn = document.querySelector('.btn');

		// btn.addEventListener('click', (e) =>{
		// 	e.preventDefault(); 
		// 	document.querySelector('#my-form').style.background = '#ccc';
		// 	// document.querySelector('body').classList.add('bg-dark');
		// 	document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'; 
		// });	

		const myForm = document.querySelector('#my-form');
		const nameInput = document.querySelector('#name');
		const emailInput = document.querySelector('#email');
		const msg = document.querySelector('.msg');
		const userList = document.querySelector('#users');

		myForm.addEventListener('submit', onSubmit);

			function onSubmit(e) {
				e.preventDefault();

				if(nameInput.value === '' || emailInput.value === '') {
					msg.classList.add('error');
					msg.innerHTML = 'Please enter all fields';

				setTimeout(() => msg.remove(), 3000);

				} else {
					const li =document.createElement('li');
					li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));


					userList.appendChild(li);

					// 	//Clear fields
					nameInput.value = '';
					emailInput.value = '';



				  }
				  	
			}
			