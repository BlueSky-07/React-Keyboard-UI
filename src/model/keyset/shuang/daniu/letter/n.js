/**
 
 +-----------+-----------+
 |           |           |
 |     N     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |    iang   |
 |           |     ui    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class N extends Key {
  constructor() {
    super({
      name: 'N',
      type: KeyType.LETTER,
      description: 'N: iang, ui',
      content: {leftTop: 'N', rightBottom: ['iang', 'ui']},
      actions: {
        self: N
      },
      style: {widthRatio: 1}
    })
  }
}

export default N
