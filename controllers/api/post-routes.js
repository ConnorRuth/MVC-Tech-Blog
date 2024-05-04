const router = require('express').Router();
const withAuth = require('../../utils/auth')
const { Post } = require('../../models');
//recieves from posthandler
router.post('/', withAuth, async (req, res) => {
    try{
        const userId = req.session.user_id
        const postData = await Post.create({
            ...req.body,
            user_id: userId
});
    if(!postData){
        res.status(500).json(err);
        return;
    }else 
    res.status(200).json(charData).render('homepage');
    
    } catch(error){
        res.status(400).json(error);
    }
  });


module.exports = router;