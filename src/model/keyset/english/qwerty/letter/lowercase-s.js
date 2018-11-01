/**
 
 +-----------+-----------+
 |           |           |
 |     s     |           |
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

class s extends Key {
  constructor() {
    super({
      name: 's',
      type: KeyType.LETTER,
      description: 'lowercase of S',
      content: {center: 's'},
      actions: {
        self: s,
        with: {shift: qwerty.S},
        after: {capslock: qwerty.S}
      },
      style: {widthRatio: 1}
    })
  }
}

export default s
