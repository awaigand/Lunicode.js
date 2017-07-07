# Lunicode squares

[![forthebadge](http://forthebadge.com/images/badges/designed-in-ms-paint.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/compatibility-betamax.svg)](http://forthebadge.com)
[![NPM](https://nodei.co/npm/lunicode-squares.png?compact=true)](https://npmjs.org/package/lunicode-squares)

Provides a mirror effect for certain characters in strings, so they seem they are "mirrored".  This is mainly for testing, emergency purposes (when you dont want to resort to css transforms.) or art.

# Usage

## Encode

`squares.encode(string)` Replaces all chars in string with their bubbled equivalent. So it turns this sentence: "May the odds be ever in your favour"
Into "Ⓜⓐⓨ ⓣⓗⓔ ⓞⓓⓓⓢ ⓑⓔ ⓔⓥⓔⓡ ⓘⓝ ⓨⓞⓤⓡ ⓕⓐⓥⓞⓡ". You have to use the decode function to remove the squares..


## Decode
`squares.decode(string)` Reverses the effect of encode. So it turns Ⓜⓐⓨ ⓣⓗⓔ ⓞⓓⓓⓢ ⓑⓔ ⓔⓥⓔⓡ ⓘⓝ ⓨⓞⓤⓡ ⓕⓐⓥⓞⓡ back to "May the odds be ever in your favour".