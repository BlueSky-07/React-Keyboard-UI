/**
 
 +-----------+-----------+
 |           |           |
 |     B     |           |
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

class B extends Key {
  constructor() {
    super({
      name: 'B',
      type: KeyType.LETTER,
      description: 'uppercase of b',
      content: {center: 'B'},
      actions: {
        self: B,
        with: {shift: qwerty.b},
        after: {capslock: qwerty.b}
      },
      style: {widthRatio: 1}
    })
  }
}

export default B
