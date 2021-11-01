const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./database/sequelize');

require('./database/associations');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8010;

// const security = require('./utilities/security')

app.use(cors());
app.use(express.json());

// app.use(security);
const pacienteRouter = require('./routes/Paciente/endpoints');
const psicologoRouter = require('./routes/Psicologo/endpoints');
const userRouter = require('./routes/User/endpoints');
const citaRouter = require('./routes/Cita/endpoints');

app.use('/api/v1/paciente', pacienteRouter);
app.use('/api/v1/psicologo', psicologoRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/cita', citaRouter);

module.exports = app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);

  sequelize.sync({ force: false })
    .then(() => {
      console.log('Connected to the DB');
    }).catch((error) => {
      console.log('Database error:', error);
    });
});
