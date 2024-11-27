// delayImport.js
export const delayImport = (importFunction, delay = 2000) => {
    return () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(importFunction());
        }, delay);
      });
  };