function getTimeInString(seconds) {
  const sec = seconds % 60;
  const min = Math.floor(seconds / 60) % 60;
  const hr = Math.floor(seconds / (60 * 60));
  return `${hr > 9 ? hr : "0" + hr} : ${min > 9 ? min : "0" + min}:${
    sec > 9 ? sec : "0" + sec
  }`;
}
export { getTimeInString };
