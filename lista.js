var request = new XMLHttpRequest();
		request.open('GET', 'https://raw.githubusercontent.com/carolainatobar/clase_8/gh-pages/super.json', true);
		request.onload = function () {
			var data = JSON.parse(this.response);
			var howMany = data.number;
			/*document.write("<p>El mejor superheroe es  " + howMany + " obviamente:</p><ul>");*/
				for(var x = 0; x < howMany; x++){
					console.log(data.superheroes[x].superhero);
					document.getElementById("contact").innerHTML = data.superheroes[0].superhero;
				}
			       

				

			}
		request.send();	