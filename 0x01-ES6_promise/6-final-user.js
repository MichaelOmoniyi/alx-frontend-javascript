import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, fileName) {
  return new Promise((resolve) => {
    const signUpPromise = signUpUser(firstName, lastName);
    const uploadPhotoPromise = uploadPhoto(fileName);

    const results = Promise.allSettled([signUpPromise, uploadPhotoPromise]);
 
    resolve(
      results.map((result) => ({ status: result.status, value: result.value }))
    );
  }).catch((error) => Error());
}