// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var report_pb = require('./report_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
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

function serialize_report_AddReq(arg) {
  if (!(arg instanceof report_pb.AddReq)) {
    throw new Error('Expected argument of type report.AddReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_report_AddReq(buffer_arg) {
  return report_pb.AddReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_report_GetReq(arg) {
  if (!(arg instanceof report_pb.GetReq)) {
    throw new Error('Expected argument of type report.GetReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_report_GetReq(buffer_arg) {
  return report_pb.GetReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_report_ReportRes(arg) {
  if (!(arg instanceof report_pb.ReportRes)) {
    throw new Error('Expected argument of type report.ReportRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_report_ReportRes(buffer_arg) {
  return report_pb.ReportRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_report_UpdateReq(arg) {
  if (!(arg instanceof report_pb.UpdateReq)) {
    throw new Error('Expected argument of type report.UpdateReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_report_UpdateReq(buffer_arg) {
  return report_pb.UpdateReq.deserializeBinary(new Uint8Array(buffer_arg));
}


// *
// Report Service
var ReportServiceService = exports.ReportServiceService = {
  //
// Add new Report rpc
// @param AddReq
addReport: {
    path: '/report.ReportService/addReport',
    requestStream: false,
    responseStream: false,
    requestType: report_pb.AddReq,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_report_AddReq,
    requestDeserialize: deserialize_report_AddReq,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  //
// Update Report rpc
// @param UpdateReq
updateReport: {
    path: '/report.ReportService/updateReport',
    requestStream: false,
    responseStream: false,
    requestType: report_pb.UpdateReq,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_report_UpdateReq,
    requestDeserialize: deserialize_report_UpdateReq,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  //
// Get Report rpc
// @param GetReq
// @return ReportRes
get: {
    path: '/report.ReportService/get',
    requestStream: false,
    responseStream: false,
    requestType: report_pb.GetReq,
    responseType: report_pb.ReportRes,
    requestSerialize: serialize_report_GetReq,
    requestDeserialize: deserialize_report_GetReq,
    responseSerialize: serialize_report_ReportRes,
    responseDeserialize: deserialize_report_ReportRes,
  },
};

exports.ReportServiceClient = grpc.makeGenericClientConstructor(ReportServiceService);
