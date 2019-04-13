export const formatSecondsToMinutesAndSeconds = (time: number) => {
  let minutes = `${~~(time / 60)}`;
  let seconds = `${time % 60}`;

  minutes = minutes.padStart(2, '0');
  seconds = seconds.padStart(2, '0');

  return `${minutes}:${seconds}`;
}