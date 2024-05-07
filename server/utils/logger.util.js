const pino = require("pino");

const date = new Date();
const today = date.toISOString().split("T")[0];

let targets = [
  {
    target: "pino-pretty",
    options: {
      destination: `${__dirname}/../logs/${today}.log`,
      translateTime: "SYS:standard",
      colorize: true,
      ignore: "pid,hostname",
    },
  },

  {
    target: "pino-pretty",
    options: {
      destination: 1,
      translateTime: "SYS:standard",
      colorize: true,
      ignore: "pid,hostname",
    },
  },
];

const logger = pino({
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
  timestamp: () => `,"time":"${new Date().toISOString()}"`,
  enabled: process.env.NODE_ENV !== "test",
  redact: [
    "req.headers.authorization",
    "*.authorization",
    "*.name",
    "*.email",
    "*.token",
    "*.otp",
    "*.password",
    "*.pswd",
  ],
  transport: {
    targets: targets,
  },
});

module.exports = logger;
