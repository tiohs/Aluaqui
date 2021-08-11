import express from 'express';
import { resolve } from 'path';


class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }
  routes() {
    this.server.use((req, res) => {
      res.json({ ok : "Hello World ! 😎"});
    });
  }
}

export default new App().server;
