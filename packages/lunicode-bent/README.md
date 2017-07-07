# Lunicode bent

[![forthebadge](http://forthebadge.com/images/badges/oooo-kill-em.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/compatibility-betamax.svg)](http://forthebadge.com)
[![NPM](https://nodei.co/npm/lunicode-bent.png?compact=true)](https://npmjs.org/package/lunicode-bent)

Provides a bent effect for certain characters in strings, so they seem they are "bent". Basically a little wobbly. This is mainly for testing, emergency purposes (when you dont want to resort to css transforms.) or art.

# Usage

## Encode

`bent.encode(string)` Replaces all chars with their equivalent but bented. So it turns this sentence: "Nolite te bastardes carborundorum."
Into "ហօӀìէҽ էҽ ҍąʂէąɾժҽʂ çąɾҍօɾմղժօɾմʍ" Obviously, if you bent it again, it becomes normal again.


## Decode
`bent.decode(string)` Just a Ptr to the Encode function. It was already here when I got here (even though it was duplicate code), so I'll keep it for now.