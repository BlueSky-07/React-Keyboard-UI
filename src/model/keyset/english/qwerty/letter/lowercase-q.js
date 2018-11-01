/**
 
 +-----------+-----------+
 |           |           |
 |     q     |           |
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

class q extends Key {
  constructor() {
    super({
      name: 'q',
      type: KeyType.LETTER,
      description: 'lowercase of Q',
      content: {center: 'q'},
      actions: {
        self: q,
        with: {shift: qwerty.Q},
        after: {capslock: qwerty.Q}
      },
      style: {widthRatio: 1}
    })
  }
}

export default q
