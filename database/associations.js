const User = require('./models/user.model');
const Psicologo = require('./models/psicologo.model');
const Paciente = require('./models/paciente.model');
const Cita = require('./models/cita.model');

Psicologo.belongsToMany(Paciente, { through: Cita, foreignKey: 'psicologo_id', as: 'psicologo' });
Paciente.belongsToMany(Psicologo, { through: Cita, foreignKey: 'paciente_id', as: 'paciente' });
User.hasOne(Psicologo);
Psicologo.belongsTo(User);
User.hasOne(Paciente);
Paciente.belongsTo(User);
