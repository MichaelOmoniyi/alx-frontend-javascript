export default function getResponseFromAPI() {
<<<<<<< HEAD
    return new Promise((resolve, reject) => {
        resolve(true);
    });
=======
  const success = true;
  return new Promise((resolve, reject) => {
    if (success) {
      resolve();
    } else {
      reject();
    }
  });
>>>>>>> 0c04b82e711f55fbaf06eff3583792005937d60a
}
