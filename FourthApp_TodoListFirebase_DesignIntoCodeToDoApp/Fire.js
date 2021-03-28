import firebase from 'firebase'
import "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAWg6ia3ysSIq3DyQbqQaVsbkfY1hlZDcY",
    authDomain: "yttodoapp-e8e33.firebaseapp.com",
    projectId: "yttodoapp-e8e33",
    storageBucket: "yttodoapp-e8e33.appspot.com",
    messagingSenderId: "233768979699",
    appId: "1:233768979699:web:77891ac7e795fa66c5bb86"
}


class Fire {

    constructor(callback) {
        this.init(callback)
    }

    init(callback) {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                callback(null, user);
            } else {
                firebase.auth().signInAnonymously().catch(error => { callback(error); });
            }
        })

    }

    getLists(callback) {
        let ref = this.ref.orderBy("name");

        this.unsubscribe = ref.onSnapshot(snapshot => {
            lists = []

            snapshot.forEach(doc => {
                lists.push({ id: doc.id, ...doc.data() })
            })

            callback(lists)

        })
    }

    addList(list) {
        let ref = this.ref
        ref.add(list);
    }

    updateList(list) {
        let ref = this.ref;
        ref.doc(list.id).update(list);
    }

    get userId() {
        return firebase.auth().currentUser.uid;
    }

    get ref() {
        return firebase.firestore().collection("users").doc(this.userId).collection("lists");
    }

    detach() {
        this.unsubscribe();
    }
}

export default Fire;