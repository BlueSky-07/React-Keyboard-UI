/**
 
 +-----------+-----------+
 |           |           |
 |     +     |           |
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

class PlusAndEqualsSign extends Key {
  constructor() {
    super({
      name: 'Plus&EqualsSign',
      type: KeyType.COMBINATION,
      description: '+ =',
      content: {leftTop: '+', leftBottom: '='},
      actions: {
        self: qwerty.EqualsSign,
        with: {shift: qwerty.Plus},
      },
      style: {widthRatio: 1},
      combination: {
        set: [qwerty.EqualsSign, qwerty.Plus]
      }
    })
  }
}

export default PlusAndEqualsSign