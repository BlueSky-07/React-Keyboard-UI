/**
 
 +-----------+-----------+
 |           |           |
 |     X     |           |
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

class X extends Key {
  constructor() {
    super({
      name: 'X',
      type: KeyType.LETTER,
      description: 'uppercase of x',
      content: {center: 'X'},
      actions: {
        self: X,
        with: {shift: qwerty.x},
        after: {capslock: qwerty.x}
      },
      style: {widthRatio: 1}
    })
  }
}

export default X
