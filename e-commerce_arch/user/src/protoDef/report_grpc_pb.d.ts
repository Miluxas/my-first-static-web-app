// package: report
// file: report.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as report_pb from "./report_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IReportServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addReport: IReportServiceService_IaddReport;
    updateReport: IReportServiceService_IupdateReport;
    get: IReportServiceService_Iget;
}

interface IReportServiceService_IaddReport extends grpc.MethodDefinition<report_pb.AddReq, google_protobuf_empty_pb.Empty> {
    path: string; // "/report.ReportService/addReport"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<report_pb.AddReq>;
    requestDeserialize: grpc.deserialize<report_pb.AddReq>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IReportServiceService_IupdateReport extends grpc.MethodDefinition<report_pb.UpdateReq, google_protobuf_empty_pb.Empty> {
    path: string; // "/report.ReportService/updateReport"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<report_pb.UpdateReq>;
    requestDeserialize: grpc.deserialize<report_pb.UpdateReq>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IReportServiceService_Iget extends grpc.MethodDefinition<report_pb.GetReq, report_pb.ReportRes> {
    path: string; // "/report.ReportService/get"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<report_pb.GetReq>;
    requestDeserialize: grpc.deserialize<report_pb.GetReq>;
    responseSerialize: grpc.serialize<report_pb.ReportRes>;
    responseDeserialize: grpc.deserialize<report_pb.ReportRes>;
}

export const ReportServiceService: IReportServiceService;

export interface IReportServiceServer {
    addReport: grpc.handleUnaryCall<report_pb.AddReq, google_protobuf_empty_pb.Empty>;
    updateReport: grpc.handleUnaryCall<report_pb.UpdateReq, google_protobuf_empty_pb.Empty>;
    get: grpc.handleUnaryCall<report_pb.GetReq, report_pb.ReportRes>;
}

export interface IReportServiceClient {
    addReport(request: report_pb.AddReq, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    addReport(request: report_pb.AddReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    addReport(request: report_pb.AddReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateReport(request: report_pb.UpdateReq, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateReport(request: report_pb.UpdateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    updateReport(request: report_pb.UpdateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    get(request: report_pb.GetReq, callback: (error: grpc.ServiceError | null, response: report_pb.ReportRes) => void): grpc.ClientUnaryCall;
    get(request: report_pb.GetReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: report_pb.ReportRes) => void): grpc.ClientUnaryCall;
    get(request: report_pb.GetReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: report_pb.ReportRes) => void): grpc.ClientUnaryCall;
}

export class ReportServiceClient extends grpc.Client implements IReportServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public addReport(request: report_pb.AddReq, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public addReport(request: report_pb.AddReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public addReport(request: report_pb.AddReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateReport(request: report_pb.UpdateReq, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateReport(request: report_pb.UpdateReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public updateReport(request: report_pb.UpdateReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public get(request: report_pb.GetReq, callback: (error: grpc.ServiceError | null, response: report_pb.ReportRes) => void): grpc.ClientUnaryCall;
    public get(request: report_pb.GetReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: report_pb.ReportRes) => void): grpc.ClientUnaryCall;
    public get(request: report_pb.GetReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: report_pb.ReportRes) => void): grpc.ClientUnaryCall;
}
