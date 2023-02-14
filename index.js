//  import express to use it.
const express = require("express");
//  Instantiate express to a variable (generally, we name it ‘app’)
const app = express();
// Now that our server is listening to the port, let’s return some message when the root route(/) is requested from the browser.

app.listen(3000,() => console.log("Server listening at port 3000"));
// “/” represents the root route.

//req -> Represents any data that is sent along with the request.

//res -> Used for sending a response back to the browser.

app.get("/", (req, res) => {
    res.send("Hello World");
});
app.get("/about", (req, res) => {
    res.send("About route");
});