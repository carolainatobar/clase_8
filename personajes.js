var request = new XMLHttpRequest();
request.open('GET', 'https://raw.githubusercontent.com/carolainatobar/clase_8/gh-pages/super.json', true);
request.onload = function () {
	var data = JSON.parse(this.response);
	var howMany = data.number;
	//voy a crear una funcion
	function loremIpsum(n) {
		var que = [];
		var donde = document.getElementById('last');
		for (var x = 0; x < n; x++) {
			que[x] = document.createElement('li');
			que[x].textContent = data.superheroes[x].superhero;
			donde.appendChild(que[x]);
		}
	};
	//ahora voy a usar la función
	loremIpsum(howMany);
	document.getElementById("numero").innerHTML = howMany;
}
request.send();		

