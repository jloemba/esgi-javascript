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

  var leetCode = {
    a : 4,
    e : 3,
    i : 1,
    o : 0,
    u : '(_)',
    y : 7
  }
  var translatedStr = "";

	for (i = 0; i < str.length; i++) {
		translatedStr += leetCode[str.charAt(i).toUpperCase()];
		}
	return translatedStr;
}

console.log(leet(string));
