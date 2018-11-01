/**
 
 +-----------+-----------+
 |           |           |
 |     C     |           |
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

class C extends Key {
  constructor() {
    super({
      name: 'C',
      type: KeyType.LETTER,
      description: 'uppercase of c',
      content: {center: 'C'},
      actions: {
        self: C,
        with: {shift: qwerty.c},
        after: {capslock: qwerty.c}
      },
      style: {widthRatio: 1}
    })
  }
}

export default C
