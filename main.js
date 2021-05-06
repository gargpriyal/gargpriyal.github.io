function translateInput() {
    const input = document.getElementById("input").value;

    let output;

    const cipher = document.getElementById("ciphers").value;
    const translation = document.querySelector('input[type=radio][name=translation]:checked').value;
    let key = document.getElementById("key").value;

    switch(cipher) {
        case "morse":
            document.getElementById("explanation").innerHTML = "Morse code, invented by Samuel Morse, encodes text characters into two different signal durations called dots or dashes. Standard morse code includes 26 letters (there is no distinction between lower and uppercase letters), Arabic numerals and some punctuation. The morse code implemented includes 26 letters, 10 numerals, the period, the comma, the apostrophe, the question mark, the exclamation mark, and the space.";
            document.getElementById("explanation").innerHTML += "<br/>"
            document.getElementById("explanation").innerHTML += "<br/>Fun fact: Morse code is used in Poptropica's Shrink-Ray Island :)";
            document.querySelectorAll(".keyClass").forEach(element => {
                element.style.display = "none";
            });
            document.querySelectorAll(".translation").forEach(element => {
                element.style.display = "inline";
            });
            output = morse(input, translation);
            break;
        case "hill":
            document.getElementById("explanation").innerHTML = "Hill cipher, invented by Lester S. Hill, is a polygraphic substitution cipher. This means that plaintext letters are encrypted in larger groups rather than individually. This type of polygraphic substitution cipher involves using linear algebra. The hill cipher implemented inclues 26 letters, the space, the period, the comma, the question mark, the exclamation mark, and the apostrophe.";
            document.getElementById("explanation").innerHTML += "<br/> How to use it: Provide a 4 number key. Some will be invalid keys because they must be coprime with 32 (number of characters in this hill cipher). General rule of thumb - you should always 2-3 odd numbers in the key.";
            document.querySelectorAll(".keyClass").forEach(element => {
                element.style.display = "inline";
            });
            document.querySelectorAll(".translation").forEach(element => {
                element.style.display = "inline";
            });
            output = hill(input, translation, key);
            break;
        case "foursquare":
            document.getElementById("explanation").innerHTML = "This four-square cipher utilizes four 6 by 6 matrices arranged in a square. Each of the matrices contains all 26 letters and all 10 Arabic numerals. The upper-left and lower-right matrices contain the standard letters/numerals. The other two each hold a combination of 36 letters/numerals, where each letter/numeral must appear once.";
            document.getElementById("explanation").innerHTML += "<br/> How to use it: Provide two of these letter/numeral combinations as the key.";
            document.querySelectorAll(".keyClass").forEach(element => {
                element.style.display = "inline";
            });
            document.querySelectorAll(".translation").forEach(element => {
                element.style.display = "inline";
            });
            output = foursquare(input, translation, key);
            break;
        case "caesar":
            document.getElementById("explanation").innerHTML = "Caesar is a cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. The key should be the fixed number of positions.";
            document.getElementById("explanation").innerHTML += "<br/>"
            document.getElementById("explanation").innerHTML += "<br/>Fun fact: Caesar cipher is used in Poptropica's Spy Island!";
            
            document.querySelectorAll(".keyClass").forEach(element => {
                element.style.display = "inline";
            });
            document.querySelectorAll(".translation").forEach(element => {
                element.style.display = "inline";
            });
            output = caesar(input, translation, key);
            break;
        case "piglatin":
            document.getElementById("explanation").innerHTML = "Pig latin is a \"secret language\" formed by transferring the initial letter of each word to the end of the word and adding \"-ay\" to the end.";
            document.querySelectorAll(".keyClass").forEach(element => {
                element.style.display = "none";
            });
            document.querySelectorAll(".translation").forEach(element => {
                element.style.display = "inline";
            });
            output = piglatin(input, translation);
            break;
        case "playfair":
            document.getElementById("explanation").innerHTML = "The Playfair cipher is a digraph substitution cipher. A key is generated using the key word that the user gives, and a grid of 25 letters is created. The encrypted message is generated using the positions of each letter.";
            document.querySelectorAll(".keyClass").forEach(element => {
                element.style.display = "inline";
            });
            document.querySelectorAll(".translation").forEach(element => {
                element.style.display = "inline";
            });
            output = playfair(input, translation, key);
            break;
        case "vigenere":
            document.getElementById("explanation").innerHTML = "vigenere explanation.";
            document.querySelectorAll(".keyClass").forEach(element => {
                element.style.display = "inline";
            });
            document.querySelectorAll(".translation").forEach(element => {
                element.style.display = "inline";
            });
            output = vigenere(input, translation, key);
            break;

    }

    if (input.toUpperCase() == "BILLCIPHER" || input.toUpperCase() == "BILL CIPHER") {
        document.querySelectorAll(".secret").forEach(element => {
            element.style.display = "inline";
        });
    } else {
        document.querySelectorAll(".secret").forEach(element => {
            element.style.display = "none";
        });
    }

    if (input.toUpperCase() == "DORYTO") {
        document.querySelectorAll(".doryto").forEach(element => {
            element.style.display = "inline";
        });
    } else {
        document.querySelectorAll(".doryto").forEach(element => {
            element.style.display = "none";
        });
    }

    document.getElementById("output").value = output;
    
}


