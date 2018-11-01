/**
 
 +-----------+-----------+
 |           |           |
 |     P     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |           |
 |           |    uan    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class P extends Key {
  constructor() {
    super({
      name: 'P',
      type: KeyType.LETTER,
      description: 'P: uan',
      content: {leftTop: 'P', rightBottom: 'uan'},
      actions: {
        self: P
      },
      style: {widthRatio: 1}
    })
  }
}

export default P
