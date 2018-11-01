/**
 
 +-----------+-----------+
 |           |           |
 |     I     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |           |
 |           |     i     |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class I extends Key {
  constructor() {
    super({
      name: 'I',
      type: KeyType.LETTER,
      description: 'I: i',
      content: {leftTop: 'I', rightBottom: 'i'},
      actions: {
        self: I
      },
      style: {widthRatio: 1}
    })
  }
}

export default I
