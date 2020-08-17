export default {
  DB: {
    URI: process.env.DATABASE_URI || "mongodb://localhost/jwt",
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
  },
  jwtSecret: process.env.JWT_SECRET || "mySecretes",
};
