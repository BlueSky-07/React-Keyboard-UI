/**
 
 +-----------+-----------+
 |           |           |
 |     Z     |           |
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

class Z extends Key {
  constructor() {
    super({
      name: 'Z',
      type: KeyType.LETTER,
      description: 'Z: iao',
      content: {leftTop: 'Z', rightBottom: 'iao'},
      actions: {
        self: Z
      },
      style: {widthRatio: 1}
    })
  }
}

export default Z
