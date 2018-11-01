/**
 
 +-----------+-----------+
 |           |           |
 |     O     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |     o     |
 |    zh     |     uo    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class O extends Key {
  constructor() {
    super({
      name: 'O',
      type: KeyType.LETTER,
      description: 'O: zh, o, uo',
      content: {leftTop: 'O', rightBottom: ['o', 'uo'], leftBottom: 'zh'},
      actions: {
        self: O
      },
      style: {widthRatio: 1}
    })
  }
}

export default O
