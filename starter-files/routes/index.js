const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const bri = { name: 'Bri', age: 80, cool: true};
  // console.log('Hey! You!');
  // res.send('Hey! It works!');
  // res.json(bri);
  // res.send(req.query.name);
  // res.json(req.query);
  res.render('hello', {
    name: 'Briana',
    cat: req.query.cat
  });
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
});

module.exports = router;
