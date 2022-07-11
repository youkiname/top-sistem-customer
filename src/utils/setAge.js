export const setAge = (val) => {
	let age
	switch (+val) {
		case 14 <= val < 18:
			age = 14
			break
		case 18 <= val < 25:
			age = 18
			break
		case 25 <= val < 35:
			age = 25
			break
		case 35 <= val < 45:
			age = 35
			break
		case 45 <= val < 55:
			age = 45
			break
		case 55 <= val < 65:
			age = 55
			break
		case 65 <= val < 75:
			age = 65
			break
		case 75 <= val < 85:
			age = 75
			break
		default:
			age = 18
			return age
	}
}
