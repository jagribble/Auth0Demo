import express from 'express';
import cookieParser from 'cookie-parser';

import indexRouter from './routes/index';

// Create a new express application instance
const app: express.Application = express();
// Set up the express instance to use handlebars and static resources
app.set('views', "./src/views" );
app.set('view engine', 'hbs');
app.use(express.json());
app.use(cookieParser());
app.use(express.static( "./src/public" ));

// Register routes
app.use('/', indexRouter);

const PORT = process.env.PORT || 3000;
// Run the application
app.listen(PORT, function () {
  console.log('App listening on port 3000!');
});