function buttonPressed() {
    document.getElementById("input").value = document.getElementById("output").value;
    // const translation = document.querySelector('input[type=radio][name=translation]:checked').value;
    // if (translation == "encrypt") {
    //     document.querySelector('input[type=radio][name=translation]:checked').value = "decrypt";
    //     document.getElementById("decrypt").checked = true;
    //     document.getElementById("encrypt").checked = false;

    // } else {
    //     document.querySelector('input[type=radio][name=translation]:checked').value = "encrypt";
    //     document.getElementById("encrypt").checked = true;
    //     document.getElementById("decrypt").checked = false;
    // }
    // console.log(document.querySelector('input[type=radio][name=translation]:checked').value);
    translateInput();
}

function sha1(input, translation) {
    console.log( unescape(encodeURIComponent("\xE0")));
    return input;
    
}


function vigenere(input, translation, key) {
    input = input.toUpperCase();
    key = key.toUpperCase();

    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbersOfKey = [];
    for (let i = 0; i < key.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (key.charAt(i) == alphabet.charAt(j)) {
                numbersOfKey.push(j);
            }
        }
    }


    let output = "";

    switch(translation) {
        case "encrypt":
            for (let i = 0; i < input.length; i++) {
                if (!alphabet.includes(input.charAt(i))) {
                    output += input.charAt(i);
                    continue;
                }
                // find the number of letters you need to shift the input by
                let shift = numbersOfKey[i % numbersOfKey.length];
                for (let j = 0; j < alphabet.length; j++) {
                    if (input.charAt(i) == alphabet.charAt(j)) {
                        let index = (shift + j) % 26;
                        output += alphabet.charAt(index);
                    }
                }
            }
            return output;
        case "decrypt":
            for (let i = 0; i < input.length; i++) {
                if (!alphabet.includes(input.charAt(i))) {
                    output += input.charAt(i);
                }
                let shift = 26 - numbersOfKey[i % numbersOfKey.length];
                for (let j = 0; j < alphabet.length; j++) {
                    if (input.charAt(i) == alphabet.charAt(j)) {
                        let index = (shift + j) % 26;
                        output += alphabet.charAt(index);
                    }
                }
            }
            return output;    
    }

}

