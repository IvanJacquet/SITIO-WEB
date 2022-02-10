const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'TRK' });
});

router.get('/productos',(req, res) => {
  res.render('productos.ejs', { title: 'TRK'});
})

router.get('/contacto',(req, res) => {  
  res.render('contacto.ejs', { title: 'TRK'});
})

router.get('/registrarse',(req, res) => {
  res.render('registrarse.ejs', { title: 'TRK'});
})


module.exports = router;