// Lunicode.js
// from lunicode.com
// on GitHub: https://github.com/combatwombat/Lunicode.js
// Copyright © 2012 Robert Gerlach - robsite.net
const creepify = require('lunicode-creepify');
const flip = require('lunicode-flip');
const mirror = require('lunicode-mirror');
const bubbles = require('lunicode-bubbles');
const bent = require('lunicode-bent');
const squares = require('lunicode-squares');
const tiny = require('lunicode-tiny');
const roundsquares = require("lunicode-roundsquares");

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
    squares: squares,
    
    
    // Same as squares, just round.
    roundsquares: roundsquares,
    
    
    // Weird looking alternatives to most characters
    bent: bent ,
    
    
    // Tiny Capitals
    tiny: tiny,

   
    
    
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