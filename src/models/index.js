// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Feedback, LambdaResponse } = initSchema(schema);

export {
  Feedback,
  LambdaResponse
};