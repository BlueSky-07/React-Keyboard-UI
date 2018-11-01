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
 |           |     ue    |
 |           |     ui    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class M extends Key {
  constructor() {
    super({
      name: 'M',
      type: KeyType.LETTER,
      description: 'M: ue, ui',
      content: {leftTop: 'M', rightBottom: ['ue', 'ui']},
      actions: {
        self: M
      },
      style: {widthRatio: 1}
    })
  }
}

export default M
