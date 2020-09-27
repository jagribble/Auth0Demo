# Leavers
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
docker build -t leavers .
docker run  -p 3000:3000/tcp leavers 
docker run -d -p 3000:3000/tcp leavers // Run in detached mode
```
