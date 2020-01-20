import {firebaseDatabase, firebaseImpl} from '../util/firebaseUtils'

export default class FirebaseService {
    static getDataList = (nodePath, callback, size = 10) => {

        let query = firebaseDatabase.ref(nodePath)
            .limitToLast(size);
        query.on('value', dataSnapshot => {
            let items = [];
            dataSnapshot.forEach(childSnapshot => {
                let item = childSnapshot.val();
                item['key'] = childSnapshot.key;
                items.push(item);
            });
            callback(items);
        });

        return query;
    };

    static pushData = (node, objToSubmit) => {
        const ref = firebaseDatabase.ref(node).push();
        const id = firebaseDatabase.ref(node).push().key;
        ref.set(objToSubmit);
        return id;
    };

    // static register = (email, password) => {
    //     firebaseImpl.auth().createUserWithEmailAndPassword(email, password)
    //         .then(
    //             alert("deu certo")
    //         )
    //         .catch(function (error) {
    //             console.log(error)
    //         });
    // };

    // static login = (email, password) => {
    //     firebaseImpl.auth().signInWithEmailAndPassword(email, password)
    //         .then(
    //             firebaseImpl.auth().currentUser.getIdToken().then(function(idToken) {
    //                 localStorage.setItem("key", idToken);
    //             }).catch(function(error) {
    //                 console.log(error)
    //             })
    //         )
    //         .catch(function (error) {
    //             console.log(error)
    //         });
    // };

    static getNome = () => {
        const user = firebaseImpl.auth().currentUser;
        const email = user.email;
        alert(email)
    };

    static logout = () => {
        firebaseImpl.auth().signOut();
    }
}