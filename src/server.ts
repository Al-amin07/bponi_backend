import app from './app';
import mongoose from 'mongoose';
import config from './app/config';
async function main() {
  try {
    await mongoose.connect(config.DB_URL as string);
    app.listen(config.PORT, () => {
      console.log('Server running at : ', config.PORT);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
