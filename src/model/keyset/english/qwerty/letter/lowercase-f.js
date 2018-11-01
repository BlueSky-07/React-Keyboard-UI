/**
 
 +-----------+-----------+
 |           |           |
 |     f     |           |
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

class f extends Key {
  constructor() {
    super({
      name: 'f',
      type: KeyType.LETTER,
      description: 'lowercase of F',
      content: {center: 'f'},
      actions: {
        self: f,
        with: {shift: qwerty.F},
        after: {capslock: qwerty.F}
      },
      style: {widthRatio: 1}
    })
  }
}

export default f
