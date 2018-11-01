/**
 
 +-----------+-----------+
 |           |           |
 |           |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |          Alt          |
 |                       |
 +-----------+-----------+
 |           |           |
 |           |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class AltRight extends Key {
  constructor() {
    super({
      name: 'AltRight',
      type: KeyType.FUNCTION,
      description: '⎇, to change (alternate) the function of other pressed keys',
      content: {center: 'Alt'},
      actions: {self: AltRight},
      style: {widthRatio: 1.5}
    })
  }
}

export default AltRight
