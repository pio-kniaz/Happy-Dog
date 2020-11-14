class ApiError extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }

  static badRequest(message) {
    return new ApiError(400, message);
  }

  static internal(message) {
    return new ApiError(500, message);
  }

  static unAuthorized(message) {
    return new ApiError(401, message);
  }

  static forbidden() {
    return new ApiError(403, 'Access denied');
  }
}

module.exports = ApiError;
