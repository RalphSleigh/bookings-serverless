//Long Story, could use some fixing,  we should actually do XSFR sometimes

import * as Cookies from 'js-cookie'

export default function rfetch(url, method, data?) {

	var options = {
		method: method,
		headers: {
			"Content-type": "application/json; charset=UTF-8"
		},
		credentials: "same-origin",
	};

	if (method === "POST") {
		options.headers["X-XSRF-TOKEN"] = Cookies.get("XSRF-TOKEN");
	}
	if (typeof (data) !== "undefined") { // @ts-ignore
		options.body = JSON.stringify(data);
	}

	// @ts-ignore
	return fetch(url, options).then(handleErrors)
}

rfetch.fail = (error) => console.log('fail', error)

function handleErrors(response) {
	if (response.status == 401) {
		// @ts-ignore
		dispatch({ type: "MESSAGE_SET_WARNING_MESSAGE", message: "401 Unauthorised on " + response.url });
		throw Error("401 Unauthorised on " + response.url);
	} else if (!response.ok) {
		// @ts-ignore
		dispatch({ type: "MESSAGE_SET_WARNING_MESSAGE", message: "Error " + response.status + "" + response.url });
		throw Error("Error " + response.status + "" + response.url);
	} else return response.json()
}