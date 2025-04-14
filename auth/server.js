const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
require('dotenv').config()
app.use(express.json());

const posts=[
    {
        username:'john',
        title:'Post 1'
    },
    {
        username:'jane',    
        title:'Post 2'
    }
]
app.get('/posts',(req,res)=>{
    res.json(posts)
})
app.post('/login',(req,res)=>{
    const username=req.body.username;
    const user={name:username};
    jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken:accessToken})
})
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
})