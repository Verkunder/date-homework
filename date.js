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
	dayjs.extend(objectSupport)

	const today = dayjs()
    const date = dayjs({month: 8, day: 12, year: 2022});
    const diff = today.diff(date, 'day');
    const weeksAgo = Math.floor(diff / 7);
    const daysAgo = diff % 7;

	const weeksAgoDiff = date.set('year', 2023).diff(today, 'day');
	const weeksAgoNext = Math.floor(weeksAgoDiff / 7);
	const daysAgoNext = weeksAgoDiff % 7 +1;

    return `<div>День программиста (12 сентября) был ${weeksAgo} недель и ${daysAgo} дней назад, это был ${date.locale('ru').format('dddd')}.
 			Следующий день программиста будет через ${weeksAgoNext} недель и ${daysAgoNext} дней. </div>`
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
