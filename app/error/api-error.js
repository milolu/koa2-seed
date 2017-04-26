import ApiErrorNames from './api-error-names.js';
/**
 * 自定义Api异常
 */
 
class ApiError extends Error {
  constructor(errorName) {
    super();
    let error = ApiErrorNames[errorName];
    if (!error) {
      error = ApiErrorNames.UNKNOW_ERROR;
    }
    this.name = errorName;
    this.code = error.code;
    this.msg = error.msg;
  }
}


export default ApiError;
