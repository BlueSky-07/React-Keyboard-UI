/**
 
 +-----------+-----------+
 |           |           |
 |     r     |           |
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

class r extends Key {
  constructor() {
    super({
      name: 'r',
      type: KeyType.LETTER,
      description: 'lowercase of R',
      content: {center: 'r'},
      actions: {
        self: r,
        with: {shift: qwerty.R},
        after: {capslock: qwerty.R}
      },
      style: {widthRatio: 1}
    })
  }
}

export default r
