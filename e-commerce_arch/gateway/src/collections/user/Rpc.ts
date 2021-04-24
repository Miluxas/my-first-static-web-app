import { credentials, ServiceError } from 'grpc';
import { User_Client } from '../../protoDef/user_grpc_pb';
import { GetUserReq, User, UserListRes } from '../../protoDef/user_pb';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';

const userPort = 7001;

/**
 * gRPC UserClient Service
 */
class ClientService {
	private readonly client: User_Client = new User_Client(`0.0.0.0:${userPort}`, credentials.createInsecure(), {
		'grpc.keepalive_time_ms': 120000,
		'grpc.http2.min_time_between_pings_ms': 120000,
		'grpc.keepalive_timeout_ms': 20000,
		'grpc.http2.max_pings_without_data': 0,
		'grpc.keepalive_permit_without_calls': 1,
	});

	public async getUser(id: string): Promise<User.AsObject> {
		return new Promise<User.AsObject>((resolve, reject): void => {
			const userReq = new GetUserReq();
			userReq.setUserid(id);
			this.client.getUser(userReq, (err: ServiceError | null, res: User) => {
				if (err) {
					return reject(err);
				}
				resolve(res.toObject());
			});
		});
	}

	public async getUsers(): Promise<Array<User.AsObject>> {
		return new Promise<Array<User.AsObject>>((resolve, reject): void => {
			this.client.getUsers(new Empty(), (err: ServiceError | null, res: UserListRes) => {
				if (err) {
					return reject(err);
				}
				resolve(res.toObject().userlistList);
			});
		});
	}
}

export const clientService: ClientService = new ClientService();
