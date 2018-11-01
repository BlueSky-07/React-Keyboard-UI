/**
 
 +-----------+-----------+
 |           |           |
 |     x     |           |
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

class x extends Key {
  constructor() {
    super({
      name: 'x',
      type: KeyType.LETTER,
      description: 'lowercase of X',
      content: {center: 'x'},
      actions: {
        self: x,
        with: {shift: qwerty.X},
        after: {capslock: qwerty.X}
      },
      style: {widthRatio: 1}
    })
  }
}

export default x
