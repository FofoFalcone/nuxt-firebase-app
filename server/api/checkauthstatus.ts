import useFirebaseServer from "~/composables/useFirebaseServer";
import { getAuth } from "firebase-admin/auth";
// import { setCookie } from "h3";

export default defineEventHandler(async event => {
  const { app } = useFirebaseServer();
  const { sessionCookie } = await readBody(event);
  try {
    const claim = getAuth().verifySessionCookie(sessionCookie);

    return {statusCode: 200, claim: claim};
  } catch(error) {
    console.error("Error:", error);
    return {statusCode: 401, error: "UNAUTHORIZED_REQUEST"}
  }
})