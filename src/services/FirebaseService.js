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

    static register = (email, password) => {
        firebaseImpl.auth().createUserWithEmailAndPassword(email, password)
            .catch(function (error) {
                console.log(error)
            });
    };

    static login = (email, password) => {
        firebaseImpl.auth().signInWithEmailAndPassword(email, password)
            .catch(function (error) {
                console.log(error)
            });
    };

    static getNome = () => {
        const email = firebaseImpl.auth().currentUser;

    }
}