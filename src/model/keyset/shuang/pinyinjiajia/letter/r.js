/**
 
 +-----------+-----------+
 |           |           |
 |     R     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |           |
 |           |     en    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class R extends Key {
  constructor() {
    super({
      name: 'R',
      type: KeyType.LETTER,
      description: 'R: en',
      content: {leftTop: 'R', rightBottom: 'en'},
      actions: {
        self: R
      },
      style: {widthRatio: 1}
    })
  }
}

export default R
