/**
 
 +-----------+-----------+
 |           |           |
 |     J     |           |
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

class J extends Key {
  constructor() {
    super({
      name: 'J',
      type: KeyType.LETTER,
      description: 'uppercase of j',
      content: {center: 'J'},
      actions: {
        self: J,
        with: {shift: qwerty.j},
        after: {capslock: qwerty.j}
      },
      style: {widthRatio: 1}
    })
  }
}

export default J
