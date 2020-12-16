class ApiError {
  statusCode: number;
  errors: Array<string>;

  constructor({
    statusCode,
    errors
  }: {
    statusCode: number,
    errors: Array<string>
  }) {
    this.statusCode = statusCode;
    this.errors = errors;
  }
}

export default ApiError;
