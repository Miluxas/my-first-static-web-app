// import grpc from 'grpc';
import { Server, ServerCredentials, ServerUnaryCall, sendUnaryData } from 'grpc';

//
import { User_Service, IUser_Server } from './protoDef/user_grpc_pb';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { User, GetUserReq, UserListRes } from './protoDef/user_pb';

const port = 7001;

class UserServer implements IUser_Server {
	public getUser(call: ServerUnaryCall<GetUserReq>, callback: sendUnaryData<User>): void {
		console.log('#################### getCustomer id: ', call.request.getUserid());
		const user: User = new User()
			.setName('S.Mahdi')
			.setFamily('Hejazi')
			.setEmail('m.hejazi@nizek.com')
			.setIsactive(true);
		callback(null, user);
	}

	public getUsers(call: ServerUnaryCall<Empty>, callback: sendUnaryData<UserListRes>): void {
		console.log('#################### getCustomers #############', call);

		const user: User = new User()
			.setName('S.Mahdi')
			.setFamily('Hejazi')
			.setEmail('m.hejazi@nizek.com')
			.setIsactive(true);

		const user1: User = new User()
			.setName('Aliiiiiii')
			.setFamily('Rezai')
			.setEmail('a.rezai@nizek.com')
			.setIsactive(true);
		// const customers = new Array<Customer>();
		// customers.push(customer, customer1);
		callback(null, new UserListRes().setUserlistList([user, user1]));
	}
}

const server: Server = new Server({
	'grpc.max_receive_message_length': -1,
	'grpc.max_send_message_length': -1,
	// 'grpc.enable_http_proxy': 0,
});
server.addService(User_Service, new UserServer());
server.bind(`0.0.0.0:${port}`, ServerCredentials.createInsecure());
server.start();

console.log(`Server is listening at port ${port}!`);

// server Crash Handle
process.on('unhandledRejection', (reason, promise) => {
	console.error('!!!!! SERVER unhandledRejection at:', reason || promise);
	// Recommended: send the information to sentry.io
	// or whatever crash reporting service you use
});
process.on('uncaughtException', function (err) {
	console.error('!!!!! SERVER uncaughtException err:', err);
});
