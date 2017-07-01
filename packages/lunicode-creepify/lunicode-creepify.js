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