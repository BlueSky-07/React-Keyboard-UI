/**
 
 +-----------+-----------+
 |           |           |
 |     S     |           |
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

class S extends Key {
  constructor() {
    super({
      name: 'S',
      type: KeyType.LETTER,
      description: 'S: iong, ong',
      content: {leftTop: 'S', rightBottom: ['iong', 'ong']},
      actions: {
        self:S
      },
      style: {widthRatio: 1}
    })
  }
}

export default S
