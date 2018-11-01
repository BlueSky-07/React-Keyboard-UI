/**
 
 +-----------+-----------+
 |           |           |
 |     u     |           |
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

class u extends Key {
  constructor() {
    super({
      name: 'u',
      type: KeyType.LETTER,
      description: 'lowercase of U',
      content: {center: 'u'},
      actions: {
        self: u,
        with: {shift: qwerty.U},
        after: {capslock: qwerty.U}
      },
      style: {widthRatio: 1}
    })
  }
}

export default u
