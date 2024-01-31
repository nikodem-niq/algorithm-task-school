const letterToNumberMapped = {
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15
}

/**
 * 
 * @param {*} sign 
 * @returns number [10,11,12,13,14,15]
 */
const mapLetterToNumber = (sign) => {
    return letterToNumberMapped[sign];
}

/**
 * 
 * @param {*} number 
 * @returns char [A,B,C,D,E,F]
 */
const mapNumberToLetter = (number) => {
    const entries = Object.entries(letterToNumberMapped);
    const filtered = entries.filter(entry => entry[1] == number).flat()[0]
    return filtered;
}

/**
 * 
 * @param {*} baseSystem 
 * @param {*} desiredSystem 
 * @param {*} numberToConvert 
 * @returns convertedNumber
 */
export const convertNumber = (baseSystem, desiredSystem, numberToConvert) => {
    if(numberToConvert == 0) {
        return;
    }

    let convertedNumber = 0;
    if(parseInt(desiredSystem, 10) == 10) {
        const parsedNumber = numberToConvert.split('').reverse().join('');
        for(let i=0; i<parsedNumber.length; i++) {
            const val = isNaN(parsedNumber[i]) ? mapLetterToNumber(parsedNumber[i]) : parsedNumber[i];
            convertedNumber += val*(baseSystem**i);
        }
        return convertedNumber;
    }

    if(parseInt(baseSystem, 10) == 10) {
        const arrayNumber = [];
        let current = numberToConvert;
        while(current != 0) {
            const remainder = current % desiredSystem;
            remainder == 0 ? current = current / desiredSystem : current = ((current - remainder )/ desiredSystem);
            arrayNumber.push(remainder > 9 ? mapNumberToLetter(remainder) : remainder);
        }
        return arrayNumber.reverse().join('');
    }
}
