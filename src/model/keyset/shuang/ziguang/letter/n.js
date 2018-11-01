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
 |           |    ue     |
 |           |    ui     |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class N extends Key {
  constructor() {
    super({
      name: 'N',
      type: KeyType.LETTER,
      description: 'N: ue, ui',
      content: {leftTop: 'N', rightBottom: ['ue', 'ui']},
      actions: {
        self: N
      },
      style: {widthRatio: 1}
    })
  }
}

export default N
