require('dotenv').config()

const express= require('express')
const app= express()

const port=4000
const info={
    "NAME" : "DIVAS SAGTA",
    "AGE" :  20,
    "EDUCATION" : "CSE UNDERGRAD"
}

app.get('/',(req,res)=>{
    res.send("Hello World!")
})

app.get('/login',(req,res)=>{
    res.send('<h1>Login Successfully!</h1>')
})

app.get('/info',(req,res)=>{
    res.send(info)
})

app.listen(process.env.PORT,()=>{
    console.log(`app is listening on port ${port}`)
})