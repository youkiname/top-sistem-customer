import axios from 'axios'

// Create axios instance with base url and credentials support
export const axiosInstance = axios.create({
	// baseURL: "https://top-sistem.ru/api/",
	baseURL: "http://127.0.0.1:8000/api/",
	withCredentials: true,
	credentials: true,
	headers: {
		common: {
			Accept: 'application/json',
		}
	}
});

// Request interceptor. Runs before your request reaches the server
const onRequest = (config) => {
	config.params = config.params || {};
	config.params['token'] = localStorage.getItem('token');
	return config;
}
axiosInstance.interceptors.request.use(onRequest, null);

const onResponse = (data) => {
	if (data?.status < 299) {
		return data
	} else {
		return Promise.reject(`Error: ${data}`)
	}
}

class Api {
	instance = axiosInstance

	getAuth(email, password) {
		return this.instance
			.get(`customer/auth?email=${email}&password=${password}`)
			.then(onResponse)
	}

	getMe() {
		return this.instance
			.get(`get_me/`)
			.then(onResponse)
	}

	getShoppingCenters() {
		return this.instance.get(`customer/shopping_centers`).then(onResponse)
	}

	register(email, password, birth, sex, lastName, firstName, phone) {
		return this.instance
			.post(
				`register?email=${email}&password=${password}&first_name=${firstName}&last_name=${lastName}&gender=${sex}&mobile=${phone}&birth_date=${birth}&is_seller=0`
			)
			.then(onResponse)
	}

	getUserByCardNumber(number) {
		return this.instance
			.get(`customer/users/by_card_number?card_number=${number}`)
			.then(onResponse)
	}

	postBonusTransaction(number, bonus, mode) {
		return this.instance.post(
			`customer/cards/update_bonuses?card_number=${number}&offset=${mode + bonus
			}`
		)
	}

	getAdsImages() {
		return this.instance.get(`customer/banners`).then(onResponse)
	}

	updateProfile(id, firstName, lastName, phone) {
		return this.instance
			.put(
				`customer/update_profile?id=${id}&first_name=${firstName}&last_name=${lastName}&mobile=${phone}`
			)
			.then(onResponse)
	}

	postVerifiedEmail(email, code) {
		return this.instance
			.post(`users/verify_email?email=${email}&code=${code}`)
			.then(onResponse)
	}

	getPollsList() {
		return this.instance
			.get(`customer/polls/shopping_centers`)
			.then(onResponse)
	}

	getPollBySCId(id) {
		return this.instance
			.get(`customer/polls?shopping_center_id=${id}`)
			.then(onResponse)
	}

	getPollByUser(pollId, userId) {
		return this.instance
			.get(`customer/polls/${pollId}?user_id=${userId}`)
			.then(onResponse)
	}

	setPollChoice(userId, pollId, choiceId) {
		return this.instance
			.post(
				`customer/polls/make_choice?user_id=${userId}&poll_id=${pollId}&choice_id=${choiceId}`
			)
			.then(onResponse)
	}

	updateBalanceDueToChoice(centerId) {
		return this.instance
			.get(`get_card/?shopping_center_id=${centerId}`)
			.then(onResponse)
	}

	saveVisitor(centerId) {
		return this.instance
			.post(`customer/statistic/visitors`, {
				shopping_center_id: centerId
			})
			.then(onResponse)
	}

	sendEmailToResetPassword(email) {
		return this.instance
			.post(`users/reset_password?email=${email}`)
			.then(onResponse)
	}

	checkResetPasswordCode(email, code) {
		return this.instance
			.get(
				`users/verify_password_reset?email=${email}&code=${code}`
			)
			.then(onResponse)
	}

	setNewPassword(email, code, newPassword) {
		return this.instance
			.post(
				`users/update_password?email=${email}&code=${code}&new_password=${newPassword}`
			)
			.then(onResponse)
	}
}

const api = new Api()

export default api