require('dotenv').config();

module.exports = {
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

