# Lunicode squares

[![forthebadge](http://forthebadge.com/images/badges/oooo-kill-em.svg)](http://forthebadge.com) 
[![NPM](https://nodei.co/npm/lunicode-squares.png?compact=true)](https://npmjs.org/package/lunicode-squares)
[![forthebadge](http://forthebadge.com/images/badges/compatibility-betamax.svg)](http://forthebadge.com)

Provides a squares effect for certain characters in strings, so they seem they are in "squares". This is mainly for testing, emergency purposes (when you dont want to resort to css transforms.) or art.

:warning:: This seems to depend on the font/browser you are using. So the effect cant be guaranteed on the client side. 

# Usage

## Encode

`squares.encode(string)` Replaces all chars with their equivalent but in squares. So it turns this sentence: "If they have to die, let it be fast. You might even provide a Heaven for them. We need You for that. Hell we can make for ourselves."

Into "I⃞    f⃞     t⃞    h⃞    e⃞    y⃞     h⃞    a⃞    v⃞    e⃞     t⃞    o⃞     d⃞    i⃞    e⃞    ,⃞     l⃞    e⃞    t⃞     i⃞    t⃞     b⃞    e⃞     f⃞    a⃞    s⃞    t⃞    .⃞     Y⃞    o⃞    u⃞     m⃞    i⃞    g⃞    h⃞    t⃞     e⃞    v⃞    e⃞    n⃞     p⃞    r⃞    o⃞    v⃞    i⃞    d⃞    e⃞     a⃞     H⃞    e⃞    a⃞    v⃞    e⃞    n⃞     f⃞    o⃞    r⃞     t⃞    h⃞    e⃞    m⃞    .⃞     W⃞    e⃞     n⃞    e⃞    e⃞    d⃞     Y⃞    o⃞    u⃞     f⃞    o⃞    r⃞     t⃞    h⃞    a⃞    t⃞    .⃞     H⃞    e⃞    l⃞    l⃞     w⃞    e⃞     c⃞    a⃞    n⃞     m⃞    a⃞    k⃞    e⃞     f⃞    o⃞    r⃞     o⃞    u⃞    r⃞    s⃞    e⃞    l⃞    v⃞    e⃞    s⃞    .⃞" 


## Decode
`squares.decode(string)` It removes the squares. 