const express = require('express');
const bodyParser = require('body-parser');
const authRouter = require('./routes/auth');
const booksRouter = require('./routes/books');
const librariesRouter = require('./routes/libraries');
const usersRoutes = require('./routes/users');
const passport = require('./config/passport');
const { User } = require('./models');


const app = express();
//Incluyo esta linea para que se haga el setting del numero de puerto
//dinamico y se puede configurar el puerto a una variable enviroment definida
//o que lo haga automaticamente en el puerto 3000 si no esta definida.
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());


// Rutas
app.use('/auth', authRouter);
app.use('/books', booksRouter);
app.use('/libraries', librariesRouter);
app.use('/users', usersRoutes);

/* Creacion del user 'admin', dejo comentada la funcion que deberia funcionar
porque me devuelve un error en la base de datos cuando ejecuto la aplicacion
porque no encuentra la tabla User. Para la creacion del usuario sigo la logica
definida en mi modelo de usuario creando su id, username y password

const createAdminUser = async () => {
  try {
    const adminUser = await User.create({
      id: 1,
      username: 'admin',
      password: 'admin',
      
    });
    console.log('Admin user created successfully:', adminUser);
  } catch (error) {
    console.error('Error creating admin user:', error);
  }
};



createAdminUser();
**/

app.get('/', (req, res) => {
  res.send('Bookstore API');
});

// Middleware para manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
