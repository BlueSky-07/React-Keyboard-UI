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
 |           |     uo    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class O extends Key {
  constructor() {
    super({
      name: 'O',
      type: KeyType.LETTER,
      description: 'O: o, uo',
      content: {leftTop: 'O', rightBottom: ['o', 'uo']},
      actions: {
        self:O
      },
      style: {widthRatio: 1}
    })
  }
}

export default O
