const router = require('express').Router({ caseSensitive: true, strict: true });
const controller = require('./controller');

router.get('/', controller.getAllCitas);
router.get('/:paciente_id', controller.getAllCitasFromPaciente);
router.post('/create', controller.createCita);
router.post('/confirmarCita/:id', controller.confirmarCita);
router.post('/aplazarCita/:id', controller.aplazarCita);
router.post('/cancelarCita/:id', controller.cancelarCita);
router.post('/completarCita/:id', controller.completarCita);

module.exports = router;
