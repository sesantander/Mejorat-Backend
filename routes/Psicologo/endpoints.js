const router = require('express').Router({ caseSensitive: true, strict: true });
const controller = require('./controller');

router.get('/:UserId', controller.getPsicologo);
router.get('/', controller.getAllPsicologo);
router.post('/create', controller.createPsicologo);
router.post('/:id', controller.updatePsicologo);

module.exports = router;
