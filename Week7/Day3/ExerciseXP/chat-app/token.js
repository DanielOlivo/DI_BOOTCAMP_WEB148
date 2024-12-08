const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportJwt = require('passport-jwt');
const dotenv = require('dotenv');

const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

const {parsed: {SECRET}} = dotenv.config()

const jwtDecodeOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET
};

module.exports = function getToken(info){
    const token = jwt.sign({
            data: info,
        },
        SECRET
    )
    return token;
}


passport.use(
    new JwtStrategy(jwtDecodeOptions, (payload, done) => {
        return done(null, payload.data);
    })
)