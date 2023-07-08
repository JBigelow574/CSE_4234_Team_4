import { getAuth, signOut } from "firebase/auth";

function logOut() {
    const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
}
export default logOut