[![Build Status](https://travis-ci.org/abdennour/chocolata.svg?branch=master)](https://travis-ci.org/abdennour/chocolata)
[![Coverage Status](https://coveralls.io/repos/github/abdennour/chocolata/badge.svg?branch=master)](https://coveralls.io/github/abdennour/chocolata?branch=master)

[![Chocolata JS LOGO ](https://raw.githubusercontent.com/abdennour/s3/master/images/chocolata-js.png)](https://github.com/abdennour/chocolata)


# Overview :

An Javascript Client-side API that handles adding, getting & removing cookies to/from `document.cookie`.

It handles also complex data structure. Indeed, You can persist not only `String` but also `Objects` in  `document.cookie`.

# Install

```bash
npm install chocolata --save;
```

# Example :

## NPM environment :


```js
import {getItem, setItem, removeItem} from 'chocolata';

setItem('token', '1234');
// document.cookie ==> "token=1234"

setItem('otherToken', '5678')
// document.cookie ==> "token=1234; otherToken=5678"

//--- Handle Objects ---

setItem('userInfo', {
  firstName: 'Ahmed',
  lastName: 'Toumi',  
});

// "token=1234; otherToken=5678; userInfo={"firstName":"Ahmed","lastName":"Toumi"}"

const {firstName, lastName} = getItem('userInfo');
console.log(`Welcome back ${firstName} ${lastName} !`)
```

## Non-NPM environment:

In this case you need to import the script as CDN.

Also,  examples above are still valid. However , instead of `import ..` , `window.Chocolata` is the namespace of this library:

```html
<script src="https://cdn.rawgit.com/abdennour/chocolata/39513fa4/cdn/chocolata-latest.min.js"></script>

<script>

  Chocolata.setItem('userInfo', {
    firstName: 'Ahmed',
    lastName: 'Toumi',  
  });

  // "token=1234; otherToken=5678; userInfo={"firstName":"Ahmed","lastName":"Toumi"}"

  const {firstName, lastName} = Chocolata.getItem('userInfo');

  console.log(
    `Welcome back ${firstName} ${lastName} !`
  )
</script>
```

# License:

MIT .
