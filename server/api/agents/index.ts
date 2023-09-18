import useFirebaseClient from "~/composables/useFirebaseClient";
import { collection, getDocs } from "firebase/firestore";

const { firestore } = useFirebaseClient();

export default defineEventHandler(async event => {   
    const ref = collection(firestore, 'agents');
    const snapshot = await getDocs(ref);

    const data: Object[] = [];
    snapshot.forEach(doc => {
        data.push({ id: doc.id, ...doc.data() });
    });

    return data;
});