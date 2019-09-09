export function timestampToDatetime(time) {
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  const date = new Date(time * 1000);
  // Hours part from the timestamp
  const hours = date.getHours();
  // Minutes part from the timestamp
  const minutes = '0' + date.getMinutes();

  // Will display time in 10:30:23 format
  const formattedTime = hours + ':' + minutes.substr(-2);
  return formattedTime;
}
