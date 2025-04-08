function bmsCalculator() {
  let height = 174;
  let weight = 60;

  let result =  weight /(height * height) ;
  if (result < 18.5) {
    console.log("Under weight");
  } else if (result > 18.5 && result < 25) {
    console.log("Normal Weight");
  } else if (result > 25 && result > 30) {
    console.log("Over Weight");
  } else {
    console.log("Obesse");
  }
}
bmsCalculator();
