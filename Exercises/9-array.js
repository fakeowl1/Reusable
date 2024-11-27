'use strict';

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */

const phonebook = [
  { name: 'Linus Torvalds', phone: '+38056323498' },
  { name: 'Richard Stallman', phone: '+3808384834' },
  { name: 'Eugen Rochko', phone: '+380734190748' },
];

const findPhoneByName = (name) => {
  for (const record of phonebook) {
    if (record.name === name) return record;
  }
};

module.exports = { phonebook, findPhoneByName };
