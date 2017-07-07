const tiny = {

  encode: function (text) {
    var ret = '',
      ch;
    text = text.toUpperCase();
    for (var i = 0, len = text.length; i < len; i++) {
      ch = this.map[text.charAt(i)];
      if (typeof (ch) == "undefined") {
        ch = text.charAt(i);
      }
      ret += ch;

    }

    return ret;
  },

  decode: function (text) {
    var ret = '',
      ch;

    for (var i = 0, len = text.length; i < len; i++) {
      ch = this.map[text.charAt(i)];
      if (typeof (ch) == "undefined") {
        ch = text.charAt(i);
      }
      ret += ch;
    }
    return ret;
  },


  map: {
    "A": "ᴀ",
    "B": "ʙ",
    "C": "ᴄ",
    "D": "ᴅ",
    "E": "ᴇ",
    "F": "ꜰ",
    "G": "ɢ",
    "H": "ʜ",
    "I": "ɪ",
    "J": "ᴊ",
    "K": "ᴋ",
    "L": "ʟ",
    "M": "ᴍ",
    "N": "ɴ",
    "O": "ᴏ",
    "P": "ᴘ",
    "Q": "Q",
    "R": "ʀ",
    "S": "ꜱ",
    "T": "ᴛ",
    "U": "ᴜ",
    "V": "ᴠ",
    "W": "ᴡ",
    "X": "x",
    "Y": "ʏ",
    "Z": "ᴢ",
    "ᴀ": "A",
    "ʙ": "B",
    "ᴄ": "C",
    "ᴅ": "D",
    "ᴇ": "E",
    "ꜰ": "F",
    "ɢ": "G",
    "ʜ": "H",
    "ɪ": "I",
    "ᴊ": "J",
    "ᴋ": "K",
    "ʟ": "L",
    "ᴍ": "M",
    "ɴ": "N",
    "ᴏ": "O",
    "ᴘ": "P",
    "ʀ": "R",
    "ꜱ": "S",
    "ᴛ": "T",
    "ᴜ": "U",
    "ᴠ": "V",
    "ᴡ": "W",
    "x": "X",
    "ʏ": "Y",
    "ᴢ": "Z"
  }
}

module.exports = tiny;