/**
 
 +-----------+-----------+
 |           |           |
 |     b     |           |
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

class b extends Key {
  constructor() {
    super({
      name: 'b',
      type: KeyType.LETTER,
      description: 'lowercase of B',
      content: {center: 'b'},
      actions: {
        self: b,
        with: {shift: qwerty.B},
        after: {capslock: qwerty.B}
      },
      style: {widthRatio: 1}
    })
  }
}

export default b
