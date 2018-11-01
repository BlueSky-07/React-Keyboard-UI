/**
 
 +-----------+-----------+
 |           |           |
 |           |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |           |
 |     =     |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class EqualsSign extends Key {
  constructor() {
    super({
      name: 'EqualsSign',
      type: KeyType.COMBINATION,
      description: '=',
      content: {leftBottom: '='},
      actions: {
        self: EqualsSign,
        with: {shift: qwerty.Plus}
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.PlusAndEqualsSign
      }
    })
  }
}

export default EqualsSign