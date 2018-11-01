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
 |           |     ie    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class T extends Key {
  constructor() {
    super({
      name: 'T',
      type: KeyType.LETTER,
      description: 'T: ie',
      content: {leftTop: 'T', rightBottom: 'ie'},
      actions: {
        self: T
      },
      style: {widthRatio: 1}
    })
  }
}

export default T
