function focusFirstFieldError(errors, setFocus) {
  const findFirstErrorPath = (value, parentPath = "") => {
    if (!value || typeof value !== "object") return null;
    const errorNode = value;
    const isLeafError = "type" in errorNode || "message" in errorNode || "ref" in errorNode;
    if (isLeafError && parentPath) return parentPath;
    for (const key of Object.keys(errorNode)) {
      const nextPath = parentPath ? `${parentPath}.${key}` : key;
      const foundPath = findFirstErrorPath(errorNode[key], nextPath);
      if (foundPath) return foundPath;
    }
    return null;
  };
  const firstErrorField = findFirstErrorPath(errors);
  if (!firstErrorField) return;
  void setFocus(firstErrorField);
}

export { focusFirstFieldError as f };
