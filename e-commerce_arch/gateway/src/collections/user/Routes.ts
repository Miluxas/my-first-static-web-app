import Router from 'koa-router';
import { getUser, getUsers } from './Controllers';

const router = new Router();
router.prefix('/user');

router
	.get(
		'/list',
		// JoiValidator(Schemas.searchCustomer),
		getUsers,
	)
	.get(
		'/:userId',
		// JoiValidator(Schemas.searchCustomer),
		getUser,
	);

export default router;
