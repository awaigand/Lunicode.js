# Lunicode tiny

[![forthebadge](http://forthebadge.com/images/badges/oooo-kill-em.svg)](http://forthebadge.com) 
[![NPM](https://nodei.co/npm/lunicode-tiny.png?compact=true)](https://npmjs.org/package/lunicode-tiny)
[![forthebadge](http://forthebadge.com/images/badges/compatibility-betamax.svg)](http://forthebadge.com)

Provides a tiny effect for certain characters in strings, so they seem they are "tiny". This is mainly for testing, emergency purposes (when you dont want to resort to css transforms.) or art.
These tiny characters are not based on the classical small caps, but on the phoenetics extension block of Unicode (Phonetic Extensions U+1D00..U+1D7F). Thus, there are no lower case letters.

:warning:: This seems to depend on the font/browser you are using. So the effect cant be guaranteed on the client side. 

# Usage

## Encode

`tiny.encode(string)` Replaces all chars with their equivalent but in 'small caps'. So the information about what case the letter originally was is lost. All chars are turned into their capital counterparts on decode.  So it turns this sentence: "Yes, just practising my girlish shrieks. I’m entering an improbable competition of some sort."

Into "ʏᴇꜱ, ᴊᴜꜱᴛ ᴘʀᴀᴄᴛɪꜱɪɴɢ ᴍʏ ɢɪʀʟɪꜱʜ ꜱʜʀɪᴇᴋꜱ. ɪ’ᴍ ᴇɴᴛᴇʀɪɴɢ ᴀɴ ɪᴍᴘʀᴏʙᴀʙʟᴇ ᴄᴏᴍᴘᴇᴛɪᴛɪᴏɴ ᴏꜰ ꜱᴏᴍᴇ ꜱᴏʀᴛ." 


## Decode
`tiny.decode(string)` It removes the tiny effect. However, all letters will be upper-case, even if they used to be lower case.