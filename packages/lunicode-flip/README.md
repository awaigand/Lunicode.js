# Lunicode Flip

[![forthebadge](http://forthebadge.com/images/badges/uses-badges.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/powered-by-electricity.svg)](http://forthebadge.com)
[![NPM](https://nodei.co/npm/lunicode-flip.png?compact=true)](https://npmjs.org/package/lunicode-flip)

Provides a flip effect for certain characters in strings, so they seem they are "on their head".  This is mainly for testing or emergency purposes (when you dont want to resort to css transforms.

# Usage

## Encode

`flip.encode(string)` replaces all chars with their equivalent but on their heads. So it turns this sentence: "There is no drug on earth that can make life meaningful".

Into "lnɟɓuıuɐǝɯ ǝɟıl ǝʞɐɯ uɐɔ ʇɐɥʇ ɥʇɹɐǝ uo ɓnɹp ou sı ǝɹǝɥ⊥" Obviously, if you flip it again, it becomes normal again.


## Decode
`flip.decode(string)` Just a Ptr to the Encode function. It was already here when I got here, so I'll keep it for now.