function playfair(input, translation, keyWord) {
    keyWord = keyWord.toUpperCase();
    input = input.toUpperCase();
    if (input.length % 2 == 1) {
        return "Invalid length. The input length must be a multiple of two.";
    }

    let characters = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
    let newKey = "";
    for (let i = 0; i < keyWord.length; i++) {
        if (keyWord.charAt(i).toUpperCase() == "J" && characters.includes("I")) {
            newKey += "I";
            characters = characters.replace('I','');
        }
        
        if (characters.includes(keyWord.charAt(i))) {
            newKey += keyWord.charAt(i);
            characters = characters.replace(keyWord.charAt(i),'');
        }
    }

    newKey += characters;
      
    let alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
    let output = "";
    for (let i = 0; i < input.length; i = i+2) {
        if (!alphabet.includes(input.charAt(i)) || !alphabet.includes(input.charAt(i+1))) {
            return "Invalid character. May only contain letters.";
        }
        if (input.charAt(i) == "J") {
            input.replace(charAt(i),"I");
        }
        if (input.charAt(i+1) == "J") {
            input.replace(charAt(i+1),"J");
        }
        let row1, col1, row2, col2;
        for (let j = 0; j < newKey.length; j++) {
            if (input.charAt(i) == newKey.charAt(j)) {
                row1 = Math.floor(j/5);
                col1 = j%5;
            } 
            if (input.charAt(i+1) == newKey.charAt(j)) {  
                row2 = Math.floor(j/5);
                col2 = j%5;
            }
        }

        switch(translation)  {
            case "encrypt":
                if (row1 == row2) {
                    if (col1 == 4) {
                        output += newKey.charAt(row1*5 + col1 - 4);
                    } else {
                        output += newKey.charAt(row1*5 + col1 + 1);
                    }
                    if (col2 == 4) {
                        output += newKey.charAt(row2*5 + col2 - 4);
                    } else {
                        output += newKey.charAt(row2*5 + col2 + 1);
                    }
                } else if (col1 == col2) {
                    if (row1 == 4) {
                        output += newKey.charAt(col1);
                    } else {
                        output += newKey.charAt((row1+1)*5 + col1);
                    }
                    if (row2 == 4) {
                        output += newKey.charAt(col2);
                    } else {
                        output += newKey.charAt((row2+1)*5 + col2);
                    }
                } else {
                    output += newKey.charAt(row1*5 + col2);
                    output += newKey.charAt(row2*5 + col1);
                }
                break;

            case "decrypt":
                if (row1 == row2) {
                    if (col1 == 0) {
                        output += newKey.charAt(row1*5 + 4);
                    } else {
                        output += newKey.charAt(row1*5 + col1 - 1);
                    }
                    if (col2 == 0) {
                        output += newKey.charAt(row2*5 + 4);
                    } else {
                        output += newKey.charAt(row2*5 + col2 - 1);
                    }
                } else if (col1 == col2) {
                    if (row1 == 0) {
                        output += newKey.charAt(20 + col1);
                    } else {
                        output += newKey.charAt((row1-1)*5 + col1);
                    }
                    if (row2 == 0) {
                        output += newKey.charAt(20 + col2);
                    } else {
                        output += newKey.charAt((row2-1)*5 + col2);
                    }
                } else {
                    output += newKey.charAt(row1*5 + col2);
                    output += newKey.charAt(row2*5 + col1);
                }
  
        }

      }
      return output;

}

// ^[a-zA-Z]+[-][a-zA-Z]ay$

function piglatin(input, translation) {
    let words = input.split(' ');
    let output = "";
    switch (translation) {
        case "encrypt":
            for (let i = 0; i < words.length; i++) {
                if (words[i].length == 0) {
                    continue;
                }
                let end = "-" + words[i].charAt(0) + "ay";
                output += words[i].substring(1) + end + " ";
            }
            return output;
        case "decrypt":
            words.forEach(word => {
                if (word.charAt(word.length - 4) != '-' || word.charAt(word.length - 2) != "a" || word.charAt(word.length - 1) != "y") {
                    return "Invalid input. All words must end in -(char)ay.";
                }
                let str = word.substring(word.length - 4, word.length - 1);
                output += str.charAt(1) + word.substring(0, word.length - 4) + " ";
            });
            return output;
    }

}

