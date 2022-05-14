export function unixTime(unixtime) {
	const u = new Date(unixtime*1000);
	const date= ('0'+ u.getDate()).slice(-2) +
		'/' + ('0' + u.getMonth()).slice(-2) +
		'/' + u.getFullYear()  ;
	
	let hours= u.getHours();
	let minutes= u.getMinutes();
	let seconds= u.getSeconds();
	
	const ampm = hours >= 12 ? 'PM' : 'AM';
	
	hours %= 12;
	hours = hours || 12;
	hours = hours < 10 ? `0${hours}` : hours;
	minutes = minutes < 10 ? `0${minutes}` : minutes;
	seconds = seconds < 10 ? `0${seconds}` : seconds;
	
	const time= `${hours}:${minutes}:${seconds} ${ampm}`
	return date + ", "+ time;
}
