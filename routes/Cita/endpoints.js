const router = require('express').Router({ caseSensitive: true, strict: true });
const controller = require('./controller');

router.post('/create', controller.createCita);
router.post('/confirmarCita', controller.confirmarCita);
router.post('/aplazarCita', controller.aplazarCita);
router.post('/cancelarCita', controller.cancelarCita);
router.post('/completarCita', controller.completarCita);

module.exports = router;
