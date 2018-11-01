/**
 
 +-----------+-----------+
 |           |           |
 |     i     |           |
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

class i extends Key {
  constructor() {
    super({
      name: 'i',
      type: KeyType.LETTER,
      description: 'lowercase of I',
      content: {center: 'i'},
      actions: {
        self: i,
        with: {shift: qwerty.I},
        after: {capslock: qwerty.I}
      },
      style: {widthRatio: 1}
    })
  }
}

export default i
