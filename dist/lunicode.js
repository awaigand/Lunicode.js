(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.lunicode = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Lunicode.js
// from lunicode.com
// on GitHub: https://github.com/combatwombat/Lunicode.js
// Copyright © 2012 Robert Gerlach - robsite.net
const creepify = require('lunicode-creepify');
const flip = require('lunicode-flip');

function Lunicode() {
  
  this.tools = {
  
    // Flip/rotate Text by 180°

    creepify:creepify,
    
    flip:flip,
    
       
    
    
    // Mirror text (flip horizontally)
    mirror: {
      init: function() {
                
        // invert the map
        for (i in this.map) {
          this.map[this.map[i]] = i;
        }
        
      },
      
      encode: function(text) {
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
            ch = this.map[text.charAt(i-1) + ch];
            ret.pop();
          } else {
            ch = this.map[ch];
            if (typeof(ch) == "undefined") {
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
      },
      
      decode: function(text) {
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
            ch = this.map[text.charAt(i-1) + ch];
            ret.pop();
          } else {
            ch = this.map[ch];
            if (typeof(ch) == "undefined") {
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
      },
      
      // Thanks to http://www.macchiato.com/unicode/mirrored-ascii
      map: {         
          'a' : 'ɒ',
          'b' : 'd',      
          'c' : 'ɔ',       
          'e' : 'ɘ', 
          'f' : 'Ꮈ', 
          'g' : 'ǫ', 
          'h' : 'ʜ',  
          'j' : 'ꞁ', 
          'k' : 'ʞ',
          'l' : '|',
          'n' : 'ᴎ',
          'p' : 'q',
          'r' : 'ɿ',
          's' : 'ꙅ',
          't' : 'ƚ',
          'y' : 'ʏ',
          'z' : 'ƹ',
          'B' : 'ᙠ',
          'C' : 'Ɔ',
          'D' : 'ᗡ',
          'E' : 'Ǝ',
          'F' : 'ꟻ',
          'G' : 'Ꭾ',
          'J' : 'Ⴑ',
          'K' : '⋊',
          'L' : '⅃',
          'N' : 'Ͷ',
          'P' : 'ꟼ',
          'Q' : 'Ọ',
          'R' : 'Я',
          'S' : 'Ꙅ',
          'Z' : 'Ƹ',
          '1' : '',
          '2' : '',
          '3' : '',
          '4' : '',
          '5' : '',
          '6' : '',
          '7' : '',
          '&' : '',
          ';' : '',
          '[' : ']',
          '(' : ')',
          '{' : '}',
          '?' : '⸮', 
          '<' : '>',
          
          'ä' : 'ɒ'+'\u0308',
          'ß' : 'ᙠ',
          
          '´' : '`',
          'é' : 'ɘ' + '\u0300',
          'á' : 'ɒ' + '\u0300',
          'ó' : 'ò',
          'ú' : 'ù',
          'É' : 'Ǝ' + '\u0300',
          'Á' : 'À',
          'Ó' : 'Ò',
          'Ú' : 'Ù',
          
          '`' : '´',
          'è' : 'ɘ' + '\u0301',
          'à' : 'ɒ' + '\u0301',
          'È' : 'Ǝ' + '\u0301',

          'ê' : 'ɘ' + '\u0302',
          'â' : 'ɒ' + '\u0302',
          'Ê' : 'Ǝ' + '\u0302',
          
          'Ø' : 'ᴓ',
          'ø' : 'ᴓ'
          
      }
    },
    // Circles around Letters. Uses special circle characters for some letters and combining characters for the rest
    // Thanks to
    // - Alan Wood: http://www.alanwood.net/unicode/enclosed_alphanumerics.html
    bubbles: {
      init: function() {
        
        
        
        // Numbers
        for (var i = 49; i <= 57; i++) {
          this.map[String.fromCharCode(i)] = String.fromCharCode(i+9263);
        }
        this.map['0'] = '\u24ea';
        
        // Capital letters
        for (var i = 65; i <= 90; i++) {
          this.map[String.fromCharCode(i)] = String.fromCharCode(i+9333);
        }
        
        // Lower letters
        for (var i = 97; i <= 122; i++) {
          this.map[String.fromCharCode(i)] = String.fromCharCode(i+9327);
        }
                
        // invert the map
        for (i in this.map) {
          this.mapInverse[this.map[i]] = i;
        }
        
      },
      
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
          ch = this.mapInverse[text[i]];
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
      
      map: {},
      mapInverse: {}
    },
    
    
    
    // Puts a Square Combining Character after a letter, thus ensquaring it, squarily.
    squares: {
      init: function() {},
      
      encode: function(text) {
        var ret = "",
            ch,
            first = true;
            
        for (i in text) {
          if (text[i].charCodeAt(0) >= 33) {
            ch = text[i] + String.fromCharCode(8414);
            if (!first) {
              ch = String.fromCharCode(8239) + String.fromCharCode(160) + String.fromCharCode(160) + String.fromCharCode(8239) + ch;
            }
          } else {
            ch = text[i];
          }
          
          ret += ch;
          first = (ch == '\n');
        }
        return ret;
      },
      
      decode: function(text) {
        var ret = "",
            ch;
            
        for (i in text) {
          ch = text[i].charCodeAt(0);
          if (ch != 160 && ch != 8239 && ch != 8414) {
            ret += text[i];
          }
        }
        
        return ret;
      }
    },
    
    
    // Same as squares, just round.
    roundsquares: {
      init: function() {},
      
      encode: function(text) {
        var ret = "",
            ch,
            first = true;
            
        for (i in text) {
          if (text[i].charCodeAt(0) >= 33) {
            ch = text[i] + String.fromCharCode(8419);
            if (!first) {
              ch = String.fromCharCode(160) + String.fromCharCode(160) + String.fromCharCode(160) + ch;
            }
          } else {
            ch = text[i];
          }
          
          ret += ch;
          first = (ch == '\n');
        }
        return ret;
      },
      
      decode: function(text) {
        var ret = "",
            ch;
            
        for (i in text) {
          ch = text[i].charCodeAt(0);
          if (ch != 160 && ch != 8239 && ch != 8419) {
            ret += text[i];
          }
        }
        
        return ret;
      }
    },
    
    
    // Weird looking alternatives to most characters
    bent: {
      init: function() {

        // invert the map
        for (i in this.map) {
          this.map[this.map[i]] = i;
        }

      },

      encode: function(text) {
        var ret = '',
            ch;

        for (var i = 0, len = text.length; i < len; i++) {
          ch = this.map[text.charAt(i)];
          if (typeof(ch) == "undefined") {
            ch = text.charAt(i);
          }
          ret +=  ch;

        }    

        return ret;
      },

      decode: function(text) {
        var ret = '',
            ch;

        for (var i = 0, len = text.length; i < len; i++) {
          ch = this.map[text.charAt(i)];
          if (typeof(ch) == "undefined") {
              ch = text.charAt(i);
          }
          ret += ch;          
        }
        return ret;
      },

      // Thanks to Eddie Ringle for most lowercase letters: http://funicode.com
      map: {        
          'a' : 'ą',
          'b' : 'ҍ',      
          'c' : 'ç',  
          'd' : 'ժ',     
          'e' : 'ҽ', 
          'f' : 'ƒ', 
          'g' : 'ց', 
          'h' : 'հ', 
          'i' : 'ì',           
          'j' : 'ʝ', 
          'k' : 'ҟ',
          'l' : 'Ӏ',
          'm' : 'ʍ',
          'n' : 'ղ',
          'o' : 'օ',
          'p' : 'ք',
          'q' : 'զ',
          'r' : 'ɾ',
          's' : 'ʂ',
          't' : 'է',
          'u' : 'մ',
          'v' : 'ѵ',
          'w' : 'ա',
          'x' : '×',
          'y' : 'վ',
          'z' : 'Հ',
          'A' : 'Ⱥ',
          'B' : 'β',
          'C' : '↻',
          'D' : 'Ꭰ',
          'E' : 'Ɛ',
          'F' : 'Ƒ',
          'G' : 'Ɠ',
          'H' : 'Ƕ',
          'I' : 'į',
          'J' : 'ل',
          'K' : 'Ҡ',
          'L' : 'Ꝉ',
          'M' : 'Ɱ',
          'N' : 'ហ',
          'O' : 'ට',
          'P' : 'φ',
          'Q' : 'Ҩ',
          'R' : 'འ',
          'S' : 'Ϛ',
          'T' : 'Ͳ',
          'U' : 'Ա',
          'V' : 'Ỽ',
          'W' : 'చ',
          'X' : 'ჯ',
          'Y' : 'Ӌ',
          'Z' : 'ɀ',
          '0' : '⊘',
          '1' : '��',
          '2' : 'ϩ',
          '3' : 'Ӡ',
          '4' : '५',
          '5' : 'Ƽ',
          '6' : 'Ϭ',
          '7' : '7',
          '8' : '��',
          '9' : '९',
          '&' : '⅋',
          '(' : '{',
          ')' : '}',
          '{' : '(',
          '}' : ')',
          
          'ä' : 'ą'+'\u0308',
          'ö' : 'օ'+'\u0308',
          'ü' : 'մ'+'\u0308',
          'Ä' : 'Ⱥ'  + '\u0308',
          'Ö' : 'ට'+'\u0308',
          'Ü' : 'Ա'+'\u0308',
          
          'é' : 'ҽ' + '\u0301',
          'á' : 'ą' + '\u0301',
          'ó' : 'օ' + '\u0301',
          'ú' : 'մ' + '\u0301',
          'É' : 'Ɛ' + '\u0301',
          'Á' : 'Ⱥ' +  '\u0301',
          'Ó' : 'ට' + '\u0301',
          'Ú' : 'Ա' + '\u0301',
          
          'è' : 'ҽ' + '\u0300',
          'à' : 'ą' + '\u0300',
          'ò' : 'օ' + '\u0300',
          'ù' : 'մ' + '\u0300',
          'È' : 'Ɛ' + '\u0300',
          'À' : 'Ⱥ'  +  '\u0300',
          'Ò' : 'ට' + '\u0300',
          'Ù' : 'Ա' + '\u0300',
          
          'ê' : 'ҽ' + '\u0302',
          'â' : 'ą' + '\u0302',
          'ô' : 'օ' + '\u0302',
          'û' : 'մ' + '\u0302',
          'Ê' : 'Ɛ' + '\u0302',
          'Â' : 'Ⱥ'  +  '\u0302',
          'Ô' : 'ට' + '\u0302',
          'Û' : 'Ա' + '\u0302'        
      }
    },
    
    
    // Tiny Capitals
    tiny: {
      init: function() {

        // invert the map
        for (i in this.map) {
          this.map[this.map[i]] = i;
        }

      },

      encode: function(text) {
        var ret = '',
            ch;
        text = text.toUpperCase();
        for (var i = 0, len = text.length; i < len; i++) {
          ch = this.map[text.charAt(i)];
          if (typeof(ch) == "undefined") {
            ch = text.charAt(i);
          }
          ret +=  ch;

        }    

        return ret;
      },

      decode: function(text) {
        var ret = '',
            ch;

        for (var i = 0, len = text.length; i < len; i++) {
          ch = this.map[text.charAt(i)];
          if (typeof(ch) == "undefined") {
              ch = text.charAt(i);
          }
          ret += ch;          
        }
        return ret;
      },

      // TODO: Find small lower case letters
      map: {        
          'A' : 'ᴀ',
          'B' : 'ʙ',
          'C' : 'ᴄ',
          'D' : 'ᴅ',
          'E' : 'ᴇ',
          'F' : 'ꜰ',
          'G' : 'ɢ',
          'H' : 'ʜ',
          'I' : 'ɪ',
          'J' : 'ᴊ',
          'K' : 'ᴋ',
          'L' : 'ʟ',
          'M' : 'ᴍ',
          'N' : 'ɴ',
          'O' : 'ᴏ',
          'P' : 'ᴘ',
          'Q' : 'Q',
          'R' : 'ʀ',
          'S' : 'ꜱ',
          'T' : 'ᴛ',
          'U' : 'ᴜ',
          'V' : 'ᴠ',
          'W' : 'ᴡ',
          'X' : 'x',
          'Y' : 'ʏ',
          'Z' : 'ᴢ'
      }
    }

   
    
    
  };
  
  

  ////// functions

  
  // init
  for (i in this.tools) {
    this.tools && this.tools[i] && this.tools[i].init && this.tools[i].init();
  }
  
  
  
  // Encode every character: U+00A0 -> &#x00a0; etc. 
  this.getHTML = function(text) {
    var html = '',
        ch,
        lastSpaceWasNonBreaking = true, // for alternating [non-braking] spaces
        highSurrogate = 0,
        codepoint = 0;        
        
    for (var i = 0, len = text.length; i < len; i++) {
      ch = text.charCodeAt(i);
      
      // line break: add <br>\n
      if (ch == 10 || ch == 13) {
        html += '<br>\n';
        lastSpaceWasNonBreaking = true;
        
      // space: add alternating space and non-breaking space (U+00A0). Otherwise
      // a series of normal spaces       would collapse to one in the browser  
      } else if (ch == 32) {
        if (lastSpaceWasNonBreaking) {
          html += ' ';
          lastSpaceWasNonBreaking = false;
        } else {
          html += '&nbsp;';
          lastSpaceWasNonBreaking = true;
        }        
      
      // Normal character: Decode. Special cases for higher numbers:
      // http://en.wikipedia.org/wiki/Mapping_of_Unicode_characters#Surrogates
      } else {
        
        
        // Character is high surrogate: Remember and continue
        if (ch >= 0xD800 && ch <= 0xDBFF) {
          highSurrogate = ch;
          codepoint = 0;
        
        // last character was high surrogate: Combine with low surrogate  
        } else if (highSurrogate > 0) {
          
          // If char is low surrogate:
          if (ch >= 0xDC00 && ch <= 0xDFFF) {
            codepoint = (highSurrogate-0xD800)*1024 + (ch-0xDC00) + 0x10000;
          }
          highSurrogate = 0;
        
        // no surrogates: Just take the character  
        } else {
          codepoint = ch;
        }

        if (codepoint != 0) {
          html += '&#x' + codepoint.toString(16) + ';';
          lastSpaceWasNonBreaking = true;
        }

      }
    }
    
    return html;
  }  
}

module.exports = Lunicode;
},{"lunicode-creepify":2,"lunicode-flip":3}],2:[function(require,module,exports){
//TODO: Check if no Diacritics were released since original release of repo
//TODO: Add/Remove/Update Options
const diacriticsTop = [ "̀", "́", "̂", "̃", "̄", "̅", "̆", "̇", "̈", "̉", "̊", "̋", "̌", "̍", "̎", "̏", "̐", "̑", "̒", "̓",
    "̔", "̕", "̚", "̛", "̽", "̾", "̿", "̀", "́", "͂", "̓", "̈́", "̈́", "͆", "͊", "͋", "͌", "͐", "͑", "͒", "͗", "͘", "͛",
    "͝", "͝", "͠", "͡" ];

const diacriticsMiddle = ["̴", "̵", "̶", "̷", "̸" ];

const diacriticsBottom = ["̖", "̗", "̘", "̙", "̜", "̝", "̞", "̟", "̠", "̡", "̢", "̣", "̤", "̥", "̦", "̧", "̨", "̩", "̪", "̫", "̬", "̭",
    "̮", "̯", "̰", "̱", "̲", "̳", "̹", "̺", "̻", "̼", "ͅ", "͇", "͈", "͉", "͍", "͎", "͓", "͔", "͕", "͖", "͙", "͚", "͜", "͟" ];

const creepify = {
    encode: function (input) {
        var result = '',
            currentChar;
        for (i in input) {
            currentChar = input[i];

            // Middle
            // Put just one of the middle characters there, or it gets crowded
            if (this.options.middle) {
                currentChar += diacriticsMiddle[Math.floor(Math.random() * diacriticsMiddle.length)]
            }

            // Top
            if (this.options.top) {

                // Put up to this.options.maxHeight random diacritics on top.
                // optionally fluctuate the number via the randomization value (0-100%)
                // randomization 100%: 0 to maxHeight
                //                30%: 70% of maxHeight to maxHeight
                //                 x%: 100-x% of maxHeight to maxHeight
                var diacriticsTopLength = diacriticsTop.length - 1;
                var howManyTops = this.options.maxHeight - Math.random() * ((this.options.randomization / 100) * this.options.maxHeight);
                for (var i = 0; i < howManyTops; i++) {
                    currentChar += diacriticsTop[Math.floor(Math.random() * diacriticsTopLength)]
                }
            }


            // Bottom
            if (this.options.bottom) {

                var diacriticsBottomLength = diacriticsBottom.length - 1;
                var howManyBottoms = this.options.maxHeight - Math.random() * ((this.options.randomization / 100) * this.options.maxHeight);
                for (var j = 0; j < howManyBottoms; j++) {
                    currentChar += diacriticsBottom[Math.floor(Math.random() * diacriticsBottomLength)]
                }

            }


            result += currentChar;
        }
        return result;
    },

    decode: function (input) {
        var result = '',
            charCode;

        //Check if other, none diametric chars could get accidently cut.
        for (i in input) {
            charCode = input[i].charCodeAt(0);
            if (charCode < 768 || charCode > 865) {
                result += input[i];
            }
        }
        return result;
    },

    options: {
        top: true,
        middle: true,
        bottom: true,
        maxHeight: 15,   // How many diacritic marks shall we put on top/bottom?
        randomization: 100 // 0-100%. maxHeight 100 and randomization 20%: the height goes from 80 to 100. randomization 70%, height goes from 30 to 100.
    }
};

module.exports = creepify;
},{}],3:[function(require,module,exports){
//TODO: Check if no Diacritics were released since original release of repo
//TODO: Add/Remove/Update Options

const flip = {
    encode: function (text) {
        var ret = [],
            ch;

        for (var i = 0, len = text.length; i < len; i++) {
            ch = text.charAt(i);

            // combining diacritical marks: combine with previous character for ä,ö,ü,...
            if (i > 0 && (ch == '\u0324' ||
                ch == '\u0317' ||
                ch == '\u0316' ||
                ch == '\u032e')) {
                ch = this.map[text.charAt(i - 1) + ch];
                ret.pop();

            } else {
                ch = this.map[ch];
                if (typeof(ch) == "undefined") {
                    ch = text.charAt(i);
                }
            }

            ret.push(ch);


        }

        return ret.reverse().join("");
    },

    // same as encode(), for now...
    decode: function (text) {
        var ret = [],
            ch;

        for (var i = 0, len = text.length; i < len; i++) {
            ch = text.charAt(i);

            // combining diacritical marks: combine with previous character for ä,ö,ü,...
            if (i > 0 && (ch == '\u0324' ||
                ch == '\u0317' ||
                ch == '\u0316' ||
                ch == '\u032e')) {
                ch = this.map[text.charAt(i - 1) + ch];
                ret.pop();

            } else {
                ch = this.map[ch];
                if (typeof(ch) == "undefined") {
                    ch = text.charAt(i);
                }
            }

            ret.push(ch);
        }
        return ret.reverse().join("");
    },

    map: {
        "1": "⇂",
        "2": "ᄅ",
        "3": "Ɛ",
        "4": "ㄣ",
        "5": "ގ",
        "6": "9",
        "7": "ㄥ",
        "9": "6",
        "a": "ɐ",
        "b": "q",
        "c": "ɔ",
        "d": "p",
        "e": "ǝ",
        "f": "ɟ",
        "g": "ɓ",
        "h": "ɥ",
        "i": "ı",
        "j": "ɾ",
        "k": "ʞ",
        "l": "l",
        "m": "ɯ",
        "n": "u",
        "r": "ɹ",
        "t": "ʇ",
        "v": "ʌ",
        "w": "ʍ",
        "y": "ʎ",
        "A": "∀",
        "B": "ᙠ",
        "C": "Ɔ",
        "D": "ᗡ",
        "E": "Ǝ",
        "F": "Ⅎ",
        "G": "⅁",
        "J": "ſ",
        "K": "⋊",
        "L": "˥",
        "M": "W",
        "P": "Ԁ",
        "Q": "Ό",
        "R": "ᴚ",
        "T": "⊥",
        "U": "∩",
        "V": "Λ",
        "Y": "⅄",
        "&": "⅋",
        ".": "˙",
        "\"": "„",
        ";": "؛",
        "[": "]",
        "(": ")",
        "{": "}",
        "?": "¿",
        "!": "¡",
        "'": ",",
        "<": ">",
        "‾": "_",
        "¯": "_",
        "‿": "⁀",
        "⁅": "⁆",
        "∴": "∵",
        "\r": "\n",
        "ß": "ᙠ",
        "̈": "̤",
        "ä": "ɐ̤",
        "ö": "o̤",
        "ü": "n̤",
        "Ä": "∀̤",
        "Ö": "O̤",
        "Ü": "∩̤",
        "´": " ̗",
        "é": "ǝ̗",
        "á": "ɐ̗",
        "ó": "o̗",
        "ú": "n̗",
        "É": "Ǝ̗",
        "Á": "∀̗",
        "Ó": "O̗",
        "Ú": "∩̗",
        "`": " ̖",
        "è": "ǝ̖",
        "à": "ɐ̖",
        "ò": "o̖",
        "ù": "n̖",
        "È": "Ǝ̖",
        "À": "∀̖",
        "Ò": "O̖",
        "Ù": "∩̖",
        "^": " ̮",
        "ê": "ǝ̮",
        "â": "ɐ̮",
        "ô": "o̮",
        "û": "n̮",
        "Ê": "Ǝ̮",
        "Â": "∀̮",
        "Ô": "O̮",
        "Û": "∩̮",
        "⇂": "1",
        "ᄅ": "2",
        "Ɛ": "3",
        "ㄣ": "4",
        "ގ": "5",
        "ㄥ": "7",
        "ɐ": "a",
        "q": "b",
        "ɔ": "c",
        "p": "d",
        "ǝ": "e",
        "ɟ": "f",
        "ɓ": "g",
        "ɥ": "h",
        "ı": "i",
        "ɾ": "j",
        "ʞ": "k",
        "ɯ": "m",
        "u": "n",
        "ɹ": "r",
        "ʇ": "t",
        "ʌ": "v",
        "ʍ": "w",
        "ʎ": "y",
        "∀": "A",
        "ᙠ": "ß",
        "Ɔ": "C",
        "ᗡ": "D",
        "Ǝ": "E",
        "Ⅎ": "F",
        "⅁": "G",
        "ſ": "J",
        "⋊": "K",
        "˥": "L",
        "W": "M",
        "Ԁ": "P",
        "Ό": "Q",
        "ᴚ": "R",
        "⊥": "T",
        "∩": "U",
        "Λ": "V",
        "⅄": "Y",
        "⅋": "&",
        "˙": ".",
        "„": "\"",
        "؛": ";",
        "]": "[",
        ")": "(",
        "}": "{",
        "¿": "?",
        "¡": "!",
        ",": "'",
        ">": "<",
        "_": "¯",
        "⁀": "‿",
        "⁆": "⁅",
        "∵": "∴",
        "\n": "\r",
        "̤": "̈",
        "ɐ̤": "ä",
        "o̤": "ö",
        "n̤": "ü",
        "∀̤": "Ä",
        "O̤": "Ö",
        "∩̤": "Ü",
        " ̗": "´",
        "ǝ̗": "é",
        "ɐ̗": "á",
        "o̗": "ó",
        "n̗": "ú",
        "Ǝ̗": "É",
        "∀̗": "Á",
        "O̗": "Ó",
        "∩̗": "Ú",
        " ̖": "`",
        "ǝ̖": "è",
        "ɐ̖": "à",
        "o̖": "ò",
        "n̖": "ù",
        "Ǝ̖": "È",
        "∀̖": "À",
        "O̖": "Ò",
        "∩̖": "Ù",
        " ̮": "^",
        "ǝ̮": "ê",
        "ɐ̮": "â",
        "o̮": "ô",
        "n̮": "û",
        "Ǝ̮": "Ê",
        "∀̮": "Â",
        "O̮": "Ô",
        "∩̮": "Û"
    }// TODO: flip more letters with stuff around them. See http://en.wikipedia.org/wiki/Combining_character

}
module.exports = flip;
},{}]},{},[1])(1)
});