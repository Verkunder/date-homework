import dayjs from 'dayjs'

export function dateJs() {
	const a = dayjs()
	const b = a.clone()

	// или

	const c = dayjs()
	const d = dayjs(a)

	console.log(dayjs().get('month'))
}
