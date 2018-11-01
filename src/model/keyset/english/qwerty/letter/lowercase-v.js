/**
 
 +-----------+-----------+
 |           |           |
 |     v     |           |
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

class v extends Key {
  constructor() {
    super({
      name: 'v',
      type: KeyType.LETTER,
      description: 'lowercase of V',
      content: {center: 'v'},
      actions: {
        self: v,
        with: {shift: qwerty.V},
        after: {capslock: qwerty.V}
      },
      style: {widthRatio: 1}
    })
  }
}

export default v
