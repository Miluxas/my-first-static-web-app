import Joi from '@hapi/joi';

const Schemas = {
	searchCustomer: {
		params: {},
		body: {},
		query: {
			username: Joi.string()
				.min(5)
				.max(100)
				.regex(/^[a-zA-Z0-9-_.]+$/)
				.required(),
		},
	},
};

export default Schemas;
