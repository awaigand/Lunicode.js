// Lunicode.js
// from lunicode.com
// on GitHub: https://github.com/combatwombat/Lunicode.js
// Copyright © 2012 Robert Gerlach - robsite.net
const creepify = require('lunicode-creepify');
const flip = require('lunicode-flip');
const mirror = require('lunicode-mirror');
const bubbles = require('lunicode-bubbles');

function Lunicode() {
  
  this.tools = {

    creepify:creepify,
    
    flip:flip,
    
    mirror: mirror,
    
    // Circles around Letters. Uses special circle characters for some letters and combining characters for the rest
    // Thanks to
    // - Alan Wood: http://www.alanwood.net/unicode/enclosed_alphanumerics.html
    bubbles: bubbles,
    
    
    
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