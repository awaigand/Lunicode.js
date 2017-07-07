 var roundsquares = {
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
    }
module.exports = roundsquares;