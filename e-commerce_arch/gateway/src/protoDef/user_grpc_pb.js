// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_pb = require('./user_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_GetUserReq(arg) {
  if (!(arg instanceof user_pb.GetUserReq)) {
    throw new Error('Expected argument of type user.GetUserReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_GetUserReq(buffer_arg) {
  return user_pb.GetUserReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_User(arg) {
  if (!(arg instanceof user_pb.User)) {
    throw new Error('Expected argument of type user.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_User(buffer_arg) {
  return user_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UserListRes(arg) {
  if (!(arg instanceof user_pb.UserListRes)) {
    throw new Error('Expected argument of type user.UserListRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UserListRes(buffer_arg) {
  return user_pb.UserListRes.deserializeBinary(new Uint8Array(buffer_arg));
}


// *
// User Service
var User_Service = exports.User_Service = {
  //
// get User
// @param GetCustomerReq
// @return User
getUser: {
    path: '/user.User_/getUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetUserReq,
    responseType: user_pb.User,
    requestSerialize: serialize_user_GetUserReq,
    requestDeserialize: deserialize_user_GetUserReq,
    responseSerialize: serialize_user_User,
    responseDeserialize: deserialize_user_User,
  },
  //
// get All Users
// @param Empty
// @return Users
getUsers: {
    path: '/user.User_/getUsers',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: user_pb.UserListRes,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_user_UserListRes,
    responseDeserialize: deserialize_user_UserListRes,
  },
};

exports.User_Client = grpc.makeGenericClientConstructor(User_Service);
