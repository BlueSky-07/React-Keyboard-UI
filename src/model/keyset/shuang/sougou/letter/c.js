/**
 
 +-----------+-----------+
 |           |           |
 |     C     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |           |
 |           |    iao    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class C extends Key {
  constructor() {
    super({
      name: 'C',
      type: KeyType.LETTER,
      description: 'C: iao',
      content: {leftTop: 'C', rightBottom: 'iao'},
      actions: {
        self: C
      },
      style: {widthRatio: 1}
    })
  }
}

export default C
