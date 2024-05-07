const passport = require("passport");
const CustomStrategy = require("passport-custom").Strategy;
const sendgrid = require("@sendgrid/mail");
const jwt = require("jsonwebtoken");
const { findUserByEmail, createUser } = require("@/data/users.data");

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

passport.use(
  "otp",
  new CustomStrategy(async function (req, done) {
    const email = req.body.email;
    const otp = req.body.otp;

    try {
      let user = await findUserByEmail(email);

      if (!user) {
        const name = email.split("@")[0];

        user = await createUser({ email: email, name: name });
      }

      if (!otp) {
        user.otp = Math.floor(100000 + Math.random() * 900000);

        await sendgrid.send({
          to: user.email,
          from: process.env.SENDGRID_SENDER_EMAIL,
          subject: "Your OTP",
          text: `Your OTP is: ${user.otp}`,
          html: `<p>Your OTP is: <strong>${user.otp}</strong></p>`,
        });

        done(null, false, { message: "OTP sent" });
      } else {
        if (user.otp === parseInt(otp)) {
          const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

          done(null, { ...user, token });
        } else {
          done(null, false, { message: "Invalid OTP" });
        }
      }
    } catch (err) {
      done(err);
    }
  })
);

module.exports = passport;
