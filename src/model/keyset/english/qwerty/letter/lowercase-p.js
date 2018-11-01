/**
 
 +-----------+-----------+
 |           |           |
 |     p     |           |
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

class p extends Key {
  constructor() {
    super({
      name: 'p',
      type: KeyType.LETTER,
      description: 'lowercase of P',
      content: {center: 'p'},
      actions: {
        self: p,
        with: {shift: qwerty.P},
        after: {capslock: qwerty.P}
      },
      style: {widthRatio: 1}
    })
  }
}

export default p
