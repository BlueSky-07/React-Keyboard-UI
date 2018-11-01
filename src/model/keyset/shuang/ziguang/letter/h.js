/**
 
 +-----------+-----------+
 |           |           |
 |     H     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |    iong   |
 |           |    ong    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class H extends Key {
  constructor() {
    super({
      name: 'H',
      type: KeyType.LETTER,
      description: 'H: iong, ong',
      content: {leftTop: 'H', rightBottom: ['iong', 'ong']},
      actions: {
        self: H
      },
      style: {widthRatio: 1}
    })
  }
}

export default H
