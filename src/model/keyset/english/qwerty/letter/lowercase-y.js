/**
 
 +-----------+-----------+
 |           |           |
 |     y     |           |
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

class y extends Key {
  constructor() {
    super({
      name: 'y',
      type: KeyType.LETTER,
      description: 'lowercase of Y',
      content: {center: 'y'},
      actions: {
        self: y,
        with: {shift: qwerty.Y},
        after: {capslock: qwerty.Y}
      },
      style: {widthRatio: 1}
    })
  }
}

export default y
