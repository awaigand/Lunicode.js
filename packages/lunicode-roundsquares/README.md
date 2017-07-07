# Lunicode roundsquares

[![forthebadge](http://forthebadge.com/images/badges/oooo-kill-em.svg)](http://forthebadge.com) 
[![NPM](https://nodei.co/npm/lunicode-roundsquares.png?compact=true)](https://npmjs.org/package/lunicode-squares)
[![forthebadge](http://forthebadge.com/images/badges/compatibility-betamax.svg)](http://forthebadge.com)

Provides a squares effect for certain characters in strings, so they seem they are in "roundsquares". This is mainly for testing, emergency purposes (when you dont want to resort to css transforms.) or art.

:warning:: This seems to depend on the font/browser you are using. So the effect cant be guaranteed on the client side. 

# Usage

## Encode

`roundsquares.encode(string)` Replaces all chars with their equivalent but in roundsquares. So it turns this sentence: "Before we say goodbye, she kisses me with everything she has. And I try to kiss her back with everything I want."

Into "B⃣   e⃣   f⃣   o⃣   r⃣   e⃣    w⃣   e⃣    s⃣   a⃣   y⃣    g⃣   o⃣   o⃣   d⃣   b⃣   y⃣   e⃣   ,⃣    s⃣   h⃣   e⃣    k⃣   i⃣   s⃣   s⃣   e⃣   s⃣    m⃣   e⃣    w⃣   i⃣   t⃣   h⃣    e⃣   v⃣   e⃣   r⃣   y⃣   t⃣   h⃣   i⃣   n⃣   g⃣    s⃣   h⃣   e⃣    h⃣   a⃣   s⃣   .⃣    A⃣   n⃣   d⃣    I⃣    t⃣   r⃣   y⃣    t⃣   o⃣    k⃣   i⃣   s⃣   s⃣    h⃣   e⃣   r⃣    b⃣   a⃣   c⃣   k⃣    w⃣   i⃣   t⃣   h⃣    e⃣   v⃣   e⃣   r⃣   y⃣   t⃣   h⃣   i⃣   n⃣   g⃣    I⃣    w⃣   a⃣   n⃣   t⃣   .⃣" 


## Decode
`roundsquares.decode(string)` It removes the roundsquares. 