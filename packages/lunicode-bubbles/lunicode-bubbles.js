//TODO: Fix 'guesstimate' in encode function. Fix handling of non-available chars. Expend map.
const bubbles =  {
    encode: function(text) {
        var ret = "",
            ch,
            first = true;

        for (i in text) {
            ch = this.map[text[i]];

            // No dedicated circled character available? Use a Combining Diacritical Mark surrounded
            // with non-breaking spaces, so it doesn't overlap
            if ((typeof(ch) == "undefined")) {
                if (text[i].charCodeAt(0) >= 33) {
                    ch = text[i] + String.fromCharCode(8413);
                    if (!first) {
                        ch = String.fromCharCode(8239) + String.fromCharCode(160) + String.fromCharCode(160) + String.fromCharCode(8239) + ch;
                    }
                } else {
                    ch = text[i];
                }
            }
            ret += ch;
            first = (ch == '\n');
        }
        return ret;
    },

    decode: function(text) {
        var ret = "",
            ch,
            newRet = '';

        for (i in text) {
            ch = this.map[text[i]];
            ret += ((typeof(ch) == "undefined") ? text[i] : ch);
        }

        for (i in ret) {
            ch = ret[i].charCodeAt(0);
            if (ch != 160 && ch != 8239 && ch != 8413) {
                newRet += ret[i];
            }
        }

        return newRet;
    },

    map: {
        "0": "⓪",
        "1": "①",
        "2": "②",
        "3": "③",
        "4": "④",
        "5": "⑤",
        "6": "⑥",
        "7": "⑦",
        "8": "⑧",
        "9": "⑨",
        "A": "Ⓐ",
        "B": "Ⓑ",
        "C": "Ⓒ",
        "D": "Ⓓ",
        "E": "Ⓔ",
        "F": "Ⓕ",
        "G": "Ⓖ",
        "H": "Ⓗ",
        "I": "Ⓘ",
        "J": "Ⓙ",
        "K": "Ⓚ",
        "L": "Ⓛ",
        "M": "Ⓜ",
        "N": "Ⓝ",
        "O": "Ⓞ",
        "P": "Ⓟ",
        "Q": "Ⓠ",
        "R": "Ⓡ",
        "S": "Ⓢ",
        "T": "Ⓣ",
        "U": "Ⓤ",
        "V": "Ⓥ",
        "W": "Ⓦ",
        "X": "Ⓧ",
        "Y": "Ⓨ",
        "Z": "Ⓩ",
        "a": "ⓐ",
        "b": "ⓑ",
        "c": "ⓒ",
        "d": "ⓓ",
        "e": "ⓔ",
        "f": "ⓕ",
        "g": "ⓖ",
        "h": "ⓗ",
        "i": "ⓘ",
        "j": "ⓙ",
        "k": "ⓚ",
        "l": "ⓛ",
        "m": "ⓜ",
        "n": "ⓝ",
        "o": "ⓞ",
        "p": "ⓟ",
        "q": "ⓠ",
        "r": "ⓡ",
        "s": "ⓢ",
        "t": "ⓣ",
        "u": "ⓤ",
        "v": "ⓥ",
        "w": "ⓦ",
        "x": "ⓧ",
        "y": "ⓨ",
        "z": "ⓩ",
        "⓪": "0",
        "①": "1",
        "②": "2",
        "③": "3",
        "④": "4",
        "⑤": "5",
        "⑥": "6",
        "⑦": "7",
        "⑧": "8",
        "⑨": "9",
        "Ⓐ": "A",
        "Ⓑ": "B",
        "Ⓒ": "C",
        "Ⓓ": "D",
        "Ⓔ": "E",
        "Ⓕ": "F",
        "Ⓖ": "G",
        "Ⓗ": "H",
        "Ⓘ": "I",
        "Ⓙ": "J",
        "Ⓚ": "K",
        "Ⓛ": "L",
        "Ⓜ": "M",
        "Ⓝ": "N",
        "Ⓞ": "O",
        "Ⓟ": "P",
        "Ⓠ": "Q",
        "Ⓡ": "R",
        "Ⓢ": "S",
        "Ⓣ": "T",
        "Ⓤ": "U",
        "Ⓥ": "V",
        "Ⓦ": "W",
        "Ⓧ": "X",
        "Ⓨ": "Y",
        "Ⓩ": "Z",
        "ⓐ": "a",
        "ⓑ": "b",
        "ⓒ": "c",
        "ⓓ": "d",
        "ⓔ": "e",
        "ⓕ": "f",
        "ⓖ": "g",
        "ⓗ": "h",
        "ⓘ": "i",
        "ⓙ": "j",
        "ⓚ": "k",
        "ⓛ": "l",
        "ⓜ": "m",
        "ⓝ": "n",
        "ⓞ": "o",
        "ⓟ": "p",
        "ⓠ": "q",
        "ⓡ": "r",
        "ⓢ": "s",
        "ⓣ": "t",
        "ⓤ": "u",
        "ⓥ": "v",
        "ⓦ": "w",
        "ⓧ": "x",
        "ⓨ": "y",
        "ⓩ": "z"
    }
};

module.exports = bubbles;