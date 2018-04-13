const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive');

const mainCtrl = require('./mainCtrl');

const app = express();

app.use(bodyParser.json())
app.use(cors());

// You need to complete the information below to connect
// to the assessbox database on your postgres server.
massive({
  host: 'localhost',
  port: 5432,
  database: 'assessbox',
  user: 'postgres',
  password: ''
}).then( db => {
  app.set('db', db);

  // Initialize user table and vehicle table.
  db.init_tables.user_create_seed().then( response => {
    console.log('User table init');
    db.init_tables.vehicle_create_seed().then( response => {
      console.log('Vehicle table init');
    })
  })
})


// ===== Build enpoints below ============
app.get('/api/users', mainCtrl.getUsers); // #1
app.get('/api/vehicles', mainCtrl.getVehicles); // #2
app.post('/api/users', mainCtrl.createUser); // #3
app.post('/api/vehicles', mainCtrl.createVehicle); // #4
app.get('/api/user/:userId/vehiclecount', mainCtrl.getUserVehicleCount); // #5
app.get('/api/user/:userId/vehicle', mainCtrl.getUserVehicles); //#6
app.get('/api/vehicle', mainCtrl.getByEmailOrLetter); // #7 & #8
app.get('/api/newervehiclesbyyear', mainCtrl.getNewerVehicle); // #9
app.put('/api/vehicle/:vehicleId/user/:userId', mainCtrl.updateVehicleOwner); // #10
app.delete('/api/user/:userId/vehicle/:vehicleId', mainCtrl.deleteVehicleOwner); // #11
app.delete('/api/vehicle/:vehicleId', mainCtrl.deleteVehicle); // #12

// ===== Do not change port ===============
const port = 3000;
app.listen(port, () => {
  console.log('Listening on port: ', port);
})
