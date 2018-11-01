/**
 
 +-----------+-----------+
 |           |           |
 |     j     |           |
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

class j extends Key {
  constructor() {
    super({
      name: 'j',
      type: KeyType.LETTER,
      description: 'lowercase of J',
      content: {center: 'j'},
      actions: {
        self: j,
        with: {shift: qwerty.J},
        after: {capslock: qwerty.J}
      },
      style: {widthRatio: 1}
    })
  }
}

export default j
