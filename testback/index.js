const express = require("express");
const app = express();


const port = 3000;

app.get("/",(request,response)=> {
    return response.send("Home page");
});
app.get("/login",(request,response)=> {
    return response.send("You are visiting login route");
});
app.get("/signout",(request,response)=> {
    return response.send("You are signed out");
});
app.get("/signout",(request,response)=> {
    return response.send("You are signed out");
});

app.listen(port,()=>{
    console.log("server is up and running..")
});
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })