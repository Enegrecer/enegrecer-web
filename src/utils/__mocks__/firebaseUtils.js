const firebaseAuth = {
    signInWithEmailAndPassword(email, password) {
        return new Promise((resolve, reject) => {
            process.nextTick(() => {
                if (email == 'pass') {
                    resolve();
                }

                if (email == 'error') {
                    if (password == 'wrongPassord') {
                        reject({});
                    } else if (password == 'userNotFound') {
                        reject({});
                    } else if (password == 'userDisabled') {
                        reject({});
                    } else if (password == 'invalidEmail') {
                        reject({});
                    }
                }
            });
        });
    }
}

const firebaseApp = {
    auth() {
        return firebaseAuth;
    }
}

export default firebaseApp;