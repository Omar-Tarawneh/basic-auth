# basic-auth

## API Feature

- All the Data stored in MONGODB with collection of food and clothes in **Atlas**

- sigin in to the API send username and password to the route `/signin`

- sigin up to the API send username and password in the header authoriztion to the route `/signup`

_all feature have been implemented in the `dev` branch_

## URL links

- main branch
  [oht-basic-auth](https://oht-basic-auth.herokuapp.com/)

- Github Pull Request
  [Pull-Request](https://github.com/Omar-Tarawneh/basic-auth/pull/1)

- Action
  [Action](https://github.com/Omar-Tarawneh/basic-auth/actions)

## Feature tests

you can check from the action tap for all the test - the link provided above- or just test it in you local machine the final resulte is like this.

![data-flow-diagram](img/test-lab06.png)

## Data Flow Diagram

![data-flow-diagram](img/Lab06.png))

## Download And Start

- Clone the Repository into your local machine
  `git clone httpLink/sshlink`

- Get into the repo directory
  `cd basic-auth`

- Install the dependences for tha app
  `npm install`

- Add your dotenv File and add your PORT
  `touch .env`
  `PORT=3000`
  `MONGODB_URI=mongodb+srv://omar:0000@api-server.xifht.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

- Test the functionality of the app by typing:
  `npm test`

- Then to start the server type in the terminal:
  `npm start`
