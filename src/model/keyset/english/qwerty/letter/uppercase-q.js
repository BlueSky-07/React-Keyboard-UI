/**
 
 +-----------+-----------+
 |           |           |
 |     Q     |           |
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

class Q extends Key {
  constructor() {
    super({
      name: 'Q',
      type: KeyType.LETTER,
      description: 'uppercase of q',
      content: {center: 'Q'},
      actions: {
        self: Q,
        with: {shift: qwerty.q},
        after: {capslock: qwerty.q}
      },
      style: {widthRatio: 1}
    })
  }
}

export default Q
