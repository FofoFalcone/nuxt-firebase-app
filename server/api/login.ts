import useFirebaseServer from "~/composables/useFirebaseServer";
import { getAuth } from "firebase-admin/auth";

export default defineEventHandler(async event => {
  const { app } = useFirebaseServer();
  const { idToken } = await readBody(event);
  const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 giorni
  try {
    const sessionCookie = await getAuth().createSessionCookie(idToken, { expiresIn })
    const options = { maxAge: expiresIn, httpOnly: true, secure: true, sameSite: false }
    setCookie(event, 'session', sessionCookie, options);
    return {statusCode: 200, body: JSON.stringify({ status: 'success' })};
  } catch(error) {
    console.error("Error:", error);
    return {statusCode: 401, error: "UNAUTHORIZED_REQUEST"}
  }
})