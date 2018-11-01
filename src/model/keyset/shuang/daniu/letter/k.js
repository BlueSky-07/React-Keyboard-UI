/**
 
 +-----------+-----------+
 |           |           |
 |     K     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |     en    |
 |           |     ia    |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class K extends Key {
  constructor() {
    super({
      name: 'K',
      type: KeyType.LETTER,
      description: 'K: en, ia',
      content: {leftTop: 'K', rightBottom: ['en', 'ia']},
      actions: {
        self: K
      },
      style: {widthRatio: 1}
    })
  }
}

export default K
