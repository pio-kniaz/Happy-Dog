import logger from 'redux-logger';

import { config } from '@/config';

export const middlewares = [];

if (config.MODE === 'development') {
  middlewares.push(logger);
}
