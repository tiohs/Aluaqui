import mongoose from 'mongoose';
class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    this.mongooseConnection = mongoose.connect(
      process.env.MONGO_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  }
}

export default new Database();
