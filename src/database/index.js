import mongoose from 'mongoose';
import databaseConfig from '../config/database';
import User from '../App/models/User';

const model = [User];
class Database {
  constructor() {
    this.mongo();
    this.init();
  }
  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map((model) => model.init(this.connection));
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
