/**
 
 +-----------+-----------+
 |           |           |
 |     D     |           |
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

class D extends Key {
  constructor() {
    super({
      name: 'D',
      type: KeyType.LETTER,
      description: 'uppercase of d',
      content: {center: 'D'},
      actions: {
        self: D,
        with: {shift: qwerty.d},
        after: {capslock: qwerty.d}
      },
      style: {widthRatio: 1}
    })
  }
}

export default D
