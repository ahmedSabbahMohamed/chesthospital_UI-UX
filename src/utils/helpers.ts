const logout = () => {
  localStorage.clear();
  window.location.pathname = "/";
};

function appendFormData(formData: FormData, key: string, value: any): void {
  if (value instanceof File) {
    formData.append(key, value);
  } else if (value instanceof Date) {
    formData.append(key, value.toISOString());
  } else if (typeof value === "boolean") {
    formData.append(key, value ? "true" : "false");
  } else {
    formData.append(key, value.toString());
  }
}

function convertToFormData(
  obj: Record<string, any>,
  formData: FormData = new FormData(),
  parentKey: string = ""
): FormData {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      const propName = parentKey ? `${parentKey}[${key}]` : key;
      if (value === null || value === undefined) {
        formData.append(propName, "");
      } else if (
        typeof value === "object" &&
        !(value instanceof File) &&
        !(value instanceof Date)
      ) {
        convertToFormData(value, formData, propName);
      } else if (Array.isArray(value)) {
        value.forEach((item, index) => {
          const arrayKey = `${propName}[${index}]`;
          appendFormData(formData, arrayKey, item);
        });
      } else {
        appendFormData(formData, propName, value);
      }
    }
  }
  return formData;
}

export { logout, convertToFormData };
