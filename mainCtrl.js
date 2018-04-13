module.exports = {

        // #1
        getUsers: (req, res, next) => {
            const db = req.app.get('db');
            db.get_users()
            .then(response => res.status(200).send(response))
            .catch(err => console.log(err))
        },

        // #2
        getVehicles: (req, res, next) => {
            const db = req.app.get('db');
            db.get_vehicles()
            .then(response => res.status(200).send(response))
            .catch(err => console.log(err))
        },

        // #3
        createUser: (req, res, next) => {
            const db = req.app.get('db');
            const { name, email } = req.body;
            db.create_user([ name, email ])
            .then(response => res.status(200).send(response))
            .catch(err => console.log(err))
        },

        // #4
        createVehicle: (req, res, next) => {
            const db = req.app.get('db');
            const { make, model, year, owner_id } = req.body;
            db.create_vehicle([ make, model, year, owner_id ])
            .then(response => res.status(200).send(response))
            .catch(err => console.log(err))
        },

        // #5
        getUserVehicleCount: (req, res, next) => {
            const db = req.app.get('db');
            const userid = req.params.userId;
            db.get_user_vehicle_count([ userid ])
            .then(response => res.status(200).send(response))
            .catch( err => console.log(err))
        },

        //#6
        getUserVehicles: (req, res, next) => {
            const db = req.app.get('db');
            const userid = req.params.userId;
            db.get_user_vehicles([ userid ])
            .then(response => res.status(200).send(response))
            .catch( err => console.log(err))
        },

        // #7 & #8
        getByEmailOrLetter: (req, res, next) => {
            const db = req.app.get('db');
            const email = req.query.userEmail;
            const user = req.query.userFirstStart;
            if(email){
                db.get_by_email([ email ])
                .then(response => res.status(200).send(response))
                .catch( err => console.log(err));
            }
            else {
                db.get_by_letter([ user ])
                .then(response => res.status(200).send(response))
                .catch( err => console.log(err));
            }
        },

        // #9
        getNewerVehicle: (req, res, next) => {
            const db = req.app.get('db');
            db.get_newer_vehicles()
            .then(response => res.status(200).send(response))
            .catch( err => console.log(err))
        },

        // #10
        updateVehicleOwner: (req, res, next) => {
            const db = req.app.get('db');
            const vehicleid = req.params.vehicleId;
            const userid = req.params.userId;
            db.update_vehicle_owner([ userid, vehicleid ])
            .then(response => res.status(200).send(response))
            .catch( err => console.log(err))
        },

        // #11
        deleteVehicleOwner: (req, res, next) => {
            const db = req.app.get('db');
            const vehicleid = req.params.vehicleId;
            db.delete_vehicle_owner([ vehicleid ])
            .then(response => res.status(200).send(response))
            .catch( err => console.log(err))
        },

        // #12
        deleteVehicle: (req, res, next) => {
            const db = req.app.get('db');
            const vehicleid = req.params.vehicleId;
            db.delete_vehicle([ vehicleid ])
            .then(response => res.status(200).send(response))
            .catch( err => console.log(err))
        }

}
