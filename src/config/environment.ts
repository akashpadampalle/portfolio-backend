import * as dotenv from 'dotenv';

if (process.env.NODE_ENV === 'development'){
    console.log('setting up development environment');
    dotenv.config();
}