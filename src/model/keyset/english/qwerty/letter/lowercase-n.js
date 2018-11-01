/**
 
 +-----------+-----------+
 |           |           |
 |     n     |           |
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

class n extends Key {
  constructor() {
    super({
      name: 'n',
      type: KeyType.LETTER,
      description: 'lowercase of N',
      content: {center: 'n'},
      actions: {
        self: n,
        with: {shift: qwerty.N},
        after: {capslock: qwerty.N}
      },
      style: {widthRatio: 1}
    })
  }
}

export default n
