import { doc, getDoc } from "firebase/firestore";
import useFirebaseClient from "~/composables/useFirebaseClient";

const { firestore } = useFirebaseClient();

export default defineEventHandler(async event => { 
    const sale = event.context.params?.sale;
    const ref = doc(firestore, `sales/${sale}`);
    const snapshot = await getDoc(ref);
    const data = snapshot.data();
    return data;
});
