const firebaseAuth = {
    signInWithEmailAndPassword(email, password) {
        return new Promise((resolve, reject) => {
            process.nextTick(() => {
                if (email == 'pass') {
                    resolve();
                }

                if (email == 'error') {
                    if (password == 'wrongPassword') {
                        reject({code: 'auth/wrong-password', message: 'Senha errada'});
                    } else if (password == 'userNotFound') {
                        reject({code: 'auth/user-no-found', message: 'Usuário não encontrado'});
                    } else if (password == 'userDisabled') {
                        reject({code: 'auth/user-disabled', message: 'Usuário inativo'});
                    } else if (password == 'invalidEmail') {
                        reject({code: 'auth/invalid-email', message: 'Email inválido'});
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