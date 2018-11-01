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
 |           |           |
 |           |    ian    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class M extends Key {
  constructor() {
    super({
      name: 'M',
      type: KeyType.LETTER,
      description: 'M: ian',
      content: {leftTop: 'M', rightBottom: 'ian'},
      actions: {
        self:M
      },
      style: {widthRatio: 1}
    })
  }
}

export default M
