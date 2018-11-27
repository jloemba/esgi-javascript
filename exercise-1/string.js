var string = "je fais du javascript";

//ucfirst
function ucfirst(param) {
  //substring( rang de la lettre du début , rang de la dernière lettre )

    if(param != null){
      if(typeof param == "string") return param.charAt(0).toUpperCase()+param.substring(1,param.length);
      else return "";
    }
    else return "";
}
console.log("----- UC FIRST -----");
console.log(ucfirst(string));


//capitalize
function capitalize(param){
  //Découper lorsqu'il y a un espace
  splitString = param.split(" ");
  console.log(splitString);
  i=1;concatString="";
  concatString += ucfirst(splitString[0]);
  while (i<splitString.length) {//Recoller les string en mettant la première lettre en MAJ
      concatString += ucfirst(" "+splitString[i]);
      i++;
  }
  return concatString;
}

console.log("------ Capitalize -----");
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

console.log("------ CamelCase -----");
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
    else if (str[i].toLowerCase() === "a") { strLeet += "4"; }
    else if (str[i].toLowerCase() === "e") { strLeet += "3"; }
    else if (str[i].toLowerCase() === "i") { strLeet += "1"; }
    else if (str[i].toLowerCase() === "o") { strLeet += "0"; }
    else if (str[i].toLowerCase() === "u") { strLeet += "(_)"; }
    else if (str[i].toLowerCase() === "y") { strLeet += "7"; }
    else { strLeet += str[i].toLowerCase(); }
  }
  return strLeet;
}
console.log(leet(string));


//reverseString
function verlan(str){
    return str.split("").reverse().join("");
}
console.log(verlan(string));


//prop_access
function prop_access(instance,prop) {

  obj = instance.concat(prop);
  if(instance === null) return instance;
  if(prop === null) return instance;

}


//yoda
function yoda(str) {
  tag=0;i=0;array=[];
  while(i <str.length){  //distinguer les mots dans une chaîne
    if(str[i] === ' '){ //
         strItem = str.substring(tag,i);
         array.push(strItem);
         tag = i+1;
    }
    i++;
  }
  if(i===str.length){
    strItem = str.substring(tag,i);
    array.push(strItem);
  }

  return array.reverse().join(" ");
}
console.log(yoda(string));
