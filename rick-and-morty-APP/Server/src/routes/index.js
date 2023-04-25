const {login} = require("../controllers/login");
const{postFav, deleteFav} = require("../controllers/handleFavorites");
const {getCharById} = require("../controllers/getCharById");


const router = require('express').Router()

router.get('/character/:id', (req, res) => {
    getCharById(req, res);
});

router.get('/login', login)

router.post('/fav', (req, res) => {
    postFav(req, res)
})

router.delete('/fav/:id', (req, res) => {
    deleteFav(req, res)
})


module.exports = router;
