/* eslint-disable camelcase */
/* eslint-disable consistent-return */

const Paciente = require('../../database/models/paciente.model');

const createPaciente = async (req, res, next) => {
  const {
    preferencia_de_lugar, historia_clinica, eps, edad, UserId,
  } = { ...req.body };
  try {
    await Paciente.create({
      preferencia_de_lugar,
      historia_clinica,
      eps,
      edad,
      UserId,
    }).then((paciente) => res.status(200).json({ data: { paciente } }))
      .catch((e) => res.status(400).json({ e }));
  } catch (e) {
    next(e);
  }
};

const getPaciente = async (req, res, next) => {
  try {
    const paciente = await Paciente.findOne({ where: { UserId: req.params.UserId } });
    if (!paciente) return res.status(400).json({ Error: 'Paciente not found' });
    return res.status(200).json({ paciente });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  createPaciente,
  getPaciente,
};