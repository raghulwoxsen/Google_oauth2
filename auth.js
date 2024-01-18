const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const GOOGLE_CLIENT_ID =
  "60955095518-la0ef5uabc69stteppbd2r4skpnbjgje.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5001/auth/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
