const router =require("express").Router();
const Data = require("../data/phones.json");


router.get("/", (req, res, next) => {
    //Data.find()
    //.then(response => {
        res.json(Data);
    //})
    //.catch(err => next(err))
});

router.get("/:id", (req, res, next) => {
    const {phoneId} = req.params;
    Data.find({id: phoneId}) 
    //Data.findById(phoneId)
    .then(result => {
        res.json(result);
    })
    .catch(err => next(err))
})

module.exports = router;