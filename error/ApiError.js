class ApiError extends Error {
  constructor(message, status) {
    super();
    this.status = status;
    this.message = message;
  }

  static badRequest(message) {
    return new ApiError(message, 404);
  }

  static serverError(message) {
    return new ApiError(message, 500);
  }
}

module.exports = ApiError;
