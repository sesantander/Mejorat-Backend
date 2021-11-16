/* eslint-disable camelcase */
/* eslint-disable consistent-return */

const Psicologo = require('../../database/models/psicologo.model');
const User = require('../../database/models/user.model');

const createPsicologo = async (req, res, next) => {
  const {
    tarifa_por_hora, certificado_estudio, horas_trabajadas, calificacion, especializacion, UserId,
  } = { ...req.body };
  try {
    await Psicologo.create({
      tarifa_por_hora,
      certificado_estudio,
      horas_trabajadas,
      calificacion,
      especializacion,
      UserId,
    }).then((psicologo) => res.status(200).json({ data: { psicologo } }))
      .catch((e) => res.status(400).json({ e }));
  } catch (e) {
    next(e);
  }
};

const getPsicologo = async (req, res, next) => {
  try {
    const paciente = await Psicologo.findOne({
      where: { UserId: req.params.UserId },
      include: { model: User },
    });
    if (!paciente) return res.status(400).json({ Error: 'Psicologo not found' });
    return res.status(200).json({ paciente });
  } catch (e) {
    next(e);
  }
};

const getAllPsicologo = async (req, res, next) => {
  try {
    const psicologo = await Psicologo.findAll({ include: { model: User } });
    if (!psicologo) return res.status(400).json({ Error: 'Psicologos empty' });
    return res.status(200).json({ psicologo });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  createPsicologo,
  getPsicologo,
  getAllPsicologo,
};
