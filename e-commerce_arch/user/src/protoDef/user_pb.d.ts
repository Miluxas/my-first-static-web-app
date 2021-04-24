// package: user
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class GetUserReq extends jspb.Message { 
    getUserid(): string;
    setUserid(value: string): GetUserReq;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserReq.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserReq): GetUserReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserReq;
    static deserializeBinaryFromReader(message: GetUserReq, reader: jspb.BinaryReader): GetUserReq;
}

export namespace GetUserReq {
    export type AsObject = {
        userid: string,
    }
}

export class User extends jspb.Message { 
    getName(): string;
    setName(value: string): User;

    getFamily(): string;
    setFamily(value: string): User;

    getEmail(): string;
    setEmail(value: string): User;

    getIsactive(): boolean;
    setIsactive(value: boolean): User;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        name: string,
        family: string,
        email: string,
        isactive: boolean,
    }
}

export class UserListRes extends jspb.Message { 
    clearUserlistList(): void;
    getUserlistList(): Array<User>;
    setUserlistList(value: Array<User>): UserListRes;
    addUserlist(value?: User, index?: number): User;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserListRes.AsObject;
    static toObject(includeInstance: boolean, msg: UserListRes): UserListRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserListRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserListRes;
    static deserializeBinaryFromReader(message: UserListRes, reader: jspb.BinaryReader): UserListRes;
}

export namespace UserListRes {
    export type AsObject = {
        userlistList: Array<User.AsObject>,
    }
}
