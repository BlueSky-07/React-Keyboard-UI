/**
 
 +-----------+-----------+
 |           |           |
 |     A     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |           |
 |    zh     |     a     |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class A extends Key {
  constructor() {
    super({
      name: 'A',
      type: KeyType.LETTER,
      description: 'A: zh, a',
      content: {leftTop: 'A', rightBottom: 'a', leftBottom: 'zh'},
      actions: {
        self: A
      },
      style: {widthRatio: 1}
    })
  }
}

export default A
