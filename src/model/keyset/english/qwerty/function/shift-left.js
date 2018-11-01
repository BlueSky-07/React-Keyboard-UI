/**
 
 +-----------+-----------+
 |           |           |
 |           |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |         Shift         |
 |                       |
 +-----------+-----------+
 |           |           |
 |           |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class ShiftLeft extends Key {
  constructor() {
    super({
      name: 'ShiftLeft',
      type: KeyType.FUNCTION,
      description: '⇧, to type capital letters and other alternate "upper" characters',
      content: {center: 'Shift'},
      actions: {self: ShiftLeft},
      style: {widthRatio: 2.25}
    })
  }
}

export default ShiftLeft
