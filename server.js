import app from "./express.js";
import 'dotenv/config';
import mongoose from 'mongoose';

const {PORT, URI} = process.env;

mongoose.Promise = global.Promise
mongoose.connect(URI);
mongoose.connection.on('connection', (stream) => {
  console.log(`database connected ${stream}`);
})

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
})