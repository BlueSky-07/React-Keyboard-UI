/**
 
 +-----------+-----------+
 |           |           |
 |     V     |           |
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

class V extends Key {
  constructor() {
    super({
      name: 'V',
      type: KeyType.LETTER,
      description: 'uppercase of v',
      content: {center: 'V'},
      actions: {
        self: V,
        with: {shift: qwerty.v},
        after: {capslock: qwerty.v}
      },
      style: {widthRatio: 1}
    })
  }
}

export default V
