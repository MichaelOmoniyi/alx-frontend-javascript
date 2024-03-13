export default function createIteratorObject(report) {
  let result = [];
  for (const value of Object.values(report.allEmployees)) {
    result = [...result, ...value];
  }

  return result;
<<<<<<< HEAD
}
=======
}
>>>>>>> 39dbd4bf1dddd285699a2436244f0c17fd537499
