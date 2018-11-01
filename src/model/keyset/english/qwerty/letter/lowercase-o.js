/**
 
 +-----------+-----------+
 |           |           |
 |     o     |           |
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

class o extends Key {
  constructor() {
    super({
      name: 'o',
      type: KeyType.LETTER,
      description: 'lowercase of O',
      content: {center: 'o'},
      actions: {
        self: o,
        with: {shift: qwerty.O},
        after: {capslock: qwerty.O}
      },
      style: {widthRatio: 1}
    })
  }
}

export default o
