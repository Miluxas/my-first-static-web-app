// package: report
// file: report.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Report extends jspb.Message { 
    getApiname(): ApiNameMS;
    setApiname(value: ApiNameMS): Report;

    getIp(): string;
    setIp(value: string): Report;

    getSessionid(): string;
    setSessionid(value: string): Report;


    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): google_protobuf_any_pb.Any | undefined;
    setRequest(value?: google_protobuf_any_pb.Any): Report;


    hasResponse(): boolean;
    clearResponse(): void;
    getResponse(): google_protobuf_any_pb.Any | undefined;
    setResponse(value?: google_protobuf_any_pb.Any): Report;

    getCreatedat(): number;
    setCreatedat(value: number): Report;

    getUpdateat(): number;
    setUpdateat(value: number): Report;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Report.AsObject;
    static toObject(includeInstance: boolean, msg: Report): Report.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Report, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Report;
    static deserializeBinaryFromReader(message: Report, reader: jspb.BinaryReader): Report;
}

export namespace Report {
    export type AsObject = {
        apiname: ApiNameMS,
        ip: string,
        sessionid: string,
        request?: google_protobuf_any_pb.Any.AsObject,
        response?: google_protobuf_any_pb.Any.AsObject,
        createdat: number,
        updateat: number,
    }
}

export class ReportRes extends jspb.Message { 
    clearReportsList(): void;
    getReportsList(): Array<Report>;
    setReportsList(value: Array<Report>): ReportRes;
    addReports(value?: Report, index?: number): Report;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReportRes.AsObject;
    static toObject(includeInstance: boolean, msg: ReportRes): ReportRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReportRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReportRes;
    static deserializeBinaryFromReader(message: ReportRes, reader: jspb.BinaryReader): ReportRes;
}

export namespace ReportRes {
    export type AsObject = {
        reportsList: Array<Report.AsObject>,
    }
}

export class AddReq extends jspb.Message { 
    getReqid(): string;
    setReqid(value: string): AddReq;

    getApiname(): ApiNameMS;
    setApiname(value: ApiNameMS): AddReq;

    getIp(): string;
    setIp(value: string): AddReq;

    getSessionid(): string;
    setSessionid(value: string): AddReq;


    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): google_protobuf_any_pb.Any | undefined;
    setRequest(value?: google_protobuf_any_pb.Any): AddReq;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddReq.AsObject;
    static toObject(includeInstance: boolean, msg: AddReq): AddReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddReq;
    static deserializeBinaryFromReader(message: AddReq, reader: jspb.BinaryReader): AddReq;
}

export namespace AddReq {
    export type AsObject = {
        reqid: string,
        apiname: ApiNameMS,
        ip: string,
        sessionid: string,
        request?: google_protobuf_any_pb.Any.AsObject,
    }
}

export class UpdateReq extends jspb.Message { 
    getReqid(): string;
    setReqid(value: string): UpdateReq;


    hasResponse(): boolean;
    clearResponse(): void;
    getResponse(): google_protobuf_any_pb.Any | undefined;
    setResponse(value?: google_protobuf_any_pb.Any): UpdateReq;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateReq.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateReq): UpdateReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateReq;
    static deserializeBinaryFromReader(message: UpdateReq, reader: jspb.BinaryReader): UpdateReq;
}

export namespace UpdateReq {
    export type AsObject = {
        reqid: string,
        response?: google_protobuf_any_pb.Any.AsObject,
    }
}

export class GetReq extends jspb.Message { 
    getApiname(): ApiNameMS;
    setApiname(value: ApiNameMS): GetReq;


    hasSearch(): boolean;
    clearSearch(): void;
    getSearch(): google_protobuf_any_pb.Any | undefined;
    setSearch(value?: google_protobuf_any_pb.Any): GetReq;

    getPage(): number;
    setPage(value: number): GetReq;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetReq.AsObject;
    static toObject(includeInstance: boolean, msg: GetReq): GetReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetReq;
    static deserializeBinaryFromReader(message: GetReq, reader: jspb.BinaryReader): GetReq;
}

export namespace GetReq {
    export type AsObject = {
        apiname: ApiNameMS,
        search?: google_protobuf_any_pb.Any.AsObject,
        page: number,
    }
}

export enum ApiNameMS {
    CUSTOMER = 0,
    INVENTORY = 1,
    PRODUCT = 2,
}
