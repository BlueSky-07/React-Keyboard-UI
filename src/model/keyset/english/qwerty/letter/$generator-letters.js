const fs = require('fs')

const template =
    `/**
 
 +-----------+-----------+
 |           |           |
 |     $KEY$     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |           |
 |           |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import $KEYSCHEME$ from '../$KEYSCHEME$'

class $KEY$ extends Key {
  constructor() {
    super({
      name: '$KEY$',
      type: KeyType.LETTER,
      description: '$CASENAME$ of $ANOTHERCASE$',
      content: {center: '$KEY$'},
      actions: {
        self: $KEY$,
        with: {shift: $KEYSCHEME$.$ANOTHERCASE$},
        after: {capslock: $KEYSCHEME$.$ANOTHERCASE$}
      },
      style: {widthRatio: 1}
    })
  }
}

export default $KEY$
`

// $KEY$: key name
// $KEYSCHEME$: key scheme name
// $ANOTHERCASE$: another case of key
// $CASENAME$: case name
// filename: $CASENAME$-$KEY$

const keyscheme = 'qwerty'
const alphabet = 'x'.repeat(26).split('').map((c, idx) => String.fromCharCode('a'.charCodeAt(0) + idx))
const ALPHABET = alphabet.map(c => c.toUpperCase())

let casename = 'lowercase'
alphabet.forEach(key => {
  const anothercase = key.toUpperCase()
  fs.writeFile(
      `${casename}-${key.toLowerCase()}.js`,
      template
          .replace(/\$KEY\$/g, key)
          .replace(/\$KEYSCHEME\$/g, keyscheme)
          .replace(/\$ANOTHERCASE\$/g, anothercase)
          .replace(/\$CASENAME\$/g, casename)
      ,
      e => {
        console.log(key, 'generated', (e ? 'un' : '') + 'successfully')
      }
  )
})

casename = 'uppercase'
ALPHABET.forEach(key => {
  const anothercase = key.toLowerCase()
  fs.writeFile(
      `${casename}-${key.toLowerCase()}.js`,
      template
          .replace(/\$KEY\$/g, key)
          .replace(/\$KEYSCHEME\$/g, keyscheme)
          .replace(/\$ANOTHERCASE\$/g, anothercase)
          .replace(/\$CASENAME\$/g, casename)
      ,
      e => {
        console.log(key, 'generated', (e ? 'un' : '') + 'successfully')
      }
  )
})