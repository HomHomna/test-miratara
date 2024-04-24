export const getErrorWithLocalKey = (formContext: any, name: string, error: any) => {
  if (error) {
    return error;
  }

  return formContext?.errors?.[name] || null;
};

