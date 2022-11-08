import app from "./firebaseConfig";
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, onValue, push } from "firebase/database";

// import { Password } from "@mui/icons-material";
const db = getDatabase(app);
const auth = getAuth(app)
const signupUser = (obj) => {
    const { email, password, userName } = obj
    return new Promise((resolve, reject) => {
        // console.log(email)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const reference = ref(db, `users/${user.uid}`)
                set(reference, obj)
                    .then(() => {
                        resolve("credentials submitted successfully")
                    })
                    .catch((errr) => {
                        reject(errr)
                    })
            })
            .catch((err) => {
                reject(err)
            })

    })
}
const signinUser = (obj) => {
    const { email, password } = obj;
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                const reference = ref(db, `users/${user.uid}`)
                onValue(reference, (data) => {
                    // console.log(data.val())
                    const userExist = data.exists();
                    if (userExist) {
                        resolve(data.val())
                    } else {
                        reject("error in sent details")
                    }
                })
            })
            .catch((errr) => {
                const errorCode = errr.code
                const errorMessage = errr.message
                reject(errorMessage)
            })
    })
}
const logout = () => {
    signOut(auth)
}

let sendData = (obj, nodeName, id) => {
    let postListRef;

    return new Promise((resolve, reject) => {
        if (id) {
            postListRef = ref(db, `${nodeName}/${id}`);
        } else {
            let addRef = ref(db, nodeName);
            obj.id = push(addRef).key;
            postListRef = ref(db, `${nodeName}/${obj.id}`);
        }
        set(postListRef, obj)
            .then(() => {
                resolve(`Data Send Successfully with this node ${nodeName}/${obj.id}`);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

let getData = (nodeName, id) => {
    let reference = ref(db, `${nodeName}/${id ? id : ""}`);
    return new Promise((resolve, reject) => {
        onValue(
            reference,
            (snapshot) => {
                if (snapshot.exists()) {
                    let data = snapshot.val();
                    if (id) {
                        resolve(data);
                    } else {
                        let arr = Object.values(data);
                        resolve(arr);
                    }
                } else {
                    // no data found
                    reject("No Data Found");
                }
            },
            {
                onlyOnce: false,
            }
        );
    });
};

export { signupUser, signinUser, logout, sendData, getData };