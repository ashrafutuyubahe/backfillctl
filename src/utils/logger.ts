import winston from "winston"

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};


const level = () => {
  const env = process.env.NODE_ENV || 'development';
  return env === 'development' ? 'debug' : 'info';
}

const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.printf(
    (info) => `[${info.timestamp}] [${info.level.toUpperCase()}]: ${info.message}`
  )
);

const transports = [
  
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize({ all: true }), // Colorize console text
      format
    )
  }),
]




const logger = winston.createLogger({
  level: level(),
  levels,
  transports,
});

export default logger;