var Menu = {
	els: {nom:document.getElementById("playerName"),button:document.getElementById("addp")},
	start: function() {
		
		Menu.els.button.onclick = function(){
			console.log(Menu.els.nom.value);
			//var newPlayer = new Player(Menu.els.nom.value);
			Menu.detectarTeclas.init(function(teclas){
				//newPlayer.teclas = teclas
				console.log(teclas,Menu.els.nom.value);
			});

		}
	},
	end: function() {},
	detectarTeclas: {
		callback: null,
		teclas: [],
		init: function(callback) {
			Menu.detectarTeclas.teclas = [];
			Menu.detectarTeclas.callback = callback;
			window.onKeyup = function(e){
				console.log("hola");
				Menu.detectarTeclas.keyup(e);};

		},
		keyup: function(e) {
			console.log("termine");
			Menu.detectarTeclas.teclas.push(e.which);
			if (Menu.detectarTeclas.teclas.length > 1)
				Menu.detectarTeclas.end();
		},
		end: function() {
			Menu.detectarTeclas.callback(Menu.detectarTeclas.teclas);
			window.onKeyup = null;
		}
	}


}
Menu.start();
