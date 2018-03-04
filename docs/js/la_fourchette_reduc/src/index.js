import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
var fs = require('fs');





class ListResto extends React.Component {
  constructor (props){
    super(props);
  }

	render() {
	const data =[
	{"nom":"Le 39V",
	"lien":"https://www.lafourchette.com/restaurant/le-39v-paris-frederic-vardon/26112"},
	{"nom":"Agapé",
	"lien":"https://www.lafourchette.com/restaurant/agape/1923"},
	{"nom":"Le Gabriel",
	"lien":"https://www.lafourchette.com/restaurant/le-gabriel-la-reserve-paris/53038"}
	];	
	//Mettre le bon contenu du fichier, avec les bon restaurants
	return (
		<div>
		<h1>Les restaurants en reduction de La Fourchette : </h1>
		<div>
		{data.map(function(d, idx){
			return (<li key={idx}> <a href={d.lien}>{d.nom}</a></li>)
		})}
		</div>
		</div>
	);
		
	}
}

ReactDOM.render(
	<ListResto />,
	document.getElementById('root')
);




