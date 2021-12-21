const express = require('express');
const cookieParser = require('cookie-parser'); // Analisador de cookie - Middleware
const cors = require('cors');  // permissão acesso API - Middleware (Connect / Express )
const path = require('path'); // caminho de arquivo
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.port || 5000;

mongoose.connect('mongodb://localhost:27017/project_mern', {
    useUnifiedTopology:true,
    useNewUrlParser:true,
    //useFindAndModify:false
},function(err){
    if(err){
        console.log(err)
    }else {
        console.log('Banco CONECTADO com sucesso!')
    }
})


app.use(cors());
app.use(cookieParser());
app.use(express.json());


app.get('/', function (req, res) {
    res.json({message: 'é Nóis'});
});

app.listen(PORT, function(){
    console.log(`Server running on port ${PORT}`)
})