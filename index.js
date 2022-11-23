const express=require("express");
const cors=require("cors");
const app =express();

app.use(cors());
const port=process.env.PORT || 3000;

const apidata=require('./api.json');

app.get("/",(req,res)=>{
    res.send('Hellow Live server');
});
app.get('/products', (req,res)=>{
    res.send(apidata);
})
app.listen(port, () =>
{
    console.log('Live again');
});