function caesar(input, translation, key) {
    if (key == "") {
        return "";
    }
    key = parseInt(key);
    let charToNumber = new Map([['A',0],
    ['B',1],
    ['C',2], 
    ['D',3],
    ['E',4],
    ['F',5],
    ['G',6],
    ['H',7],
    ['I',8],
    ['J',9],
    ['K',10],
    ['L',11],
    ['M',12],
    ['N',13],
    ['O',14],
    ['P',15],
    ['Q',16],
    ['R',17],       
    ['S',18],
    ['T',19],
    ['U',20],
    ['V',21],
    ['W',22],
    ['X',23],
    ['Y',24],
    ['Z',25]]);

    let numberToChar = new Map([...charToNumber.entries()].map(
            ([key, value]) => ([value, key]))
            );
    output = "";
    switch (translation) {
        case "encrypt":
            for (let i = 0; i < input.length; i++) {
                if (charToNumber.has(input.charAt(i).toUpperCase())) {
                    let shiftedNum = (charToNumber.get(input.charAt(i).toUpperCase()) + key)%26;
                    if (charToNumber.has(input.charAt(i))) {
                        output += numberToChar.get(shiftedNum);
                    } else {
                        output += numberToChar.get(shiftedNum).toLowerCase();
                    }
                } else {
                    output += input.charAt(i);
                }
            }
            return output;
        case "decrypt":
            let numShift = 26 - key;
            for (let i = 0; i < input.length; i++) {
                if (charToNumber.has(input.charAt(i).toUpperCase())) {
                    let shiftedNum = (charToNumber.get(input.charAt(i).toUpperCase()) + numShift)%26;
                    if (charToNumber.has(input.charAt(i))) {
                        output += numberToChar.get(shiftedNum);
                    } else {
                        output += numberToChar.get(shiftedNum).toLowerCase();
                    }
                } else {
                    output += input.charAt(i);
                }
            }
            return output;
    }

}

function morse(input, translation) {
    let morseCode = new Map();
    morseCode.set('A','.-');
    morseCode.set('B','-...');
    morseCode.set('C','-.-.');
    morseCode.set('D','-..');
    morseCode.set('E','.');
    morseCode.set('F','..-.');
    morseCode.set('G','--.');
    morseCode.set('H','....');
    morseCode.set('I','..');
    morseCode.set('J','.---');
    morseCode.set('K','-.-');
    morseCode.set('L','.-..');
    morseCode.set('M','--');
    morseCode.set('N','-.');
    morseCode.set('O','---');
    morseCode.set('P','.--.');
    morseCode.set('Q','--.-');
    morseCode.set('R','.-.');
    morseCode.set('S','...');
    morseCode.set('T','-');
    morseCode.set('U','..-');
    morseCode.set('V','...-');
    morseCode.set('W','.--');
    morseCode.set('X','-..-');
    morseCode.set('Y','-.--');
    morseCode.set('Z','--..');
    morseCode.set('1','.----');
    morseCode.set('2','..---');
    morseCode.set('3','...--');
    morseCode.set('4','....-');
    morseCode.set('5','.....');
    morseCode.set('6','-....');
    morseCode.set('7','--...');
    morseCode.set('8','---..');
    morseCode.set('9','----.');
    morseCode.set('0','-----');
    morseCode.set('.','.-.-.-');
    morseCode.set(',','--..--');
    morseCode.set('\'','.----.');
    morseCode.set('?','..--..');
    morseCode.set('!','-.-.--');
    morseCode.set(' ','/');


    let output = "";

    input = input.toUpperCase()

    switch(translation) {
        case "encrypt":
            for (let i = 0; i < input.length; i++) {
                if (morseCode.has(input.charAt(i))) {
                    output += morseCode.get(input.charAt(i));
                } else {
                    output += input.charAt(i); 
                }
                output += " ";
            }
            return output.slice(0, -1);
        case "decrypt":
            let invertedMorse = new Map([...morseCode.entries()].map(
                ([key, value]) => ([value, key]))
              );
            const letters = input.split(' ');
            for (let i = 0; i < letters.length; i++) {
                if (invertedMorse.has(letters[i])) {
                    output += invertedMorse.get(letters[i]);
                } else {
                    output += letters[i];
                }
            }
            return output;

    }
}
 
function gcd(a, b)
{
    if (a < b) {
        for (let i = a; i > 0; i--) {
            if (a%i == 0 && b%i == 0) {
                return i;
            }
        }
    } else {
        for (let i = b; i > 0; i--) {
            if (a%i == 0 && b%i == 0) {
                return i;
            }
        }
    }
}

