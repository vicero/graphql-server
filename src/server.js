import express from 'express'; // yarn add express
import { createHandler } from 'graphql-http/lib/use/node';
import { schema } from './schema.js';

// Create a express instance serving all methods on `/graphql`
// where the GraphQL over HTTP express request handler is
const app = express();
app.all('/graphql', createHandler({ schema }));

app.listen({ port: 4000 });
console.log('Listening to port 4000');