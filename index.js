const express = require('express');
const app = express();
const cors = require('cors')
const port = 3000
const userRoute = require('./routes/user.js');

// middle ware
app.use(express.json());
app.use(cors());
app.use('/user', userRoute);

app.listen(3000, ()=>{
  console.log(`The server is listing ${port} now`);
})