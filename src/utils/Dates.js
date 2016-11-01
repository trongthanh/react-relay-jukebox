export function today() {
	const d = new Date();
	d.setHours(0, 0, 0, 0);
	return d;
}

export function yesterday() {
	const d = new Date();
	d.setHours(-24, 0, 0, 0);
	return d;
}

export function lastWeek() {
	const d = new Date();
	const daysToLastWeek = d.getDate() - d.getDay() - 6;
	const last = new Date();
	last.setDate(daysToLastWeek);
	last.setHours(0, 0, 0, 0);
	return last;
}

export function thisWeek() {
	const d = new Date();
	const daysToThisWeek = d.getDate() - d.getDay();
	const last = new Date();
	last.setDate(daysToThisWeek);
	last.setHours(0, 0, 0, 0);
	return last;
}

export default {
	today,
	yesterday,
	lastWeek,
	thisWeek,
};
