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
 |    ch     |     i     |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class I extends Key {
  constructor() {
    super({
      name: 'I',
      type: KeyType.LETTER,
      description: 'I: ch, i',
      content: {leftTop: 'I', rightBottom: 'i', leftBottom: 'ch'},
      actions: {
        self:I
      },
      style: {widthRatio: 1}
    })
  }
}

export default I
