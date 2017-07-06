//TODO: Add/Remove/Update Options

function coder(text){
    var ret = [],
        ch,
        newLines = [];

    for (var i = 0, len = text.length; i < len; i++) {
        ch = text.charAt(i);

        // combining diacritical marks: combine with previous character for ä,ö,ü,...
        if (i > 0 && (ch == '\u0308' ||
            ch == '\u0300' ||
            ch == '\u0301' ||
            ch == '\u0302')) {
            ch = this.map[text.charAt(i - 1) + ch];
            ret.pop();
        } else {
            ch = this.map[ch];
            if (typeof (ch) == "undefined") {
                ch = text.charAt(i);
            }
        }


        if (ch == '\n') {
            newLines.push(ret.reverse().join(""));
            ret = [];
        } else {
            ret.push(ch);
        }


    }
    newLines.push(ret.reverse().join(""));
    return newLines.join("\n");
}

const mirror = {
    map: {
        "1": "",
        "2": "",
        "3": "",
        "4": "",
        "5": "",
        "6": "",
        "7": "",
        "a": "ɒ",
        "b": "d",
        "c": "ɔ",
        "e": "ɘ",
        "f": "Ꮈ",
        "g": "ǫ",
        "h": "ʜ",
        "j": "ꞁ",
        "k": "ʞ",
        "l": "|",
        "n": "ᴎ",
        "p": "q",
        "r": "ɿ",
        "s": "ꙅ",
        "t": "ƚ",
        "y": "ʏ",
        "z": "ƹ",
        "B": "ᙠ",
        "C": "Ɔ",
        "D": "ᗡ",
        "E": "Ǝ",
        "F": "ꟻ",
        "G": "Ꭾ",
        "J": "Ⴑ",
        "K": "⋊",
        "L": "⅃",
        "N": "Ͷ",
        "P": "ꟼ",
        "Q": "Ọ",
        "R": "Я",
        "S": "Ꙅ",
        "Z": "Ƹ",
        "&": "",
        ";": "",
        "[": "]",
        "(": ")",
        "{": "}",
        "?": "⸮",
        "<": ">",
        "ä": "ɒ̈",
        "ß": "ᙠ",
        "´": "`",
        "é": "ɘ̀",
        "á": "ɒ̀",
        "ó": "ò",
        "ú": "ù",
        "É": "Ǝ̀",
        "Á": "À",
        "Ó": "Ò",
        "Ú": "Ù",
        "`": "´",
        "è": "ɘ́",
        "à": "ɒ́",
        "È": "Ǝ́",
        "ê": "ɘ̂",
        "â": "ɒ̂",
        "Ê": "Ǝ̂",
        "Ø": "ᴓ",
        "ø": "ᴓ",
        "": ";",
        "ɒ": "a",
        "d": "b",
        "ɔ": "c",
        "ɘ": "e",
        "Ꮈ": "f",
        "ǫ": "g",
        "ʜ": "h",
        "ꞁ": "j",
        "ʞ": "k",
        "|": "l",
        "ᴎ": "n",
        "q": "p",
        "ɿ": "r",
        "ꙅ": "s",
        "ƚ": "t",
        "ʏ": "y",
        "ƹ": "z",
        "ᙠ": "ß",
        "Ɔ": "C",
        "ᗡ": "D",
        "Ǝ": "E",
        "ꟻ": "F",
        "Ꭾ": "G",
        "Ⴑ": "J",
        "⋊": "K",
        "⅃": "L",
        "Ͷ": "N",
        "ꟼ": "P",
        "Ọ": "Q",
        "Я": "R",
        "Ꙅ": "S",
        "Ƹ": "Z",
        "]": "[",
        ")": "(",
        "}": "{",
        "⸮": "?",
        ">": "<",
        "ɒ̈": "ä",
        "ɘ̀": "é",
        "ɒ̀": "á",
        "ò": "ó",
        "ù": "ú",
        "Ǝ̀": "É",
        "À": "Á",
        "Ò": "Ó",
        "Ù": "Ú",
        "ɘ́": "è",
        "ɒ́": "à",
        "Ǝ́": "È",
        "ɘ̂": "ê",
        "ɒ̂": "â",
        "Ǝ̂": "Ê",
        "ᴓ": "ø"
    }
};

mirror.decode = coder.bind(mirror);
mirror.encode = coder.bind(mirror);

module.exports = mirror;