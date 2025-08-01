// Database Configuration
const MONGODB_CONFIG = {
  uri: 'mongodb+srv://elhadad3593:NIqGTCLDJJFOFbtf@cluster0.3vqlnfg.mongodb.net/paypass?retryWrites=true&w=majority',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
};

// Server Configuration
const SERVER_CONFIG = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET || 'paypass_jwt_secret_key_2024_secure'
};

module.exports = {
  MONGODB_CONFIG,
  SERVER_CONFIG
}; 