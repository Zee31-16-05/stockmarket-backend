import express from 'express';
import * as apiRouter from './routers/api.route.js'

try{
const app = express()
const PORT = 7001
const hostname = 'localhost'

console.log("hello");
app.use(express.json()) 
console.log("hello222");

app.use('/api',apiRouter.router)
console.log("hello333");

// app.use((req, res, next) => {
//     const err = new Error('Not Found');
//     err.status = 404;
//     next(err);
//   });


app.listen(PORT,()=>{
    console.log(`listening on ${hostname}: ${PORT}`)
})
}
catch(err){
    console.log("me rroro",err);
}