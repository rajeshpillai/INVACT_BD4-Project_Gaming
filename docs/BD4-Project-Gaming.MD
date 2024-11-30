Gaming Community Platform
SPEC Document for Gaming Community Platform Backend
Objective
In this lesson, we will build a backend for a Gaming Community Platform using raw SQL queries for reading data. This system will allow users to search for games, players, and tournaments based on various filters and sorting options. By the end of this lesson, you will have learned how to:

Write raw SQL queries to read data from a database.

Implement various filtering and sorting options.

Retrieve details of specific games, players, and tournaments.

Database Seeder
How to use DB Seeders
Create a folder for the exercise

Create initDB.js file in the folder.

Copy/Paste the content in the initDB.js file provided for the exercise

Update the 4th line which looks like const db = new sqlite3.Database('./BD4_Assignment2/database.sqlite', (err) =>

Replace ./BD4_Assignment2 with your folder name. You’ll use this path in the index.js file too

Open the Shell and run the command node <folder_name>/initDB.js

This will create the database file inside the exercise folder



Exercise 1: Get All Games
Objective: Fetch all games from the database.

Query Parameters: None

Tasks: Implement a function to fetch all games.

Example Call:
http://localhost:3000/games
Expected Output:
{
	'games': [
	  { 'id': 1, 'title': 'Valorant', 'genre': 'FPS', 'platform': 'PC', 'rating': 4.5 },
	  { 'id': 2, 'title': 'FIFA 22', 'genre': 'Sports', 'platform': 'Console', 'rating': 4.2 },
	  { 'id': 3, 'title': 'Among Us', 'genre': 'Party', 'platform': 'Mobile', 'rating': 4.0 }
	]
}




Exercise 2: Get Game by ID
Objective: Fetch a specific game by its ID.

Query Parameters:

id (integer)

Tasks: Implement a function to fetch a game by its ID.

Example Call:
http://localhost:3000/games/details/1

Expected Output:
{
	'game': { 'id': 1, 'title': 'Valorant', 'genre': 'FPS', 'platform': 'PC', 'rating': 4.5 }
}




Exercise 3: Get Games by Genre
Objective: Fetch games based on their genre.

Query Parameters:

genre (string)

Tasks: Implement a function to fetch games by genre.

Example Call:
http://localhost:3000/games/genre/FPS
Expected Output:
{
	'games': [
	  { 'id': 1, 'title': 'Valorant', 'genre': 'FPS', 'platform': 'PC', 'rating': 4.5 }
	]
}




Exercise 4: Get Games by Platform
Objective: Fetch games based on their platform.

Query Parameters:

platform (string)

Tasks: Implement a function to fetch games by platform.

Example Call:
http://localhost:3000/games/platform/PC
Expected Output:
{
	'games': [
	  { 'id': 1, 'title': 'Valorant', 'genre': 'FPS', 'platform': 'PC', 'rating': 4.5 }
	]
}




Exercise 5: Get Games Sorted by Rating
Objective: Fetch games sorted by their rating ( highest to lowest ).

Query Parameters: None

Tasks: Implement a function to fetch games sorted by rating.

Example Call:
http://localhost:3000/games/sort-by-rating
Expected Output:
{
	'games': [
	  { 'id': 1, 'title': 'Valorant', 'genre': 'FPS', 'platform': 'PC', 'rating': 4.5 },
	  { 'id': 2, 'title': 'FIFA 22', 'genre': 'Sports', 'platform': 'Console', 'rating': 4.2 },
	  { 'id': 3, 'title': 'Among Us', 'genre': 'Party', 'platform': 'Mobile', 'rating': 4.0 }
	]
}




Exercise 6: Get All Players
Objective: Fetch all players from the database.

Query Parameters: None

Tasks: Implement a function to fetch all players.

Example Call:
http://localhost:3000/players
Expected Output:
{
	'players': [
	  { 'id': 1, 'name': 'Akash Gupta', 'username': 'AkashGamer', 'platform': 'PC', 'rating': 4.7 },
	  { 'id': 2, 'name': 'Rohit Kumar', 'username': 'RohitPlayz', 'platform': 'Console', 'rating': 4.5 },
	  { 'id': 3, 'name': 'Sneha Singh', 'username': 'SnehaWins', 'platform': 'Mobile', 'rating': 4.6 }
	]
}




Exercise 7: Get Player by ID
Objective: Fetch a specific player by their ID.

Query Parameters:

id (integer)

Tasks: Implement a function to fetch a player by their ID.

Example Call:
http://localhost:3000/players/details/1
Expected Output:
{
	'player': { 'id': 1, 'name': 'Akash Gupta', 'username': 'AkashGamer', 'platform': 'PC', 'rating': 4.7 }
}




Exercise 8: Get Players by Platform
Objective: Fetch players based on their platform.

Query Parameters:

platform (string)

Tasks: Implement a function to fetch players by platform.

Example Call:
http://localhost:3000/players/platform/PC
Expected Output:
{
	'players': [
	  { 'id': 1, 'name': 'Akash Gupta', 'username': 'AkashGamer', 'platform': 'PC', 'rating': 4.7 }
	]
}


Exercise 9: Get Players Sorted by Rating
Objective: Fetch players sorted by their rating ( highest to lowest ).

Query Parameters: None

Tasks: Implement a function to fetch players sorted by rating.

Example Call:
http://localhost:3000/players/sort-by-rating
Expected Output:
{
	'players': [
	  { 'id': 1, 'name': 'Akash Gupta', 'username': 'AkashGamer', 'platform': 'PC', 'rating': 4.7 },
	  { 'id': 3, 'name': 'Sneha Singh', 'username': 'SnehaWins', 'platform': 'Mobile', 'rating': 4.6 },
	  { 'id': 2, 'name': 'Rohit Kumar', 'username': 'RohitPlayz', 'platform': 'Console', 'rating': 4.5 }
	]
}




Exercise 10: Get All Tournaments
Objective: Fetch all tournaments from the database.

Query Parameters: None

Tasks: Implement a function to fetch all tournaments.

Example Call:
http://localhost:3000/tournaments
Expected Output:
{
	'tournaments': [
	  { 'id': 1, 'name': 'Valorant Championship', 'gameId': 1, 'date': '2022-12-01', 'prizePool': 5000 },
	  { 'id': 2, 'name': 'FIFA World Cup', 'gameId': 2, 'date': '2022-11-15', 'prizePool': 3000},
	{ 'id': 3, 'name': 'Among Us Showdown', 'gameId': 3, 'date': '2022-10-20', 'prizePool': 2000 }
	]
}




Exercise 11: Get Tournament by ID
Objective: Fetch a specific tournament by its ID.

Query Parameters:

id (integer)

Tasks: Implement a function to fetch a tournament by its ID.

Example Call:
http://localhost:3000/tournaments/details/1
Expected Output:
{
	'tournament': { 'id': 1, 'name': 'Valorant Championship', 'gameId': 1, 'date': '2022-12-01', 'prizePool': 5000 }
}



Exercise 12: Get Tournaments by Game ID
Objective: Fetch tournaments based on their game ID.

Query Parameters:

id (integer)

Tasks: Implement a function to fetch tournaments by game ID.

Example Call:
http://localhost:3000/tournaments/game/1
Expected Output:
{
	'tournaments': [
	  { 'id': 1, 'name': 'Valorant Championship', 'gameId': 1, 'date': '2022-12-01', 'prizePool': 5000 }
	]
}




Exercise 13: Get Tournaments Sorted by Prize Pool
Objective: Fetch tournaments sorted by their prize pool ( highest to lowest ).

Query Parameters: None

Tasks: Implement a function to fetch tournaments sorted by prize pool.

Example Call:
http://localhost:3000/tournaments/sort-by-prize-pool
Expected Output:
{
	'tournaments': [
	  { 'id': 1, 'name': 'Valorant Championship', 'gameId': 1, 'date': '2022-12-01', 'prizePool': 5000 },
	  { 'id': 2, 'name': 'FIFA World Cup', 'gameId': 2, 'date': '2022-11-15', 'prizePool': 3000 },
	  { 'id': 3, 'name': 'Among Us Showdown', 'gameId': 3, 'date': '2022-10-20', 'prizePool': 2000 }
	]
}

How to integrate the Backend APIs with the Frontend UI?
Deploy your StackBlitz project to Vercel by following the steps in this document.
You can also watch this video for reference: https://drive.google.com/file/d/18OCtAhMJtplpC1Hi5msUxyGSLy849K8d/view?usp=sharing

Copy the Vercel URL.

Once done, go to this link: https://bd4-gamestore.vercel.app/

Copy your Vercel URL to the Server URL text box.

Once you click “Save Changes”, it will show the Product Listing page with various filters and sorting parameters.



Summary
In this lesson, you have learned how to build a backend for a Gaming Community Platform using raw SQL queries. You have practiced performing various read operations, filtering, and sorting data. With these skills, you can now create and manage a comprehensive gaming community system. Continue practicing and exploring more advanced features to enhance your SQL knowledge further.