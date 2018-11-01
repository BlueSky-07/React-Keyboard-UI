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

class ShiftRight extends Key {
  constructor() {
    super({
      name: 'ShiftRight',
      type: KeyType.FUNCTION,
      description: '⇧, to type capital letters and other alternate "upper" characters',
      content: {center: 'Shift'},
      actions: {self: ShiftRight},
      style: {widthRatio: 2.75}
    })
  }
}

export default ShiftRight
