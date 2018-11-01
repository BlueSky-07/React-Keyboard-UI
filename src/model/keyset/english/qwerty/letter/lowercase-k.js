/**
 
 +-----------+-----------+
 |           |           |
 |     k     |           |
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

class k extends Key {
  constructor() {
    super({
      name: 'k',
      type: KeyType.LETTER,
      description: 'lowercase of K',
      content: {center: 'k'},
      actions: {
        self: k,
        with: {shift: qwerty.K},
        after: {capslock: qwerty.K}
      },
      style: {widthRatio: 1}
    })
  }
}

export default k
