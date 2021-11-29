module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "JAVA4real2021",
    DB: "twitdb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };