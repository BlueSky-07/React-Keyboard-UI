/**
 
 +-----------+-----------+
 |           |           |
 |     Y     |           |
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

class Y extends Key {
  constructor() {
    super({
      name: 'Y',
      type: KeyType.LETTER,
      description: 'uppercase of y',
      content: {center: 'Y'},
      actions: {
        self: Y,
        with: {shift: qwerty.y},
        after: {capslock: qwerty.y}
      },
      style: {widthRatio: 1}
    })
  }
}

export default Y
