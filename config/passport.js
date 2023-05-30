//Implementacion de passport y jwt tokens para la autenticacion de los usuarios
//Todavia no me siento muy comodo implementando todo esto
//En esta version del codigo cualquier usuario puede crear su usuario y password
//pero solo acceder a las funciones auth si incluyend su token valido al hacer 
//un request y asi creo que soluciono el bonus de las validaciones

const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const { User } = require('../models');

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'jwt_secret_', 
};

const jwtStrategy = new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
    const user = await User.findByPk(payload.sub);
    if (!user) {
      return done(null, false);
    }
    done(null, user);
  } catch (error) {
    done(error, false);
  }
});

passport.use(jwtStrategy);

module.exports = passport;
