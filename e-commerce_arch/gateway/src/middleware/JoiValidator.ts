// This is a validation middleware which can be used to validate requests based on Joi schema.

// import Joi from '@hapi/joi';
// import * as _ from 'lodash';
// import * as isStream from 'is-stream';

/*const privates = {
	joiValidator(schema: any) {
		return async (ctx: any, next: any) => {
			try {
				Joi.valid(ctx.query, schema.query || {}, (error: any, value: any) => {
					if (error) {
						throw error;
					} else {
						privates.assignConvertedQueryToCtx(ctx.query, value);
					}
				});
				const paramsValidationResult = Joi.validate(ctx.params, schema.params || {});
				if (paramsValidationResult.error) {
					throw paramsValidationResult.error;
				}
				Joi.validate(ctx.request.body, schema.body || {}, (error, value) => {
					if (error) {
						throw error;
					} else {
						// Replacing streams values with the values converted by validator should be avoided.
						Object.keys(value).forEach((key) => {
							if (!(_.isArray(value[key]) && isStream(value[key][0])) && !isStream(value[key])) {
								ctx.request.body[key] = value[key];
							}
						});
					}
				});
			} catch (error) {
				throw { message: error.message || 'Validation failed!', status: 400 };
			}
			await next();
		};
	},
	assignConvertedQueryToCtx(originalQuery: any, queryParams: any) {
		Object.keys(queryParams).forEach((key) => {
			if (privates.isNested(key)) {
				originalQuery[key] = {};
				privates.assignConvertedQueryToCtx(originalQuery[key], key);
			} else {
				originalQuery[key] = queryParams[key];
			}
		});
	},
	isNested(key) {
		return _.isPlainObject(key);
	},
};

const JoiValidator = (schema: any) => {
	return privates.joiValidator(schema);
};*/

// export default JoiValidator;
