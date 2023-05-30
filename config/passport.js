//Implementacion de passport y jwt tokens para la autenticacion de los usuarios
//Todavia no me siento muy comodo implementando todo esto

const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const { User } = require('../models');

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'your_jwt_secret_here', // Replace with your desired secret key
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
