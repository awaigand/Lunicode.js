# Lunicode Mirror

[![forthebadge](http://forthebadge.com/images/badges/designed-in-ms-paint.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/compatibility-betamax.svg)](http://forthebadge.com)
[![NPM](https://nodei.co/npm/lunicode-mirror.png?compact=true)](https://npmjs.org/package/lunicode-mirror)

Provides a mirror effect for certain characters in strings, so they seem they are "mirrored".  This is mainly for testing, emergency purposes (when you dont want to resort to css transforms.) or art.

# Usage

## Encode

`mirror.encode(string)` Replaces all chars with their equivalent but mirrored. So it turns this sentence: "Turtles all the way down."
Into ".ᴎwob ʏɒw ɘʜƚ ||ɒ ꙅɘ|ƚɿuT" Obviously, if you mirror it again, it becomes normal again.


## Decode
`mirror.decode(string)` Just a Ptr to the Encode function. It was already here when I got here (even though it was duplicate code), so I'll keep it for now.