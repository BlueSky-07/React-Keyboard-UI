/**
 
 +-----------+-----------+
 |           |           |
 |     M     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |     u     |
 |           |    er     |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class M extends Key {
  constructor() {
    super({
      name: 'M',
      type: KeyType.LETTER,
      description: 'M: u, er',
      content: {leftTop: 'M', rightBottom: ['u', 'er']},
      actions: {
        self: M
      },
      style: {widthRatio: 1}
    })
  }
}

export default M
