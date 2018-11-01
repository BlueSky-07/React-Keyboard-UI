/**
 
 +-----------+-----------+
 |           |           |
 |     w     |           |
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

class w extends Key {
  constructor() {
    super({
      name: 'w',
      type: KeyType.LETTER,
      description: 'lowercase of W',
      content: {center: 'w'},
      actions: {
        self: w,
        with: {shift: qwerty.W},
        after: {capslock: qwerty.W}
      },
      style: {widthRatio: 1}
    })
  }
}

export default w
