const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
const rumModel = require("./database/rums");

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

require("dotenv").config();
const dbURI = process.env.MONGODB_URI;
const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

mongoose
  .connect(dbURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(console.error);

app.get("/", async (req, res) => {
  try {
    const getAllRum = await rumModel.find();
    res.json(getAllRum);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

app.get('/authUser', async (req, res) => {
  try {
      const githubCode = req.query.code

      console.log(githubCode)

      const apiURL = "https://github.com/login/oauth/access_token"

      const params = `?client_id=${clientID}&client_secret=${clientSecret}&code=${githubCode}`

      const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
      };

      const response = await fetch(`${apiURL}${params}`, requestOptions);
      const responseData = await response.json()

      const accessToken = responseData.access_token;

      const fetchAuthUser = async () => {
          const apiURL = "https://api.github.com/user";
          const response = await fetch(apiURL, {
              method: "GET",
              headers: {
                "Authorization": `token ${accessToken}`
              },
          });
          const responseData = await response.json();
  
          res.json(responseData)
          console.log(responseData)
      }

      fetchAuthUser();

  } 
  
  catch (error) {
      console.log('Server Error:', error);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
