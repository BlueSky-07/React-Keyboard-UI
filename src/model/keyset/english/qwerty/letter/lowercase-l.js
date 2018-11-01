/**
 
 +-----------+-----------+
 |           |           |
 |     l     |           |
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

class l extends Key {
  constructor() {
    super({
      name: 'l',
      type: KeyType.LETTER,
      description: 'lowercase of L',
      content: {center: 'l'},
      actions: {
        self: l,
        with: {shift: qwerty.L},
        after: {capslock: qwerty.L}
      },
      style: {widthRatio: 1}
    })
  }
}

export default l
