import { convertNumber } from "./converter.js";
import { checkArgs } from "./helpers.js";

const SPECIFY_ARGS_LOCALE = "============================================\nNote: Aplikacja obsługuje następujące systemy: binarny, oktalny, dziesiętny, heksadecymalny \n============================================\n \n Program wymaga podania minimum 3 argumentów, w następującej kolejności: \n 1. Bazowy system liczbowy (z którego konwertujemy) \n 2. System na który chcemy przekonwertować liczbę. \n 3. Liczba w podanym bazowym formacie. \n Przykładowe wywołanie programu: node app.js 10 2 1223"
const WRONG_ARGS_LOCALE = "Podaj poprawne dane wejściowe!"

const runApp = () => {
    const args = process.argv.slice(2)
    if(args.length < 3) {
        console.log(SPECIFY_ARGS_LOCALE);
        return;
    }

    const baseSytem = parseInt(args[0])
    const desiredSystem = parseInt(args[1])
    const numberToConvertAsString = args[2].toString()

    if(!checkArgs(baseSytem, desiredSystem, numberToConvertAsString)) {
        console.log(WRONG_ARGS_LOCALE)
        return false;
    }

    const convertedNumber = convertNumber(baseSytem, desiredSystem, numberToConvertAsString)
    console.log(convertedNumber)

}

runApp();