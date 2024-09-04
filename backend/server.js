require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const server = express();
const blogRouter = require('./routes/blog')
const videoRouter = require('./routes/video')
const userProvider = require('./routes/users')
// const userRouter = require('./routes/user')
console.log('env',process.env.DB_PASSWORD)
console.log('env', process.env.MONGO_URL)


//db connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb+srv://rishab:${process.env.DB_PASSWORD}@cluster0.loqz1.mongodb.net/creatorDB?retryWrites=true&w=majority&appName=Cluster0`);
  console.log('database connected')
}



//bodyParser
server.use(cors());
server.use(express.json());
server.use(morgan('default'));
server.use(express.static(process.env.PUBLIC_DIR));
server.use('/api/blogs', blogRouter.router);
server.use('/', blogRouter.router);
server.use('/api/videos', videoRouter.router);
server.use('/', videoRouter.router);
server.use('/api/users', userProvider.router);
server.use('/', userProvider.router);

server.listen(8081, () => {
  console.log('server started');
});