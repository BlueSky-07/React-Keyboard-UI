/**
 
 +-----------+-----------+
 |           |           |
 |     N     |           |
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

class N extends Key {
  constructor() {
    super({
      name: 'N',
      type: KeyType.LETTER,
      description: 'N: iao',
      content: {leftTop: 'N', rightBottom: 'iao'},
      actions: {
        self: N
      },
      style: {widthRatio: 1}
    })
  }
}

export default N
