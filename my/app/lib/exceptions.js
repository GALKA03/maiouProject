export class ExistRequiredError extends Error {
  constructor(message = 'Page is required to access') {
    super(message);
    this.name = 'ExistRequiredError';
  }
}
