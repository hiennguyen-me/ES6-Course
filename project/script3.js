/* Demo class syntax */
//Create a new class Person
class Person{
	constructor(name, age){
		 this.name = name;
		 this.age  = age;
	}
	introYourself(){
		return `I'm ${this.name} and I'm ${this.age} years old.`
	}
}
//Create a new instance of Person
var person1 = new Person("hien", 21);
console.log(person1.introYourself());

/* Demo Class inheritance */
class Student extends Person {
	constructor(){
		//call function from parent class
		super("Vy", 21);
	}
}
var student1 = new Student("Vy", 21);
console.log(student1.introYourself());
