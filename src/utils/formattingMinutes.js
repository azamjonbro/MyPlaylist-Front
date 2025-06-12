function FormattingMinuts (secondsInput){
 console.log(secondsInput);
 
 let totalSeconds = Math.floor(secondsInput);
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  const pad = (num) => String(num).padStart(2, '0');

  return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);

}

export default FormattingMinuts