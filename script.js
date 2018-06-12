//declare variables
let main;

getData();


//FETCH API for connecting with JSON data (file or server)
//json file notation can be directly replaced with server URL
function getData(){
	fetch('jordaan.json').then((res) => res.json()).then((data) => {
		//publish retrieved data to DOM
		let main = document.querySelector('main');
		//create new HTML sections with retrieved data
		data.address.forEach(function(address){
			main += `
			<section>
			<h4>${address.name}</h4>
			<h5>${address.area}, ${address.rooms}</h5>
			<img src="${address.photo}">
			<p>${address.price}</p>
			</section>`;
		});
		document.querySelector('main').innerHTML = main;
	})
}




// function showResults(jordaan){
// 	main = document.body.querySelector('main');
// 	for (var i=0; i<jordaan.address.length; i++){
// 		jordaan.address[i];
// 		main.innerHTML +=`<section><h4>${jordaan.address[i].name}</h4><h5>${jordaan.address[i].area}</h5><img src="${jordaan.address[i].photo}"><p>${jordaan.address[i].price}</p></section>`;
// 	}
	
// }

//How to write key values from the JSON file
// e.g If you want to get:
//Address:  jordaan.address.name
//Price:	jordaan.address.price
//Area:		jordaan.address.area
//Photo:	jordaan.address.photo