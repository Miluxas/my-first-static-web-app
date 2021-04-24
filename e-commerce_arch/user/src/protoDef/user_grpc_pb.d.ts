// package: user
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as user_pb from "./user_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IUser_Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUser: IUser_Service_IgetUser;
    getUsers: IUser_Service_IgetUsers;
}

interface IUser_Service_IgetUser extends grpc.MethodDefinition<user_pb.GetUserReq, user_pb.User> {
    path: string; // "/user.User_/getUser"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.GetUserReq>;
    requestDeserialize: grpc.deserialize<user_pb.GetUserReq>;
    responseSerialize: grpc.serialize<user_pb.User>;
    responseDeserialize: grpc.deserialize<user_pb.User>;
}
interface IUser_Service_IgetUsers extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, user_pb.UserListRes> {
    path: string; // "/user.User_/getUsers"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<user_pb.UserListRes>;
    responseDeserialize: grpc.deserialize<user_pb.UserListRes>;
}

export const User_Service: IUser_Service;

export interface IUser_Server {
    getUser: grpc.handleUnaryCall<user_pb.GetUserReq, user_pb.User>;
    getUsers: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, user_pb.UserListRes>;
}

export interface IUser_Client {
    getUser(request: user_pb.GetUserReq, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    getUser(request: user_pb.GetUserReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    getUser(request: user_pb.GetUserReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    getUsers(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: user_pb.UserListRes) => void): grpc.ClientUnaryCall;
    getUsers(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserListRes) => void): grpc.ClientUnaryCall;
    getUsers(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserListRes) => void): grpc.ClientUnaryCall;
}

export class User_Client extends grpc.Client implements IUser_Client {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getUser(request: user_pb.GetUserReq, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public getUser(request: user_pb.GetUserReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public getUser(request: user_pb.GetUserReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public getUsers(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: user_pb.UserListRes) => void): grpc.ClientUnaryCall;
    public getUsers(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserListRes) => void): grpc.ClientUnaryCall;
    public getUsers(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserListRes) => void): grpc.ClientUnaryCall;
}
