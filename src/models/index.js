// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Feedback } = initSchema(schema);

export {
  Feedback
};