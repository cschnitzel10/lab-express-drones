// Iteration #1

const mongoose = require("mongoose");
const Drone = require('../models/Drone.model')

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1/lab-express-drones";

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

  Drone.create(drones)
  .then(createdDrones => {
      console.log(`You just created ${createdDrones.length} drones`);
      mongoose.connection.close()
  })
  .catch(error => console.log(error));