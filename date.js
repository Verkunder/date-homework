import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import objectSupport from 'dayjs/plugin/objectSupport'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ru'
import duration from 'dayjs/plugin/duration'
import toObject from 'dayjs/plugin/toObject'

dayjs.locale('ru')

export function dateJs() {
	// отчет месяцев идет с 0

	const a = dayjs()
	const b = a.clone()

	// или

	const c = dayjs()
	const d = dayjs(a)

	return `Текущий месяц ${dayjs().get('month')} отсчет месяцев идет с 0`
}

export const rangeDate = () => {
	dayjs.extend(isBetween)
	const arrayDateRequest = ['08.12.2020', '01.12.2020', '10.12.2021']
	let text = []
	arrayDateRequest.map(item => {
		const currentDate = dayjs(item).format('YYYY-DD-MM')
		if (
			!dayjs(currentDate).isBetween(
				dayjs('2020-12-07'),
				dayjs('2020-12-13')
			)
		) {
			text.push(`<div> ${item} Можно поставить задачу`)
		}
	})
	return text.join()
}

export const programmersDay = () => {
	dayjs.extend(duration)
	dayjs.extend(relativeTime)
	dayjs.extend(objectSupport)
	const date = dayjs({ month: 9, days: 12 })
	const programmersDay = dayjs({ month: 8, days: 12 })

	return `<div>День программиста (12 сентября) был ${date.diff(
		programmersDay,
		'weeks'
	)} недель и ${date.diff(programmersDay, 'day')} дней назад, это был ${dayjs(
		programmersDay
	).day()} день недели. Следующий день программиста будет через ${dayjs({
		month: 8,
		days: 12,
		year: dayjs().year() + 1,
	}).diff(date, 'weeks')} недель и ${dayjs({
		month: 8,
		days: 12,
		year: dayjs().year() + 1,
	}).diff(date, 'day')} дней. </div>`
}

export const dateToFormat = () => {
	return dayjs('2016-05-25T09:24:15.123').format('DD.MM.YYYY, dddd h ч m мин')
}

export const dateToObject = () => {
	dayjs.extend(duration)
	dayjs.extend(toObject)
	const date = dayjs.duration('P3Y6M1W4DT12H30M5S')
	return JSON.stringify(date.$d)
}
