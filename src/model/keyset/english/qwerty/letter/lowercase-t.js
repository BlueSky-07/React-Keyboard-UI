/**
 
 +-----------+-----------+
 |           |           |
 |     t     |           |
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

class t extends Key {
  constructor() {
    super({
      name: 't',
      type: KeyType.LETTER,
      description: 'lowercase of T',
      content: {center: 't'},
      actions: {
        self: t,
        with: {shift: qwerty.T},
        after: {capslock: qwerty.T}
      },
      style: {widthRatio: 1}
    })
  }
}

export default t
