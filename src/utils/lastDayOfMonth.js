import dayjs from 'dayjs'

export const lastDayOfMonth = () => {
	const date = new Date()
	const lastDayDate = new Date(date.getFullYear(), date.getMonth() + 1, 0)
	return dayjs(lastDayDate).format('DD.MM')
}