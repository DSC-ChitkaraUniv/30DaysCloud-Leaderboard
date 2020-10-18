// jshint esversion:6

const express = require('express');
const app = express();
const http = require('http');
const fetch = require('node-fetch');
const { type } = require('os');

app.use(express.static('static'));

app.get("/", function (req, res) {

  const url = "http://api.ishandeveloper.com/30days?appid=20201018235848";
  // http.get(url, function (response) {
  //   console.log(response.statusCode);
  //   if (response.statusCode == 200) {
  //     console.log("API fetched succesfully");
  //   } else {
  //     console.log("API not fetched succesfully and ended with status code " + response.statusCode);
  //   }
  //   response.on("data", function (data) {
  //     // console.log(data.toString());
  //     // console.log(typeof data);
  //     console.log("hello");
  //     console.log(JSON.parse(data));
  //   });
  // });
  fetch(url)
  .then(res => res.json())
  .then(json => console.log(json));

  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});