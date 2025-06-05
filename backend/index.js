const express  = require("express")
const app = express();
const cors = require('cors');
app.use(cors()); 

const uname = "shenbaka3377gmail"
const pswd= "3377"

app.get("/login",(request,response)=>
{
    if((uname === request.query.username) && (pswd === request.query.password))
    {
        response.send(true)
    }
    else
    {
        response.send(false)
    }
})

app.listen(3000,()=>
{
    console.log("server started")
})