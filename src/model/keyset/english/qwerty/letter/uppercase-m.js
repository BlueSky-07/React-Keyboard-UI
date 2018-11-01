/**
 
 +-----------+-----------+
 |           |           |
 |     M     |           |
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

class M extends Key {
  constructor() {
    super({
      name: 'M',
      type: KeyType.LETTER,
      description: 'uppercase of m',
      content: {center: 'M'},
      actions: {
        self: M,
        with: {shift: qwerty.m},
        after: {capslock: qwerty.m}
      },
      style: {widthRatio: 1}
    })
  }
}

export default M
