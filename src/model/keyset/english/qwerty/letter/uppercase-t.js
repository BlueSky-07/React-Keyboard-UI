/**
 
 +-----------+-----------+
 |           |           |
 |     T     |           |
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

class T extends Key {
  constructor() {
    super({
      name: 'T',
      type: KeyType.LETTER,
      description: 'uppercase of t',
      content: {center: 'T'},
      actions: {
        self: T,
        with: {shift: qwerty.t},
        after: {capslock: qwerty.t}
      },
      style: {widthRatio: 1}
    })
  }
}

export default T
