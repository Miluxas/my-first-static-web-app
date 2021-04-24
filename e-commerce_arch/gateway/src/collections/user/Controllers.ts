import { Context } from 'koa';
import { clientService } from './Rpc';

/**
 * get customer from microservice Customer
 */
export async function getUser(ctx: Context) {
	console.log('@@@@@@@@@@@@@@ getUser ###############');
	await clientService
		.getUser(ctx.params.userId)
		.then((user) => (ctx.body = user))
		.catch((err) => {
			console.error('!!! getUser catch err: ', err);
		});
	// const { body } = context.request
	// const { query } = context.request.query;
	// context.body = { data: result };
}

export async function getUsers(ctx: Context) {
	console.log('@@@@@@@@@@@@@@ getUsers @@@@@@@@@@@@');
	await clientService
		.getUsers()
		.then((users) => (ctx.body = users))
		.catch((err) => {
			console.error('!!! getUsers catch err: ', err);
		});
}