function hill(input, translation, key) {
    input = input.toUpperCase();
    let charToNumber = new Map([['A',0],
        ['B',1],
        ['C',2], 
        ['D',3],
        ['E',4],
        ['F',5],
        ['G',6],
        ['H',7],
        ['I',8],
        ['J',9],
        ['K',10],
        ['L',11],
        ['M',12],
        ['N',13],
        ['O',14],
        ['P',15],
        ['Q',16],
        ['R',17],       
        ['S',18],
        ['T',19],
        ['U',20],
        ['V',21],
        ['W',22],
        ['X',23],
        ['Y',24],
        ['Z',25],
        [' ',26],
        ['.',27],
        [',',28],
        ['?',29],
        ['!',30],
        ['\'',31]

    ]);
    let numToChar = new Map([...charToNumber.entries()].map(([key, value]) => ([value, key])));
    let output = "";  
    const keyComp = key.split(' ');  
    if (keyComp.length != 4) {
        return "Invalid key. Must have 4 numbers."
    }
    let determinant = keyComp[0]*keyComp[3] - keyComp[1]*keyComp[2];
    if (determinant <= 0) {
        determinant += 32;
    }
    if (gcd(32, determinant) != 1) {
        return "Invalid key. Determinant must be coprime with 32.";
    }

    switch(translation) {
        case "encrypt":
            if (input.length % 2 != 0) {
                return "Invalid length. Number of characters must be a multiple of two.";
            }
            for (let i = 0; i < input.length; i = i + 2) {
                if (!charToNumber.has(input.charAt(i)) || !charToNumber.has(input.charAt(i+1))) {
                    return "Invalid character.";
                }
                let first = keyComp[0] * charToNumber.get(input.charAt(i)) + keyComp[1] * charToNumber.get(input.charAt(i+1));
                let second = keyComp[2] * charToNumber.get(input.charAt(i)) + keyComp[3] * charToNumber.get(input.charAt(i+1));
                first = first % 32;
                second = second % 32;
                output += numToChar.get(first) + numToChar.get(second);
            }

            return output;
        case "decrypt":
            let i = 0;
            while ((determinant * i)%32 != 1) {
                i++;
            }
            let inverse = [keyComp[3], -keyComp[1], -keyComp[2], keyComp[0]];
            for(let j = 0; j < inverse.length; j++) {
                if (inverse[j] < 0) {
                    inverse[j] += 32;
                }
                inverse[j] *= i;
            }

            for (let i = 0; i < input.length; i = i + 2) {
                if (!charToNumber.has(input.charAt(i)) || !charToNumber.has(input.charAt(i+1))) {
                    return "Invalid character.";
                }
                let first = inverse[0] * charToNumber.get(input.charAt(i)) + inverse[1] * charToNumber.get(input.charAt(i+1));
                let second = inverse[2] * charToNumber.get(input.charAt(i)) + inverse[3] * charToNumber.get(input.charAt(i+1));

                first = first % 32;
                second = second % 32;
                output += numToChar.get(first) + numToChar.get(second);

            }
            return output;


    }
}

