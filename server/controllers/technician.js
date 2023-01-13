import { Tech } from "../models/Technician.js";

const newTech = {
    create: function(req, res) {
        let data = req.body;
        let tech = new Tech();

        tech._id = data.id;
        tech.firstName = data.firstName;
        tech.lastName = data.lastName;
        tech.salary = data.salary;
        tech.status = data.status;

        tech.save((err, userSaved) => {
            if(err) {
                console.log(err);
                res.status(500).send({
                    data: {
                        error: "Can't be saved"
                    }
                });
            }
            res.status(201).send({
                data: {
                    message: "Saved successfuly!"
                }
            });
        });
    }
}

export { newTech };