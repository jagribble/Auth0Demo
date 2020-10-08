# Auth0 Demo
## How to run
To run the application please make sure that ports 3000. 3000 is used for running the node server

Once running go to [localhost:3000](http://localhost:3000) to see the app

### npm
You can run it via npm by running the following commands
```
npm install // Install all the dependencies
npm start   // Run the server
```
### Docker
```
docker build -t auth0demo .
docker run  -p 3000:3000/tcp auth0demo 
docker run -d -p 3000:3000/tcp auth0demo // Run in detached mode
```
