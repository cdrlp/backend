import { StatusCodes } from 'http-status-codes';

interface HttpRequest {
  status: number;
  message: string;
}

interface SuccessModel extends HttpRequest {
  data?: unknown;
}

interface ErrorModel extends HttpRequest {
  timestamp: number;
  type?: string;
}

const successModel = (status: number, message: string, data?: unknown): SuccessModel => ({
  status,
  message,
  data
});

const errorModel = (status: number, message: string, type?: string): ErrorModel => ({
  status,
  message,
  type,
  timestamp: new Date().getTime()
});

export const ok = (message: string, data?: unknown) => successModel(StatusCodes.OK, message, data);

export const created = (message: string, data?: unknown) =>
  successModel(StatusCodes.CREATED, message, data);

export const badRequest = (message: string, type?: string) =>
  errorModel(StatusCodes.BAD_REQUEST, message, type);

export const notFound = (message: string) => errorModel(StatusCodes.NOT_FOUND, message);

export const conflict = (message: string, type?: string) =>
  errorModel(StatusCodes.CONFLICT, message, type);

export const expectationFailed = (message: string, type?: string) =>
  errorModel(StatusCodes.EXPECTATION_FAILED, message, type);

export const unauthorized = (message: string, type?: string) =>
  errorModel(StatusCodes.UNAUTHORIZED, message, type);

export const forbidden = (message: string, type?: string) =>
  errorModel(StatusCodes.FORBIDDEN, message, type);

export const serviceUnavailable = (message: string) =>
  errorModel(StatusCodes.SERVICE_UNAVAILABLE, message);

export const serverInteralError = (message: string, type?: string) =>
  errorModel(StatusCodes.INTERNAL_SERVER_ERROR, message, type);

export const isOk = (status: number) => status === StatusCodes.OK;

export const isCreated = (status: number) => status === StatusCodes.CREATED;

export const isBadRequest = (status: number) => status === StatusCodes.BAD_REQUEST;

export const isNotFound = (status: number) => status === StatusCodes.NOT_FOUND;

export const isConflict = (status: number) => status === StatusCodes.CONFLICT;

export const isExpectationFailed = (status: number) => status === StatusCodes.EXPECTATION_FAILED;

export const isUnauthorized = (status: number) => status === StatusCodes.UNAUTHORIZED;

export const isForbidden = (status: number) => status === StatusCodes.FORBIDDEN;

export const isServiceUnavailable = (status: number) => status === StatusCodes.SERVICE_UNAVAILABLE;

export const isServerInteralError = (status: number) =>
  status === StatusCodes.INTERNAL_SERVER_ERROR;
