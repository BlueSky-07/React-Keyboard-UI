/**
 
 +-----------+-----------+
 |           |           |
 |     I     |           |
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

class I extends Key {
  constructor() {
    super({
      name: 'I',
      type: KeyType.LETTER,
      description: 'uppercase of i',
      content: {center: 'I'},
      actions: {
        self: I,
        with: {shift: qwerty.i},
        after: {capslock: qwerty.i}
      },
      style: {widthRatio: 1}
    })
  }
}

export default I
