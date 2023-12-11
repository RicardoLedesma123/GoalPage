const express = require("express");
const bodyparser = require("body-parser");
const app = express();
let cors = require('cors');
const connection = require("./conexion");
const misrutas = require('./routes/rutas');


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(cors());

app.use('/', misrutas);

const datos =  (req=request, resp=response) =>{
  
    let body = req.body;
    console.log(body);
 }

 app.post('/pdf',datos);
 
 app.use (express.static("./pdf"));
const multer = require('multer');

/* el multer crea un alamcenamiento */
const storage = multer.diskStorage({
  //cambiar el nombre apra que no se sobre escriba
  filename: function (res, file, cb) {
    const ext = file.originalname.split(".").pop();
    //genera un string numerico para que ningun archivo se llame igual
    const fileName = Date.now(); 
    cb(null, `${fileName}.${ext}`);
  },
  //en donde se guarda el archivo
  destination: function (res, file, cb) {
    cb(null, `./pdf`);
  },
});

const archivos = multer({storage});

app.post("/upload", archivos.single("myFile"), (req, res) => {
  const file = req.file.filename;
  console.log(file);
  res.send({ data: "enviado", url: `http://localhost:3000/${file}` });
});

connection.connect((err, res) => {
    if (err) {
        console.log(err)
        console.log('Error de conexion con sql')
        return;
    }
    console.log('Conexion exitosa a la base de datos')
 });

const http = require('http').createServer(app);


const io = require('socket.io')(http, {
    cors: {
        origin: '*'
    }
});


app.get('/', (req, res) => {
    res.send('está funcionando');
})

let userList = new Map();

io.on('connection', (socket) => {
    let userName = socket.handshake.query.userName;
    addUser(userName, socket.id);

    socket.broadcast.emit('user-list', [...userList.keys()]);
    socket.emit('user-list', [...userList.keys()]);

    socket.on('message', (msg) => {
        socket.broadcast.emit('message-broadcast', {message: msg, userName: userName});
    })

    socket.on('disconnect', (reason) => {
        removeUser(userName, socket.id);
    })
});

function addUser(userName, id) {
    if (!userList.has(userName)) {
        userList.set(userName, new Set(id));
    } else {
        userList.get(userName).add(id);
    }
}

function removeUser(userName, id) {
    if (userList.has(userName)) {
        let userIds = userList.get(userName);
        if (userIds.size == 0) {
            userList.delete(userName);
        }
    }
}

const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use(require('./routes/correoRoutes'));

app.listen(port, () => {
    console.log(`hola servidor ejecucion en http://localhost:${port}`);
   });