# fd-setattr

[![Build Status](https://travis-ci.org/fp-dom/fd-setattr.svg)](https://travis-ci.org/fp-dom/fd-setattr) [![npm version](https://badge.fury.io/js/fd-setattr.svg)](http://badge.fury.io/js/fd-setattr)
> Add or change the attributes of a DOM element in a functional way.


## Installation

`npm install fd-setattr --save`

## Usage

```js
let setattr = require('fd-setattr');

let hide = setattr('hidden', true);

hide(img); 

```

## API

```
setAttr :: name -> value -> elem
```

A curried function that takes in:

* name  -> Name of the attribute.

* value -> Value for the attribute.

* elem  -> DOM element.

