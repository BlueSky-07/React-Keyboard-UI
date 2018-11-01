/**
 
 +-----------+-----------+
 |           |           |
 |     a     |           |
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
import qwerty from '../qwerty'

class a extends Key {
  constructor() {
    super({
      name: 'a',
      type: KeyType.LETTER,
      description: 'lowercase of A',
      content: {center: 'a'},
      actions: {
        self: a,
        with: {shift: qwerty.A},
        after: {capslock: qwerty.A}
      },
      style: {widthRatio: 1}
    })
  }
}

export default a
