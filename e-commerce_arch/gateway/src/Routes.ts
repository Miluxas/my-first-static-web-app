import CombineRouters from 'koa-combine-routers';

import user from './collections/user/Routes';

// Add collection routes to the following array
export default CombineRouters([user]);
