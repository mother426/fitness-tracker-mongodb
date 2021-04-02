# Fitness Tracker with MongoDB

The goal of this project was to write back-end code that connects with an existing front-end for a fitness tracker. This app utilizes a mongo database to persist information on exercises and workouts, and deployed live on heroku.

You can visit the live application at [this link.](https://fitness-tracker-0421.herokuapp.com/)

![Dashboard for fitness tracker app](/assets/ftdashboard.png)

This is the dashboard/landing page for the application. The dashboard will show summed information from all previous 'exercises' that are contained within the most recent workout. 'Exercises' belong to the 'workout' model as defined in the 'Workout.js' file in /models.

![Exercise data form](/assets/ftexerciseform.png)

Data for exercises are collected on the front-end through a form, upon submission these form inputs are sent to the backend and stored in the Mongo database. Persisted data is used to populate graphs and the dashboard page. 

![Database entires on mongo cloud](/assets/ftmongocollection.png)

Entries on the application are stored to this collection on the Mongo database. Persisted data will be used to populate the front-end (graphs and dashboard).

![Fitness Tracker Graphs](/assets/ftgraphs.png)

## Technologies Used for this project

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [Heroku](https://dashboard.heroku.com/apps)
- [JavaScript](https://www.javascript.com/)