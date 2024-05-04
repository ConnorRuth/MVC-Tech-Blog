const router = require('express').Router();
const withAuth = require('../utils/auth');



router.get('/', withAuth, async (req, res) => {
  try{
    const postData = await Post.findAll();
  
    res.render('homepage', {
      postData
    });
  }catch(error){
    res.status(500).json(error);
  }
  });
  
router.get('/signup', async (req, res) => {
    res.render('signup');
  });

router.get('/login', async (req, res) => {
    res.render('login');
  });

  module.exports = router;