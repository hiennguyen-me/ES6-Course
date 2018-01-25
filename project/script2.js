/* Demo object and arrow function with 'this' scope*/
var person = {
	firstName: "Hien",
	sports: ['basketball', 'football', 'badminton'],
	printSports(){
		this.sports.forEach(function(sport) {
			console.log(typeof(this));
			// var str = this.firstName + " likes " + sport;
			// console.log(str);
		});
	}
};
person.printSports();

/* demo default parameter function */
var email = {
	firstName : "Hien",
	emailTo : "abc@gmail.com",
	purchasePrice : 50
}

function createEmail({firstName = "Vy", purchasePrice = 40}){
	var shipping = 6.9;
	console.log(
		`Hi ${firstName}, Thanks for buying from us!
			Total: $${purchasePrice}
			Shipping: $${shipping}
			Grand Total: $${purchasePrice + shipping}
		`
	);
}
createEmail(email);

/* Demo generator function */
function * eachItem (arr){
	for (var i=0; i< arr.length; i++){
		yield arr[i];
	}
}
var letters  = eachItem(["a", "b", "c", "d", "e", "f", "g"]);
var abcs = setInterval(function(){
	var letter = letters.next();
	if(letter.done == true){
		clearInterval(abcs);
		console.log("Now I know my ABC's");
	}
	else{
		console.log(letter.value);
	}
}, 500);