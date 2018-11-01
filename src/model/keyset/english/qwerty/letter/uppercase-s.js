/**
 
 +-----------+-----------+
 |           |           |
 |     S     |           |
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

class S extends Key {
  constructor() {
    super({
      name: 'S',
      type: KeyType.LETTER,
      description: 'uppercase of s',
      content: {center: 'S'},
      actions: {
        self: S,
        with: {shift: qwerty.s},
        after: {capslock: qwerty.s}
      },
      style: {widthRatio: 1}
    })
  }
}

export default S
