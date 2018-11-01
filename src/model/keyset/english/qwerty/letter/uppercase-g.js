/**
 
 +-----------+-----------+
 |           |           |
 |     G     |           |
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

class G extends Key {
  constructor() {
    super({
      name: 'G',
      type: KeyType.LETTER,
      description: 'uppercase of g',
      content: {center: 'G'},
      actions: {
        self: G,
        with: {shift: qwerty.g},
        after: {capslock: qwerty.g}
      },
      style: {widthRatio: 1}
    })
  }
}

export default G
