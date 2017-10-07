const games = document.querySelector('.games');
const url = "http://gd2.mlb.com/components/game/mlb/year_2017/postseason_scoreboard.json"

function createNode(element) {
	return document.createElement(element);
}

function append(parent, child) {
	return parent.appendChild(child);
}

fetch(url)
	.then((resp) => resp.json())
  .then((data) => {
		const game_data = data.games;
		return game_data.map((game) => {

			console.log(game);
			let game_container = createNode('div')
			let home_team = createNode('div')
			let home_score = createNode('p')
			let away_team = createNode('div')
			let away_score = createNode('p')


			game_container.classList.add('game');
			home_team.classList.add('team');
			away_team.classList.add('team');

			home_team.innerHTML = `${game.home_team_city} ${game.home_team_name}`
			home_score.innerHTML = `${game.linescore.r.home}`
			console.log(game.linescore.r.home);
			away_score.innerHTML = `${game.linescore.r.away}`
			away_team.innerHTML = `${game.away_team_city} ${game.away_team_name}`

			append(game_container, home_team);
			append(home_team, home_score);
			append(game_container, away_team);
			append(away_team, away_score);
			append(games, game_container);
		})
	})
  .catch((err) => {
    console.log(err)
	});

	console.log("LOADED");

// 	//const url = 'https://randomuser.me/api';
// // The data we are going to send in our request
// let data = {
//     name: 'Sara'
// }
// // The parameters we are gonna pass to the fetch function
// let fetchData = {
//     method: 'POST',
//     body: data,
//     headers: new Headers()
// }
// fetch(url, fetchData)
// .then(function() {
//     // Handle response you get from the server
// });

// const url = 'https://randomuser.me/api';
// // The data we are going to send in our request
// let data = {
//     name: 'Sara'
// }
// // Create our request constructor with all the parameters we need
// var request = new Request(url, {
//     method: 'POST',
//     body: data,
//     headers: new Headers()
// });

// fetch(request)
// .then(function() {
//     // Handle response we get from the API
// })