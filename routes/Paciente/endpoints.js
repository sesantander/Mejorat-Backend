const router = require('express').Router({ caseSensitive: true, strict: true });
const controller = require('./controller');

router.get('/:UserId', controller.getPaciente);
router.get('/', controller.getAllPaciente);
router.post('/create', controller.createPaciente);

module.exports = router;
