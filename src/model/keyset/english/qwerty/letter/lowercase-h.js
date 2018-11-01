/**
 
 +-----------+-----------+
 |           |           |
 |     h     |           |
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

class h extends Key {
  constructor() {
    super({
      name: 'h',
      type: KeyType.LETTER,
      description: 'lowercase of H',
      content: {center: 'h'},
      actions: {
        self: h,
        with: {shift: qwerty.H},
        after: {capslock: qwerty.H}
      },
      style: {widthRatio: 1}
    })
  }
}

export default h
