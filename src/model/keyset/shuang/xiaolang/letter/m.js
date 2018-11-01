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
 |           |     en    |
 |           |    iang   |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class M extends Key {
  constructor() {
    super({
      name: 'M',
      type: KeyType.LETTER,
      description: 'M: en, iang',
      content: {leftTop: 'M', rightBottom: ['en', 'iang']},
      actions: {
        self: M
      },
      style: {widthRatio: 1}
    })
  }
}

export default M
