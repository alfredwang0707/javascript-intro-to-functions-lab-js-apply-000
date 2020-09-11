function shout(string){
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
 console.log(string.toUpperCase())
}
function logWhisper(string){
console.log(string.toLowerCase())
}
/*sayHiToGrandma(string)
    5) returns "I can't hear you!" if `string` is lowercase
    6) returns "YES INDEED!" if `string` is uppercase
    7) returns "I love you, too." if `string` is "I love you, Grandma."`
    */
function sayHiToGrandma(string){
if (string == string.toLowerCase()){
  return "I can't hear you!";
} else if (string == string.toUpperCase()){
  return "YES INDEED!";
}else if (string == "I love you, Grandma."){
  return "I love you, too.";
}
  
}