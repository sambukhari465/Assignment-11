    const express = require ("express")
    const bodyParser = require("body-parser")
    const cors = require("cors")
    const app = express()

    app.use(bodyParser.json())
    app.use(cors())

    let array=[];
    app.post('/postForm', (req,res)=>{
        const receivedData= req.body
        console.log(receivedData)
        array.push(receivedData)
        res.json(receivedData);
    })
    app.get("/getData",(req,res)=>{
    console.log("i am working")
        res.send(array)

    })
    app.listen(4500, ()=>{
        console.log(`Server is runing on port ${4500}`)})
