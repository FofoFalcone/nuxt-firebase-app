import { doc, getDoc } from "firebase/firestore";
import useFirebaseClient from "~/composables/useFirebaseClient";

const { firestore } = useFirebaseClient();

export default defineEventHandler(async event => { 
    const agent = event.context.params?.agent;
    const ref = doc(firestore, `agents/${agent}`);
    const snapshot = await getDoc(ref);
    const data = snapshot.data();
    return data;
});
