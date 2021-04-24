// This middleware formats replies before sending them out of the server.
// Most commonly used HTTP statuses are covered.
// Feel free to add more statuses or implement whole middleware from scratch.
// The responses will be formatted like these:
//
// Success
// ```
// {
//   data: Object
// }
// ```
//
// Error
// ```
// {
//   error: {
//     status: Number,
//     title: String,
//     message: String
//   }
// }
// ```

const defaultErrors: any = {
	400: { title: 'Bad Request', message: 'Request data is not valid.' },
	401: { title: 'Unauthorized', message: 'You have not access to the requested resource.' },
	403: { title: 'Forbidden', message: 'Access to the requested resource is forbidden.' },
	404: { title: 'Not Found', message: 'The requested resource is not found.' },
	405: { title: 'Method Not Allowed', message: 'The method is not allowed on the requested resource.' },
	406: { title: 'Not Acceptable', message: 'The requested data format is not acceptable by the requested resource.' },
	409: { title: 'Conflict', message: 'A conflict occurred with the request.' },
	429: { title: 'Too Many Requests', message: 'Too many requests were made to the resource.' },
	500: { title: 'Bad Implementation', message: 'Sorry! Something went wrong when trying to process the request.' },
	501: { title: 'Not Implemented', message: 'The requested resource is not implemented yet.' },
	503: {
		title: 'Service Unavailable',
		message: 'Unfortunately service is not available right now! Please try again later.',
	},
};

const beautifySuccess = (ctx: any) => {
	ctx.body = {
		data: ctx.body || {},
	};
};

const beautifyErrors = (ctx: any, error: any) => {
	const { status = 500, message } = error;
	const { title, message: defaultMessage } = defaultErrors[status];
	ctx.status = status;
	ctx.body = {
		error: {
			status,
			title,
			message: message || defaultMessage,
		},
	};
};

const Reply = async (ctx: any, next: any) => {
	try {
		await next();
		beautifySuccess(ctx);
		console.log('******** Reply beautifySuccess:', ctx.body);
	} catch (error) {
		beautifyErrors(ctx, error);
		console.log('!!!!!!! Reply beautifyErrors:', error);
	}
};

export default Reply;
