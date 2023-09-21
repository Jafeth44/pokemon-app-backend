import mongoose from "mongoose"
import 'dotenv/config';

const {URI} = process.env;

export const dbConnection = async () => {

  try {
    
    await mongoose.connect(URI , {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    console.log('database online');

  } catch (error) {
    console.log(error);
    throw new Error('error in db initialization');
  }

}