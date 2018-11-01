/**
 
 +-----------+-----------+
 |           |           |
 |     E     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |           |
 |    zh     |     e     |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class E extends Key {
  constructor() {
    super({
      name: 'E',
      type: KeyType.LETTER,
      description: 'E: zh, e',
      content: {leftTop: 'E', rightBottom: 'e', leftBottom: 'zh'},
      actions: {
        self: E
      },
      style: {widthRatio: 1}
    })
  }
}

export default E
