//utility functions
import Cookies from 'js-cookie'
import { storageFactory } from "storage-factory";
const local = storageFactory(() => localStorage);


//set up a UUID as a bookings key in local storage so guest users can edit previous bookings done in their browser.
//if we have one in the URL, use that instead and discard the browser one...

const regex =/guestUUId\/[0-9]*\/([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})/i


let guestUUID = '';
const result = window.location.href.match(regex);

if(result) {
	local.setItem('guestUUID', result[1]);
	guestUUID = result[1];//@ts-ignore
} else if (local.getItem('guestUUID')) guestUUID = local.getItem('guestUUID');
else{
	guestUUID = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
	local.setItem('guestUUID', guestUUID)
}

Cookies.set("guestUUID", guestUUID);

export { guestUUID };