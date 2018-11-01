/**
 
 +-----------+-----------+
 |           |           |
 |     T     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |           |
 |           |     iu    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class T extends Key {
  constructor() {
    super({
      name: 'T',
      type: KeyType.LETTER,
      description: 'T: iu',
      content: {leftTop: 'T', rightBottom: 'iu'},
      actions: {
        self: T
      },
      style: {widthRatio: 1}
    })
  }
}

export default T
