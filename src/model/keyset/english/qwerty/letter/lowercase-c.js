/**
 
 +-----------+-----------+
 |           |           |
 |     c     |           |
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

class c extends Key {
  constructor() {
    super({
      name: 'c',
      type: KeyType.LETTER,
      description: 'lowercase of C',
      content: {center: 'c'},
      actions: {
        self: c,
        with: {shift: qwerty.C},
        after: {capslock: qwerty.C}
      },
      style: {widthRatio: 1}
    })
  }
}

export default c
