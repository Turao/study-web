import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class RegisterUserRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): RegisterUserRequest;

  getFirstName(): string;
  setFirstName(value: string): RegisterUserRequest;

  getLastName(): string;
  setLastName(value: string): RegisterUserRequest;

  getTenancy(): string;
  setTenancy(value: string): RegisterUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterUserRequest): RegisterUserRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterUserRequest;
  static deserializeBinaryFromReader(message: RegisterUserRequest, reader: jspb.BinaryReader): RegisterUserRequest;
}

export namespace RegisterUserRequest {
  export type AsObject = {
    email: string,
    firstName: string,
    lastName: string,
    tenancy: string,
  }
}

export class RegisterUserResponse extends jspb.Message {
  getId(): string;
  setId(value: string): RegisterUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterUserResponse): RegisterUserResponse.AsObject;
  static serializeBinaryToWriter(message: RegisterUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterUserResponse;
  static deserializeBinaryFromReader(message: RegisterUserResponse, reader: jspb.BinaryReader): RegisterUserResponse;
}

export namespace RegisterUserResponse {
  export type AsObject = {
    id: string,
  }
}

export class DeleteUserRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserRequest): DeleteUserRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserRequest;
  static deserializeBinaryFromReader(message: DeleteUserRequest, reader: jspb.BinaryReader): DeleteUserRequest;
}

export namespace DeleteUserRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteUserResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserResponse): DeleteUserResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserResponse;
  static deserializeBinaryFromReader(message: DeleteUserResponse, reader: jspb.BinaryReader): DeleteUserResponse;
}

export namespace DeleteUserResponse {
  export type AsObject = {
  }
}

export class GetUserInfoRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetUserInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserInfoRequest): GetUserInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserInfoRequest;
  static deserializeBinaryFromReader(message: GetUserInfoRequest, reader: jspb.BinaryReader): GetUserInfoRequest;
}

export namespace GetUserInfoRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetUserInfoResponse extends jspb.Message {
  getUser(): UserInfo | undefined;
  setUser(value?: UserInfo): GetUserInfoResponse;
  hasUser(): boolean;
  clearUser(): GetUserInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserInfoResponse): GetUserInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetUserInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserInfoResponse;
  static deserializeBinaryFromReader(message: GetUserInfoResponse, reader: jspb.BinaryReader): GetUserInfoResponse;
}

export namespace GetUserInfoResponse {
  export type AsObject = {
    user?: UserInfo.AsObject,
  }
}

export class UserInfo extends jspb.Message {
  getId(): string;
  setId(value: string): UserInfo;

  getEmail(): string;
  setEmail(value: string): UserInfo;

  getFirstName(): string;
  setFirstName(value: string): UserInfo;

  getLastName(): string;
  setLastName(value: string): UserInfo;

  getTenancy(): string;
  setTenancy(value: string): UserInfo;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): UserInfo;
  hasCreatedAt(): boolean;
  clearCreatedAt(): UserInfo;

  getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): UserInfo;
  hasDeletedAt(): boolean;
  clearDeletedAt(): UserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserInfo): UserInfo.AsObject;
  static serializeBinaryToWriter(message: UserInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserInfo;
  static deserializeBinaryFromReader(message: UserInfo, reader: jspb.BinaryReader): UserInfo;
}

export namespace UserInfo {
  export type AsObject = {
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    tenancy: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum DeletedAtCase { 
    _DELETED_AT_NOT_SET = 0,
    DELETED_AT = 7,
  }
}

