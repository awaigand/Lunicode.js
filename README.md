# Lunicode.js
[![forthebadge](http://forthebadge.com/images/badges/gluten-free.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/contains-technical-debt.svg)](http://forthebadge.com)

A JavaScript Library to convert text in various amusing ways, using unicode features.  
&#x2d9;&#x73;&#x28e;&#x250;&#x28d; &#x253;&#x75;&#x131;&#x73;&#x6e;&#x26f;&#x250; &#x287;&#x6e;&#x71; &#x73;&#x73;&#x1dd;&#x6c;&#x1dd;&#x73;&#x6e; &#x73;&#x6e;&#x6f;&#x131;&#x279;&#x250;&#x28c; &#x75;&#x131; &#x287;&#x78;&#x1dd;&#x287; &#x287;&#x279;&#x1dd;&#x28c;&#x75;&#x6f;&#x254; &#x6f;&#x287; &#x28e;&#x279;&#x250;&#x279;&#x71;&#x131;&#x2e5; &#x287;&#x64;&#x131;&#x279;&#x254;&#x53;&#x250;&#x28c;&#x250;&#x17f; &#x2200;

- Extracted from [lunicode.com](http://lunicode.com).
- Forked from https://github.com/combatwombat/Lunicode.js

## Goals

### Normal

- [X] Get out of bed
- [X] Make this list
- [ ] Modularize the code
- [ ] NPM package it

### Lofty

- [ ] Add additional features
- [ ] Explain details and history of why and how they work (ref. [unicode.org](http://unicode.org/faq/char_combmark.html))
- [ ] Lose weight

## Updates

 - Extracted, cleaned up and NPM Packaged creepify, flip, mirror, bent, bubbles. 
 - Added simple browserify build script for main repo.
 - Using [lerna](https://lernajs.io/) to continuously tear ludicode apart, limb by limb.

## Usage

If you want all functionality, use `./dist/lunicode.js` as a non-npm static dependency for the time being.
If you only want creepify, use the ludicode-creepify package.

Using browserify, if you use the former option a global variable called `lunicode` will be injected, behaving
the same as described below. If you have AMD or commonjs available, you can use them respectively.

```
	//Assuming window.lunicode is set via the file in dist
	var luni = new lunicode(); //yes, I know. Should be Lunicode. I will remove the need for a constructor next release anyway. (no 	promises!)

	// Encode text. Use one of the effects shown below. Here it's "flip"
	var encodedText = luni.tools.flip.encode("Hello World");  // plɹoM ollǝH
   
   // Decode text back to plain ASCII (or reverse encoding)
    var plainText = luni.tools.mirror.decode("ƚxɘT ɿoɿɿiM");  // Mirror Text
    
    // Creepify has a few options. Set them before encoding:
    luni.tools.creepify.options.top = true; 	// add diacritics on top. Default: true 
    luni.tools.creepify.options.middle = true;	// add diacritics in the middle. Default: true 
    luni.tools.creepify.options.bottom = true;	// add diacritics on the bottom. Default: true
    luni.tools.creepify.options.maxHeight = 15; // How many diacritic marks shall we put on top/bottom? Default: 15
    luni.tools.creepify.options.randomization = 100; // 0-100%. maxHeight 100 and randomization 20%: the height goes from 80 to 100. randomization 70%: height goes from 30 to 100. Default: 100

    // To convert Unicode text to HTML, use luni.getHTML(text);
    // Also converts \n to <br>\n and multiple spaces to &nbsp; &nbsp; &nbsp; ...
    var html = luni.getHTML("ǝpoɔıu∩̤"); // &#x1dd;&#x70;&#x6f;&#x254;&#x131;&#x75;&#x2229;&#x324;

```

# Modules

:white_check_mark: means they have their own npm package.

## flip :white_check_mark:

[![NPM](https://nodei.co/npm/lunicode-flip.png?compact=true)](https://npmjs.org/package/lunicode-flip)

Flips/Rotates text, including numbers (12345) and some special characters: äöü éáú ÄÖÜ ß ô

o̮ ᙠ ∩̤O̤∀̤ n̗ɐ̗ǝ̗ n̤o̤ɐ̤ :sɹǝʇɔɐɹɐɥɔ lɐıɔǝds ǝɯos puɐ (ގㄣƐᄅ⇂) sɹǝqɯnu ɓuıpnlɔuı 'ʇxǝʇ sǝʇɐʇoᴚ/sdılℲ

## mirror :white_check_mark:

[![NPM](https://nodei.co/npm/lunicode-mirror.png?compact=true)](https://npmjs.org/package/lunicode-mirror)

Mirrors text horizontally. äöü ß èàù. Käseküchlein.

.ᴎiɘ|ʜɔüʞɘꙅɒ̈⋊ .úɒ́ɘ́ ᙠ üöɒ̈ .ʏ||ɒƚᴎoƹiɿoʜ ƚxɘƚ ꙅɿoɿɿiM

## creepify :white_check_mark:
[![NPM](https://nodei.co/npm/lunicode-creepify.png?compact=true)](https://npmjs.org/package/lunicode-creepify)

Adds  
	diacritics
	

Ą̵̛͎̗͎̯͕̺̭͍̩͐̄̄͗̿͛̔̀́̋̄͜d̷̨͉͇̞̲̥͈̝̺̘̪̥̟͚̘̫̑̋̎͜͜ḑ̵̡̛̤̱̣̼̞̥̻͕͗̔̀̐́̆̐̓͌̊͛̐̉̚͝s̴̯̤̓̐͒̓̉͆̿̔̚͝
	̶̭̼͂̃d̴̡̰̯̲̣̘͉͉̯̣̥͋̈́̊̏̓̀͒̚i̷̮̭͋̈́̋͋̉͊̄̓͂̕a̶̳̣̲̓̊͋c̵̡̛̗͕̖̻͇̪͆̌͒͊͛͌̽̐̇̇̀͊̂̈͒̚͜͠ṙ̷̡̹̱̜̖̦̭ĩ̵͍̪̘͚̗̰͓̙͛͆̽̾͒̏̀͗̊̊́̍̉͒̊ţ̶̙͙̙͉̱́̀̈́̿͛͊̎̓̉̕̕͜͝i̵̛̞̭̭̮̱̬̯̙̖̺̼͑͛ͅć̶̢̡̫̻̪̩̤̱̠̰̹̙͒́̀͐͐̚̚͘͝͝ṩ̸̢̧̠͖̩͚̯̳͓̻̪̻̞

[README](packages/lunicode-creepify/README.md)
## bubbles :white_check_mark:
[![NPM](https://nodei.co/npm/lunicode-bubbles.png?compact=true)](https://npmjs.org/package/lunicode-bubbles)
Bubbles around normal characters. Uses combining characters for everything else.

Ⓑⓤⓑⓑⓛⓔⓢ ⓐⓡⓞⓤⓝⓓ ⓝⓞⓡⓜⓐⓛ ⓒⓗⓐⓡⓐⓒⓣⓔⓡⓢ    .⃝ Ⓤⓢⓔⓢ ⓒⓞⓜⓑⓘⓝⓘⓝⓖ ⓒⓗⓐⓡⓐⓒⓣⓔⓡⓢ ⓕⓞⓡ ⓔⓥⓔⓡⓨⓣⓗⓘⓝⓖ ⓔⓛⓢⓔ    .⃝

## squares :white_check_mark:
[![NPM](https://nodei.co/npm/lunicode-squares.png?compact=true)](https://npmjs.org/package/lunicode-squares)

Squares, via combining characters.

S⃞    q⃞    u⃞    a⃞    r⃞    e⃞    s⃞    ,⃞     v⃞    i⃞    a⃞     c⃞    o⃞    m⃞    b⃞    i⃞    n⃞    i⃞    n⃞    g⃞     c⃞    h⃞    a⃞    r⃞    a⃞    c⃞    t⃞    e⃞    r⃞    s⃞    .⃞

## roundsquares :white_check_mark:

[![NPM](https://nodei.co/npm/lunicode-roundsquares.png?compact=true)](https://npmjs.org/package/lunicode-roundsquares)

Round squares, via combining characters.

R⃣   o⃣   u⃣   n⃣   d⃣    s⃣   q⃣   u⃣   a⃣   r⃣   e⃣   s⃣   ,⃣    v⃣   i⃣   a⃣    c⃣   o⃣   m⃣   b⃣   i⃣   n⃣   i⃣   n⃣   g⃣    c⃣   h⃣   a⃣   r⃣   a⃣   c⃣   t⃣   e⃣   r⃣   s⃣   .⃣

## bent :white_check_mark:

[![NPM](https://nodei.co/npm/lunicode-bent.png?compact=true)](https://npmjs.org/package/lunicode-bent)

Wonky alternatives to the usual characters.

చօղҟվ ąӀէҽɾղąէìѵҽʂ էօ էհҽ մʂմąӀ çհąɾąçէҽɾʂ.

## tiny :white_check_mark:

[![NPM](https://nodei.co/npm/lunicode-tiny.png?compact=true)](https://npmjs.org/package/lunicode-tiny)

Tiny Capitals.

ᴛɪɴʏ ᴄᴀᴘɪᴛᴀʟꜱ.



# Links and Thanks

## Original

This list is from the original Repo. Comments by A.W. in [].
<ul>
	<li><a href="http://www.fileformat.info/">FileFormat.info</a> - The best Unicode reference <span style="color:green">- [✔️ Agreed - Last checked: 01-07-2017]</span></li>
	<li><a href="http://en.wikipedia.org/wiki/Transformation_of_text">Wikipedia: Transformation of Text</a> - Table for flipped characters and others infos - [✔️ <span style="color:green">Seems to be partly outdated, but still usable - Last checked: 01-07-2017]</span></li>
	<li><a href="http://www.reddit.com/r/unicode">reddit.com/r/unicode</a> - The webs biggest unicode-for-fun community (needs more members) <span style="color:green">- [✔️ Agreed Last checked: 01-07-2017]</span></li>
	<li><a href="http://www.revfad.com/flip.html">David Fadens Flip</a> - Initial inspiration and characters <span style="color:green">- [✔️ Simple, but still online! Last checked: 01-07-2017]</span></li>
	<li><a href="http://upsidedown.info/">Thomas Schilds upsidedown.info</a> - Inspiration and comparison <span style="color:green">- [✔️ - Last checked: 01-07-2017]</span> </li>
	<li><a href="http://www.macchiato.com/unicode/mirrored-ascii">Macchiato - Mirrored ASCII</a> - Initial codepoints for mirrored text - [❗ Images Down - Last checked: 01-07-2017] </li>
	<li><a href="http://www.alanwood.net/unicode/enclosed_alphanumerics.html">Alan Wood’s Unicode Resources</a> - Codepoints for Bubble Text  <span style="color:green">- [✔️ - Last checked: 01-07-2017]</span> </li>
	<li><a href="http://en.wikipedia.org/wiki/Combining_character">Wikipedia: Combining Character</a> - For Creepify, Upsidedown Umlauts, Squares, ... - [✔️ Last checked: 01-07-2017]</li>
	<li><a href="http://blogs.msdn.com/b/michkap/archive/2006/02/17/533929.aspx">Michael Kaplan's "What do you get when you combine a base character with a buttload of diacritics?"</a> -  Idea for creepify  [ ❌ Down :( - Last checked: 01-07-2017]</li>
	<li><a href="http://unicodeemoticons.com/">Unicode emoticons</a> - [✔️ Outdated Last checked: 01-07-2017], <a href="http://www.planetminecraft.com/blog/collection-of-unicode-faces/">Collection of unicode faces</a> - [✔️ <span style="color:green">  Outdated - Last checked: 01-07-2017]</span> and <a href="https://gist.github.com/157796">Unicode smileys</a> - [✔️ Maybe Outdated? Has useful information anyway - Last checked: 01-07-2017]</li>					
	<li><a href="http://funicode.com">funicode.com</a> - Idea and lower case characters for Bent - [✔️ - Last checked: 01-07-2017] </span </li>
</ul>
