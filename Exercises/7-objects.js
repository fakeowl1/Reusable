'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = function() {
  // Init objects
  const obj1 = { name: 'Linus', };
  let obj2 = { name: 'Satochi' };

  // Just change value of field `name`
  obj1.name = 'Richard';
  obj2.name = 'Vitalik';

  // Obj1 is a variable we can change data in it
  obj2 = { name: 'Lennart' };
};

module.exports = { fn };
