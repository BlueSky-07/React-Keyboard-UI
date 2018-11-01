/**
 
 +-----------+-----------+
 |           |           |
 |     g     |           |
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

class g extends Key {
  constructor() {
    super({
      name: 'g',
      type: KeyType.LETTER,
      description: 'lowercase of G',
      content: {center: 'g'},
      actions: {
        self: g,
        with: {shift: qwerty.G},
        after: {capslock: qwerty.G}
      },
      style: {widthRatio: 1}
    })
  }
}

export default g
