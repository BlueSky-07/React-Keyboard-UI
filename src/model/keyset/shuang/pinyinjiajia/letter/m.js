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
 |           |     ie    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class M extends Key {
  constructor() {
    super({
      name: 'M',
      type: KeyType.LETTER,
      description: 'M: ie',
      content: {leftTop: 'M', rightBottom: 'ie'},
      actions: {
        self: M
      },
      style: {widthRatio: 1}
    })
  }
}

export default M
