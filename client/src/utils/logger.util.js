import chalk from "chalk";

// log levels
const levels = {
  ERROR: "error",
  WARN: "warn",
  INFO: "info",
  DEBUG: "debug",
};

//  log object
const createLogObject = (level, message) => {
  return {
    level: level,
    time: new Date().toISOString(),
    message: message,
  };
};

//format for log color
const formatLogObject = (logObject) => {
  let colorize;

  switch (logObject.level) {
    case levels.ERROR:
      colorize = chalk.red;
      break;
    case levels.WARN:
      colorize = chalk.yellow;
      break;
    case levels.INFO:
      colorize = chalk.green;
      break;
    case levels.DEBUG:
      colorize = chalk.white;
      break;
    default:
      colorize = chalk.white;
      break;
  }

  return colorize(
    `[${logObject.time}] ${logObject.level.toUpperCase()}: ${logObject.message}`
  );
};

const logger = {
  error: (message) => {
    const logObject = createLogObject(levels.ERROR, message);
    const formattedLog = formatLogObject(logObject);
    console.error(formattedLog);
  },
  warn: (message) => {
    const logObject = createLogObject(levels.WARN, message);
    const formattedLog = formatLogObject(logObject);
    console.warn(formattedLog);
  },
  info: (message) => {
    const logObject = createLogObject(levels.INFO, message);
    const formattedLog = formatLogObject(logObject);
    console.info(formattedLog);
  },
  debug: (message) => {
    const logObject = createLogObject(levels.DEBUG, message);
    const formattedLog = formatLogObject(logObject);
    console.log(formattedLog);
  },
};

export default logger;
