/**
 
 +-----------+-----------+
 |           |           |
 |     L     |           |
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

class L extends Key {
  constructor() {
    super({
      name: 'L',
      type: KeyType.LETTER,
      description: 'uppercase of l',
      content: {center: 'L'},
      actions: {
        self: L,
        with: {shift: qwerty.l},
        after: {capslock: qwerty.l}
      },
      style: {widthRatio: 1}
    })
  }
}

export default L
