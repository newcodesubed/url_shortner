
const express = require('express');
PORT= 3001
const app = express();

app.listen(PORT,()=>{
    console.log(`App running on port ${PORT}`);
})