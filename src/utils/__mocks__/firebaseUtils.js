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

class DataSnapshot {    
    constructor(id, name, slug, description, image) {
        this.key = id;
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.description = description;
        this.image = image;
    }    

    val() {
        return this;
    }
}

const Reference = {
    on(eventType, callbackFunction) {        
        if(eventType == "value") {
            callbackFunction([
                new DataSnapshot(1, "category 1", "category-1", "description 1", "image1"),
                new DataSnapshot(2, "category 2", "category-2", "description 2", "image2")
            ]);
        }
    }
}

const Database = {
    ref(path) {
        if (path == "categories") {
            return Reference;
        }
    }
}

const firebaseApp = {
    auth() {
        return firebaseAuth;
    },
    database() {
        return Database;
    }
}

export default firebaseApp;