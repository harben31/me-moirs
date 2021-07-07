const express = require("express");
const path = require("path");
const session = require('express-session');
const app = express();
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const routes = require('./routes')

const PORT = process.env.PORT || 3001;

// Define middleware here
// app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: 'goober',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false}
}))
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// Define API routes here
app.use(routes);
// app.use(passport.initialize());
// require('./config/passport')(passport);
// Send every other request to the React app
// Define any API routes before this runs
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/project_three_db', {
  useNewUrlParser: true
});

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.get('/', (req, res) => {
  res.json({ message: 'API working'})
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
