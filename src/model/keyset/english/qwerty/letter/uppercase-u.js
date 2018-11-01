/**
 
 +-----------+-----------+
 |           |           |
 |     U     |           |
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

class U extends Key {
  constructor() {
    super({
      name: 'U',
      type: KeyType.LETTER,
      description: 'uppercase of u',
      content: {center: 'U'},
      actions: {
        self: U,
        with: {shift: qwerty.u},
        after: {capslock: qwerty.u}
      },
      style: {widthRatio: 1}
    })
  }
}

export default U
