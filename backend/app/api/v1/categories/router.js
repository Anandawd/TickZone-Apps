 const express = require('express');
 const router = express();
 const { index, find, create, update, destroy } = require('./controller');

 router.get('/categories', index);

 router.get('/categories/:id', find);

 router.put('/categories/:id', update);

 router.delete('/categories/:id', destroy);

 router.post('/categories', create);

 module.exports = router;
