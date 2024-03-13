export default function signUpUser(firstName, lastName) {
  const user = {
    firstName,
    lastName,
  };

  return new Promise((resolve, reject) => {
    if (user) {
      resolve(user);
    } else {
      reject(Error());
    }
  });
}
