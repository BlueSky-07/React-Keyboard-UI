/**
 
 +-----------+-----------+
 |           |           |
 |     e     |           |
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

class e extends Key {
  constructor() {
    super({
      name: 'e',
      type: KeyType.LETTER,
      description: 'lowercase of E',
      content: {center: 'e'},
      actions: {
        self: e,
        with: {shift: qwerty.E},
        after: {capslock: qwerty.E}
      },
      style: {widthRatio: 1}
    })
  }
}

export default e
