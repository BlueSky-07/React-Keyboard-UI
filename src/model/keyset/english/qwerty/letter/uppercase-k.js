/**
 
 +-----------+-----------+
 |           |           |
 |     K     |           |
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

class K extends Key {
  constructor() {
    super({
      name: 'K',
      type: KeyType.LETTER,
      description: 'uppercase of k',
      content: {center: 'K'},
      actions: {
        self: K,
        with: {shift: qwerty.k},
        after: {capslock: qwerty.k}
      },
      style: {widthRatio: 1}
    })
  }
}

export default K
