import Koa from 'koa';
import KoaBody from 'koa-body';
import KoaLogger from 'koa-logger';

import config from './config';

import QueryParser from './middleware/QueryParser';
import Reply from './middleware/Reply';
import Routes from './Routes';

// Create Koa Server, register middleware and start
const app = new Koa();
app.use(KoaLogger());
app.use(QueryParser);
app.use(KoaBody({ multipart: true, parsedMethods: ['POST', 'PUT', 'PATCH'] }));
app.use(Reply);
app.use(Routes());

const port = config.port;
app.listen(port);

console.log(`Server KOA is listening at port ${port}!`);

// server Crash Handle
process.on('unhandledRejection', (reason, promise) => {
	console.error('!!!!! SERVER unhandledRejection at:', reason || promise);
	// Recommended: send the information to sentry.io
	// or whatever crash reporting service you use
});
process.on('uncaughtException', function (err) {
	console.error('!!!!! SERVER uncaughtException err:', err);
});
