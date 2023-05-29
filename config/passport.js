//Implementacion de passport y jwt tokens para la autenticacion de los usuarios
//Todavia no me siento muy comodo implementando todo esto

const passport = require('passport');
const passportJWT = require('passport-jwt');
const { Strategy: JWTStrategy, ExtractJwt } = passportJWT;

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'my_secret_key',
  };


passport.use(
  new JWTStrategy(jwtOptions, async (payload, done) => {
    // Voy a usar valores muy simples mientras experimento con esto para no confundirme solo
    const user = { id: 1, username: 'john' };
    return done(null, user);
  })
);
  
  