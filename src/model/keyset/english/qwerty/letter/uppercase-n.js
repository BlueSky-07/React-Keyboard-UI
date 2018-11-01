/**
 
 +-----------+-----------+
 |           |           |
 |     N     |           |
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

class N extends Key {
  constructor() {
    super({
      name: 'N',
      type: KeyType.LETTER,
      description: 'uppercase of n',
      content: {center: 'N'},
      actions: {
        self: N,
        with: {shift: qwerty.n},
        after: {capslock: qwerty.n}
      },
      style: {widthRatio: 1}
    })
  }
}

export default N
