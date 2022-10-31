const express = require('express');
const cors = require('cors');
const db = require('../db/connection');

require('../db/associations');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8081';
        this.garbageTrucksPath = '/api/gargabeTrucks';
        this.zonesPath = '/api/zones';
        this.collectionPath = '/api/collections';
        //Middelwares
        this.middlewares();
        this.dbConnection();
        //Rutas de mi aplicacion
        this.routes();
    }

    async dbConnection(){
        try {
            await db.sync({ force: false });
            console.log('Database online');
        }  catch(error) {
            throw new Error(error);
        }
    }

    middlewares(){
        //CORS
        this.app.use( cors());

        //lectura y parseo del body
        this.app.use(express.json());

        //Directorio publico
        this.app.use (express.static('public'));
    }

    routes(){
        this.app.use(this.garbageTrucksPath, require('../routes/garbageTruck'));
        this.app.use(this.zonesPath, require('../routes/zone'));
        this.app.use(this.collectionPath, require('../routes/collection'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
          console.log('Servidor corriendo en puerto: ' + this.port);
        });

    }

}
module.exports = Server;