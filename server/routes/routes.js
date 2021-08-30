import express from 'express';
import { uInfo } from './routesLogic.js';
import { newInfo } from './routesLogic.js';
// using the mongodb
import update from '../MongoDB/schemas.js';

const router = express.Router();

// list all my routes
router.get('/find', uInfo)
router.post('/create', newInfo)


export default router;