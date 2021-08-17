import { Sequelize } from 'sequelize';

import mongoose from 'mongoose';
import databaseConfig from '../config/databases';
import User from '../App/models/User';
import File from '../App/models/File';

const models = [User, File];
class Database {
  constructor() {
    this.mongo();
    this.init();
  }
  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
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
