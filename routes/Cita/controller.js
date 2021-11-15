/* eslint-disable camelcase */
/* eslint-disable consistent-return */

const Cita = require('../../database/models/cita.model');

const createCita = async (req, res, next) => {
  const {
    fecha, lugar, psicologo_id, paciente_id,
  } = { ...req.body };
  try {
    await Cita.create({
      fecha,
      lugar,
      estado: 'PENDIENTEPAGO',
      psicologo_id,
      paciente_id,
    }).then((user) => res.status(200).json({ data: { user } }))
      .catch((e) => res.status(400).json({ e }));
  } catch (e) {
    next(e);
  }
};

const confirmarCita = async (req, res, next) => {
  try {
    const cita = await Cita.findOne({ where: { cita_id: req.params.id } });
    if (!cita) return res.status(400).json({ Error: 'Cita not found' });

    await cita.update({ estado: 'CONFIRMADA' });
    return res.status(200).json({ data: { cita } });
  } catch (e) {
    next(e);
  }
};

const aplazarCita = async (req, res, next) => {
  try {
    const cita = await Cita.findOne({ where: { cita_id: req.params.id } });
    if (!cita) return res.status(400).json({ Error: 'Cita not found' });

    await cita.update({ estado: 'APLAZADO', fecha: req.body.fecha });
    return res.status(200).json({ data: { cita } });
  } catch (e) {
    next(e);
  }
};

const cancelarCita = async (req, res, next) => {
  try {
    const cita = await Cita.findOne({ where: { cita_id: req.params.id } });
    if (!cita) return res.status(400).json({ Error: 'Cita not found' });

    await cita.update({ estado: 'CANCELADA' });
    return res.status(200).json({ data: { cita } });
  } catch (e) {
    next(e);
  }
};

const completarCita = async (req, res, next) => {
  try {
    const cita = await Cita.findOne({ where: { cita_id: req.params.id } });
    if (!cita) return res.status(400).json({ Error: 'Cita not found' });

    await cita.update({ estado: 'COMPLETADA' });
    return res.status(200).json({ data: { cita } });
  } catch (e) {
    next(e);
  }
};

const getAllCitas = async (req, res, next) => {
  try {
    const cita = await Cita.findAll();
    if (!cita) return res.status(400).json({ Error: 'Citas not found' });

    return res.status(200).json({ data: { cita } });
  } catch (e) {
    next(e);
  }
};

const getAllCitasFromPaciente = async (req, res, next) => {
  try {
    const cita = await Cita.findAll({ where: { paciente_id: req.params.paciente_id } });
    if (!cita) return res.status(400).json({ Error: 'Citas not found' });

    return res.status(200).json({ data: { cita } });
  } catch (e) {
    next(e);
  }
};

const getAllCitasFromPsicologo = async (req, res, next) => {
  try {
    const cita = await Cita.findAll({ where: { psicologo_id: req.params.psicologo_id } });
    if (!cita) return res.status(400).json({ Error: 'Citas not found' });

    return res.status(200).json({ data: { cita } });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  createCita,
  confirmarCita,
  aplazarCita,
  cancelarCita,
  completarCita,
  getAllCitas,
  getAllCitasFromPaciente,
  getAllCitasFromPsicologo,
};
