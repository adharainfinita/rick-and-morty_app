const {Favorite} = require ("../DB_connection");

const deleteFav = async(req, res)=>{
    const {id} = req.params;
    try {
        const char = await Favorite.findByPk(id);
        if(char){
            await Favorite.destroy({
            where: {
                id
            }
        });
        }
        
        const favorites = await Favorite.findAll();
            return res.status(200).json(favorites)
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

module.exports = {deleteFav};