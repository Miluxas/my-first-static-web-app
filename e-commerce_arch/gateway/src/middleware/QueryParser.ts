// This is a middleware which parses query string to an object.
// We need this middleware because koa does not support nested parsing.

import * as qs from 'qs';
import * as _ from 'lodash';

const privates = {
	parseQuery(ctx: any) {
		const queryParams = qs.parse(ctx.querystring);
		ctx.query = {};
		privates.assignToCtx(ctx.query, queryParams);
	},
	// Following method is needed because assigning nested object to ctx.query is not possible with straight assignment
	assignToCtx(originalQuery: any, queryParams: any) {
		Object.keys(queryParams).forEach((key) => {
			if (privates.isNested(key)) {
				originalQuery[key] = {};
				privates.assignToCtx(originalQuery[key], key);
			} else {
				originalQuery[key] = queryParams[key];
			}
		});
	},
	isNested(key: any) {
		return _.isPlainObject(key);
	},
};

const QueryParser = async (ctx: any, next: any) => {
	const querystring = ctx.querystring;
	privates.parseQuery(ctx);
	ctx.request.rawQuery = querystring;
	await next();
};

export default QueryParser;
