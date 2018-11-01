/**
 
 +-----------+-----------+
 |           |           |
 |     W     |           |
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

class W extends Key {
  constructor() {
    super({
      name: 'W',
      type: KeyType.LETTER,
      description: 'uppercase of w',
      content: {center: 'W'},
      actions: {
        self: W,
        with: {shift: qwerty.w},
        after: {capslock: qwerty.w}
      },
      style: {widthRatio: 1}
    })
  }
}

export default W
