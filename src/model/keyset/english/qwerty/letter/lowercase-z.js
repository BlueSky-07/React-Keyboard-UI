/**
 
 +-----------+-----------+
 |           |           |
 |     z     |           |
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

class z extends Key {
  constructor() {
    super({
      name: 'z',
      type: KeyType.LETTER,
      description: 'lowercase of Z',
      content: {center: 'z'},
      actions: {
        self: z,
        with: {shift: qwerty.Z},
        after: {capslock: qwerty.Z}
      },
      style: {widthRatio: 1}
    })
  }
}

export default z
