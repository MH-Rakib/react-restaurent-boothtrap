import firebaseConfig from "./Firebase.config";
import firebase from "firebase/app";
import "firebase/auth";

// Initialize Firebase
export const initialisezFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
};

export const loginUser = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      // console.log(res);
      const user = {
        isSigned: true,
        name: res.user.displayName,
        email: res.user.email,
        password: password,
        message: "User Logged In Successfully",
      };
      return user;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      const user = {
        isSigned: false,
        name: "",
        email: "",
        password: "",
        message: errorMessage,
      };
      return user;
    });
};

export const createUser = (name, email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      // Signed in
      const user = {
        isSigned: true,
        name: name,
        email: email,
        password: password,
        message: "User Created Successfully",
      };
      updateUsername(name);
      return user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      const user = {
        isSigned: false,
        name: "",
        email: "",
        password: "",
        message: errorMessage,
      };
      return user;
      // ..
    });
};

export const signout = () => {
  return firebase
    .auth()
    .signOut()
    .then(() => {
      const user = {
        isSigned: false,
        name: "",
        email: "",
        password: "",
        message: "Sign out Successfully",
      };
      return user;
    })
    .catch((error) => {
      // An error happened.
    });
};

const updateUsername = (name) => {
  const user = firebase.auth().currentUser;

  user
    .updateProfile({
      displayName: name,
    })
    .then(() => {
      console.log("username Updated");
    })
    .catch((error) => {
      console.log(error.message);
    });
};
