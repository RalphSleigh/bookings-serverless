
export const SET_SUCCESS_MESSAGE = 'MESSAGE_SET_SUCCESS_MESSAGE'

export const setSuccess = (message) => {
	return {
		type: SET_SUCCESS_MESSAGE,
		message: message
	}
}

export const SET_WARNING_MESSAGE = 'MESSAGE_SET_WARNING_MESSAGE'

export const setWarning = (message) => {
	return {
		type: SET_WARNING_MESSAGE,
		message: message
	}
}