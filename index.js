import express from "express"
let app = express()


let port  = process.env.PORT  || 3000
app.get('/', (req, res)=>{
    res.send('hello world')

})
app.listen(port)