/**
 
 +-----------+-----------+
 |           |           |
 |     O     |           |
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

class O extends Key {
  constructor() {
    super({
      name: 'O',
      type: KeyType.LETTER,
      description: 'uppercase of o',
      content: {center: 'O'},
      actions: {
        self: O,
        with: {shift: qwerty.o},
        after: {capslock: qwerty.o}
      },
      style: {widthRatio: 1}
    })
  }
}

export default O
