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

class AltLeft extends Key {
  constructor() {
    super({
      name: 'AltLeft',
      type: KeyType.FUNCTION,
      description: '⎇, to change (alternate) the function of other pressed keys',
      content: {center: 'Alt'},
      actions: {self: AltLeft},
      style: {widthRatio: 1.5}
    })
  }
}

export default AltLeft
