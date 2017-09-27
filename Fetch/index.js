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

			let game_container = createNode('div')
			let home_team = createNode('h3')
			let away_team = createNode('h3')

			game_container.classList.add('game');
			home_team.classList.add('team');
			away_team.classList.add('team');

			home_team.innerHTML = `${game.home_team_city} ${game.home_team_name}`
			away_team.innerHTML = `${game.away_team_city} ${game.away_team_name}`

			append(game_container, home_team);
			append(game_container, away_team);
			append(games, game_container);
		})
	})
  .catch((err) => {
    console.log(err)
	});

	console.log("LOADED");