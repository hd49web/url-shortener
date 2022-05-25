var express = require('express');
var router = express.Router();
const Link = require ('../models/link');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HD49web' });
});

function generateCode(){
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVXZabcdefghijklmnopqrstuvxz0123456789';
  for (let i = 0; i < 5; i++)
  text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}
router.post('/new', async (req, res, next) => {
  const url = req.body.url;
  const code = generateCode();
 
  const resultado = await Link.create({
    url,
    code
  })
  res.render('stats', resultado.dataValues);
})

module.exports = router;



