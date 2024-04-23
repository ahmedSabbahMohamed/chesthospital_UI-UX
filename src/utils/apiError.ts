const getErrorWithResponse = (error: any) => {
  return error as Error & { response?: Response & { data?: any } };
};

export {getErrorWithResponse}
