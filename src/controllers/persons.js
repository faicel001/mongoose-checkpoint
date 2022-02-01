const Person = require("../modals/Person.js")
//GET ALL PERSONS
exports.findPersons = async (req, res) => {
    const fndPerson = await Person.find();
    res.send(fndPerson);
};
//CREATE A PERSON
exports.createPerson = async (req, res) => {
    try {
        const crtPerson = new Person(req.body);

        await crtPerson.save();
        res.status(200).send({ crtPerson, msg: "created succesfuly" })
    } catch (error) {
        res.status(400).send(error.message)
    }
};
//FIND PERSON WITH FIND BY ID
exports.findPersonId = async (req, res) => {
    try {
        const fndPersonId = await Person.findById(req.params.id)
        res.status(200).send(fndPersonId)
    } catch (error) {
        res.status(404).send({ error: "person is not found" });

    }
};
//FIND PERSON WITH MODEL.FIND()
exports.findPerson = async (req, res) => {
    try {
        const fndPerson = await Person.find({});;
        res.status(200).send(fndPerson)
    } catch (error) {
        res.status(404).send({ error: "person is not found" });

    }
};
//FIND PERSON WITH FINDONE()
exports.findOnePerson = async (req, res) => {
    try {
        const fndOnePerson = await Person.findOne(req.params.food);

        res.status(200).send(fndOnePerson)
    } catch (error) {
        res.status(404).send({ error: "person is not found" });

    }
};
//FIND BY ID AND REMOVE
exports.findPersonIdRomove = async (req, res) => {
    try {
        const fndPersonByIdRmv = await Person.findByIdAndRemove(req.params.id);;
        res.status(200).send({ fndPersonByIdRmv, msg: "delted with scces" })
    } catch (error) {
        res.status(404).send({ error: "person is not found" });

    }
};
//DELETE MANY
exports.deleteManyPersons = async (req, res) => {
    try {
        const delManyPerss = await Person.deleteMany({ name: req.params.name });
        res.send(delManyPerss)
    } catch (error) {
        res.status(400).send(error.message);
    }
};
//FIND PERSON UPDATE SAVE
exports.updatePerson = async (req, res) => {
    try {
        const upContExist = await Person.findById(req.params.id)
        upContExist.favoriteFoods.push('humberger')
        upContExist.save()
        res.status(200).send({ upContExist, msg: "updated" })
    } catch (error) {
        res.status(400).send(error.message)
    }
};
//FIND BY ID AND UPDATE
exports.findByIdUpdate = async (req, res) => {
    try {
        const fndidup = await Person.findByIdAndUpdate({ _id: req.params.id },{age:20},{new:true});
        res.send(fndidup)
    } catch (error) {
        res.status(400).send(error.message);
    }
};
//find one by food
exports.findFood = async (req,res)=>{
    try {
        const findMekla= await  person.find({favoriteFoods:"humberger"})
        res.send(findMekla)
    } catch (error) {
        res.status(400).send(error.message)
    }
}