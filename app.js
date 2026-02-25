import bodyParser from 'body-parser';
import express from "express"

import routers from './src/routes/index.routes';
PORT= 3001
const app = express();

// Parse JSON bodies (application/json)
app.use(bodyParser.json());

app.use('/urlShorten/v1', routers);


app.listen(PORT,()=>{
    console.log(`App running on port ${PORT}`);
})