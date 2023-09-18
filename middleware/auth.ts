export default defineNuxtRouteMiddleware(async (to, from) => {
	if (process.server) {
		console.log(process.server);
		
		const cookie = useCookie("session");
    console.log(cookie.value);
		const response = await fetch("/api/checkauthstatus", {
			method: "POST",
			body: JSON.stringify({ sessionCookie: cookie.value }),
		});

		const data = await response.json();

		if (data.statusCode !== 200) {
			console.error("data", data);
			return navigateTo("/");
		}
		console.log("data", data);
	}
});
