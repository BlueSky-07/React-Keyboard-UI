/**
 
 +-----------+-----------+
 |           |           |
 |     E     |           |
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

class E extends Key {
  constructor() {
    super({
      name: 'E',
      type: KeyType.LETTER,
      description: 'uppercase of e',
      content: {center: 'E'},
      actions: {
        self: E,
        with: {shift: qwerty.e},
        after: {capslock: qwerty.e}
      },
      style: {widthRatio: 1}
    })
  }
}

export default E
