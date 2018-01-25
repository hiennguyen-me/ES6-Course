/* Let keyword demo */
function ClickBox(){
	for (let i=0; i<10; i++){
		var divNode = document.createElement("div");
		divNode.onclick = function() {
			alert("You clicked on a box #" + i);
		}
		document.getElementById("demo-let").appendChild(divNode);	
	}
} 
ClickBox();

/* Const keyword and template strings arrow function demo */

var CheckEnoughCold = e => {
	e.preventDefault();
	var deg = document.getElementById("deg").value;
	const freezingTemp = 32;
	var res = document.getElementById("result");
	if(deg >= freezingTemp)
		res.innerHTML = `${deg} is above freezing.`;
	else
		res.innerHTML = `${deg} is below freezing.`;
}
var submit = document.getElementById("btn-submit");
submit.addEventListener('click', function(e){ CheckEnoughCold(e); })

/* Spread operator */
var cats = ["cat1", "cat2", "cat3" ];
var dogs = ["dog1", "dog2", "dog3"];
var animals = ["ani1", ...cats, "ani2", "ani3", ...dogs];
console.log(animals);


