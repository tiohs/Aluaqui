import server from './app';

server.listen(3333, () => {
  console.log("Port 3333 🚀 \n" + process.env.APP_URL)
})