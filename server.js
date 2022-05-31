const express =require('express');
const app = express();
const cors =require('cors');
const database = require('./src/config/database');




// import userRoute





// database connection

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());

// middleware 


// console
function ConsolLog(rep, res, next) {
    console.log(' [' + rep['method'] + '] http://localhost:' + "4000/" + rep['url'])
    next()
}

app.use(ConsolLog);
// console end

database.authenticate()
.then(()=>console.log('Database connect'))
.catch(()=> console.log('Error : '+err))


const PORT =4000 || process.env.PORT;
app.listen(PORT ,()=> console.log(`app running on ${PORT} port`));
