/**
 
 +-----------+-----------+
 |           |           |
 |     d     |           |
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

class d extends Key {
  constructor() {
    super({
      name: 'd',
      type: KeyType.LETTER,
      description: 'lowercase of D',
      content: {center: 'd'},
      actions: {
        self: d,
        with: {shift: qwerty.D},
        after: {capslock: qwerty.D}
      },
      style: {widthRatio: 1}
    })
  }
}

export default d
