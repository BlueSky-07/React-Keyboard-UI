/**
 
 +-----------+-----------+
 |           |           |
 |     R     |           |
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

class R extends Key {
  constructor() {
    super({
      name: 'R',
      type: KeyType.LETTER,
      description: 'uppercase of r',
      content: {center: 'R'},
      actions: {
        self: R,
        with: {shift: qwerty.r},
        after: {capslock: qwerty.r}
      },
      style: {widthRatio: 1}
    })
  }
}

export default R
