/**
 
 +-----------+-----------+
 |           |           |
 |     m     |           |
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

class m extends Key {
  constructor() {
    super({
      name: 'm',
      type: KeyType.LETTER,
      description: 'lowercase of M',
      content: {center: 'm'},
      actions: {
        self: m,
        with: {shift: qwerty.M},
        after: {capslock: qwerty.M}
      },
      style: {widthRatio: 1}
    })
  }
}

export default m
