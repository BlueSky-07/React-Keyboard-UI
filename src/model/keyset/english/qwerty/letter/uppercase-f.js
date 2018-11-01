/**
 
 +-----------+-----------+
 |           |           |
 |     F     |           |
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

class F extends Key {
  constructor() {
    super({
      name: 'F',
      type: KeyType.LETTER,
      description: 'uppercase of f',
      content: {center: 'F'},
      actions: {
        self: F,
        with: {shift: qwerty.f},
        after: {capslock: qwerty.f}
      },
      style: {widthRatio: 1}
    })
  }
}

export default F
