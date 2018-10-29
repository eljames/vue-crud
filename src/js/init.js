(function() {
	
	new Vue({
	  	el: '#app',
	  	data: {
	  		teamFields: [
	  			{ label: "Time", name: "team", value:"" },
	  			{ label: "Ano de criação", name: "year", value:""}
	  		],
	  		teams:[
  				{ team: "Los Angeles Lakers", year: "1947" }
	  		],
	  		playerFields:[
	  			{ label: "Nome do jogador", name: "playerName", value:""},
	  			{ label: "Data de nascimento", name: "birthDate", value:""}
	  		],
	  		players:[
	  			{ playerName: "LeBron James", birthDate: "30/11/1984" }
	  		]
	  	},
	  	components:crudComponente()
	});
	
})();
