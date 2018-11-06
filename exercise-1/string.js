var string = "hello word";

//ucfirst
function ucfirst(param) {
  //substring( rang de la lettre du début , rang de la dernière lettre )
  return param.charAt(0).toUpperCase()+param.substring(1,param.length).toLowerCase();
}
console.log(ucfirst(string));


//capitalize
function capitalize(param){
  //Découper lorsqu'il y a un espace
  splitString = param.split(" ");
  i=0;concatString="";
  while (i<splitString.length) {//Recoller les string en mettant la première lettre en MAJ
      concatString += ucfirst(splitString[i])+" ";i++;
  }
  return concatString;
}

console.log(capitalize(string));

//camelCase
function camelCase(param){
  //Découper lorsqu'il y a un espace
  splitString = param.split(" ");
  i=0;concatString="";
  while (i<splitString.length) {//Recoller les string en mettant la première lettre en MAJ
      concatString += ucfirst(splitString[i]);
      i++;
  }
  return concatString;
}

console.log(camelCase(string));

//snake_case
function snake_case(param) {
  return param.split(" ").join('_');
}

console.log(snake_case(string));



//leet
function leet (str){
  strLeet = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "l") { strLeet += "1"; }
    else if (str[i].toLowerCase() === "e") { strLeet += "3"; }
    else if (str[i].toLowerCase() === "a") { strLeet += "4"; }
    else if (str[i].toLowerCase() === "t") { strLeet += "7"; }
    else if (str[i].toLowerCase() === "s") { strLeet += "5"; }
    else if (str[i].toLowerCase() === "o") { strLeet += "0"; }
    else { strLeet += str[i].toLowerCase(); }
  }
  return strLeet;
}

console.log(leet(string));
