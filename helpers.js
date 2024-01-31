/**
* 
* @param {*} baseSystem 
* @param {*} desiredSystem 
* @param {*} numberToConvertAsString 
* @returns true if everything is okay and false otherwise
*/

export const checkArgs = (baseSystem, desiredSystem, numberToConvertAsString) => {
   const availableSystems = [2,8,10,16];
   const availableLetters = ["A","B","C","D","E","F"];
   if(availableSystems.includes(baseSystem) && availableSystems.includes(desiredSystem) && !isNaN(numberToConvertAsString)) {
    return true;
   }
   if((availableSystems.includes(baseSystem) || availableSystems.includes(desiredSystem)) && numberToConvertAsString.split('').some(el => availableLetters.includes(el))) {
    return true;
   }
   return false;
}