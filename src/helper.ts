// Utility function for deep cloning the state
export function deepClone<T>(obj: T): T {
  // If it's a primitive value (string, number, boolean, etc.), return it directly
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // If it's an array, we need to clone each item
  if (Array.isArray(obj)) {
    const arrCopy = [] as T[]; // Create an empty array of type T[]
    obj.forEach((item, index) => {
      arrCopy[index] = deepClone(item); // Recursively clone array elements
    });
    return arrCopy as T; // Ensure the return type is still T
  }

  // If it's an object, recursively clone each property
  const objCopy = {} as Record<string, unknown>; // Create an empty object to hold the cloned properties
  Object.keys(obj).forEach((key) => {
    objCopy[key] = deepClone((obj as Record<string, unknown>)[key]); // Recursively clone object properties
  });

  return objCopy as T; // Ensure the return type is still T
}
