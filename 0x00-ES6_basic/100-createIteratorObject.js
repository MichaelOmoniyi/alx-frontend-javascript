export default function createIteratorObject(report) {
  let result = [];
  for (const value of Object.values(report.allEmployees)) {
    result = [...result, ...value];
  }

  return result;
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> 39dbd4bf1dddd285699a2436244f0c17fd537499
=======
}
>>>>>>> 0c04b82e711f55fbaf06eff3583792005937d60a