function foursquare(input, translation, key) {
    input = input.toUpperCase();
    key = key.toUpperCase();
    const keyComp = key.split(' ');

    // make sure keys are valid
    if (keyComp.length != 2) {
        return "Invalid key - must be two strings of 36 letters/numbers (Separate the keys with a space).";
    }
    if (keyComp[0].length != 36 || keyComp[1].length != 36) {
        return "Invalid key - must be two strings of 36 letters/numbers.";
    }
    for (let i = 0; i < keyComp[0].length; i++) {
        for (let j = i+1; j < keyComp[0].length; j++) {
            if (keyComp[0].charAt(i) == keyComp[0].charAt(j) || keyComp[1].charAt(i) == keyComp[1].charAt(j)) {
                return "Invalid key - cannot have repeating letters/numbers.";
            }
        }
    }

    let matrix1 = [[keyComp[0].charAt(0), keyComp[0].charAt(1), keyComp[0].charAt(2), keyComp[0].charAt(3), keyComp[0].charAt(4), keyComp[0].charAt(5)],
                   [keyComp[0].charAt(6), keyComp[0].charAt(7), keyComp[0].charAt(8), keyComp[0].charAt(9), keyComp[0].charAt(10), keyComp[0].charAt(11)],
                   [keyComp[0].charAt(12), keyComp[0].charAt(13), keyComp[0].charAt(14), keyComp[0].charAt(15), keyComp[0].charAt(16), keyComp[0].charAt(17)],
                   [keyComp[0].charAt(18), keyComp[0].charAt(19), keyComp[0].charAt(20), keyComp[0].charAt(21), keyComp[0].charAt(22), keyComp[0].charAt(23)],
                   [keyComp[0].charAt(24), keyComp[0].charAt(25), keyComp[0].charAt(26), keyComp[0].charAt(27), keyComp[0].charAt(28), keyComp[0].charAt(29)],
                   [keyComp[0].charAt(30), keyComp[0].charAt(31), keyComp[0].charAt(32), keyComp[0].charAt(33), keyComp[0].charAt(34), keyComp[0].charAt(35)]];
    let matrix2 = [[keyComp[1].charAt(0), keyComp[1].charAt(1), keyComp[1].charAt(2), keyComp[1].charAt(3), keyComp[1].charAt(4), keyComp[1].charAt(5)],
                   [keyComp[1].charAt(6), keyComp[1].charAt(7), keyComp[1].charAt(8), keyComp[1].charAt(9), keyComp[1].charAt(10), keyComp[1].charAt(11)],
                   [keyComp[1].charAt(12), keyComp[1].charAt(13), keyComp[1].charAt(14), keyComp[1].charAt(15), keyComp[1].charAt(16), keyComp[1].charAt(17)],
                   [keyComp[1].charAt(18), keyComp[1].charAt(19), keyComp[1].charAt(20), keyComp[1].charAt(21), keyComp[1].charAt(22), keyComp[1].charAt(23)],
                   [keyComp[1].charAt(24), keyComp[1].charAt(25), keyComp[1].charAt(26), keyComp[1].charAt(27), keyComp[1].charAt(28), keyComp[1].charAt(29)],
                   [keyComp[1].charAt(30), keyComp[1].charAt(31), keyComp[1].charAt(32), keyComp[1].charAt(33), keyComp[1].charAt(34), keyComp[1].charAt(35)]];


    let charToNumber = new Map([['A',0],
    ['B',1],
    ['C',2], 
    ['D',3],
    ['E',4],
    ['F',5],
    ['G',6],
    ['H',7],
    ['I',8],
    ['J',9],
    ['K',10],
    ['L',11],
    ['M',12],
    ['N',13],
    ['O',14],
    ['P',15],
    ['Q',16],
    ['R',17],       
    ['S',18],
    ['T',19],
    ['U',20],
    ['V',21],
    ['W',22],
    ['X',23],
    ['Y',24],
    ['Z',25],
    ['1',26],
    ['2',27],
    ['3',28],
    ['4',29],
    ['5',30],
    ['6',31],
    ['7',32],
    ['8',33],
    ['9',34],
    ['0',35]

]);

let numToChar = new Map([...charToNumber.entries()].map(([key, value]) => ([value, key])));
    let output = "";
    switch(translation) {
        case "encrypt":
            if (input.length % 2 == 1) {
                return "Invalid length. Number of characters must be a multiple of two.";
            }
            for (let i = 0; i < input.length; i = i+2) {
                if (charToNumber.has(input.charAt(i)) && charToNumber.has(input.charAt(i+1))) {
                    let num1 = charToNumber.get(input.charAt(i));
                    let num2 = charToNumber.get(input.charAt(i+1));
                    let row1 = Math.floor(num1/6);
                    let row2 = Math.floor(num2/6);
                    let col1 = num1 % 6;
                    let col2 = num2 % 6;
                    output += matrix1[row1][col2] + matrix2[row2][col1];
                } else {
                    return "Invalid input - can only enter alphabet/numbers.";
                }
            }
            return output;

        case "decrypt":
            if (input.length % 2 == 1) {
                return "Invalid length. Number of characters must be a multiple of two.";
            }

            let row1, col1, row2, col2;
            for (let i = 0; i < input.length; i = i+2) {
                for (let j = 0; j < keyComp[0].length; j++) {
                    if (input.charAt(i) == keyComp[0].charAt(j)) {
                        row1 = Math.floor(j/6);
                        col1 = j % 6;
                    }
                    if (input.charAt(i+1) == keyComp[1].charAt(j)) {
                        row2 = Math.floor(j/6);
                        col2 = j % 6;
                    }
                }
                let numOfFirst = row1 * 6 + col2;
                let numOfSecond = row2 * 6 + col1;
                output += numToChar.get(numOfFirst) + numToChar.get(numOfSecond);
                
            }
        return output;

    }

}

translateInput();

/*
have the two textboxes be empty by default
but have gray text saying input and output respectively
when you type anything they disappear
when you delete everything the text reappears
*/
