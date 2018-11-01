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
 |           |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class Plus extends Key {
  constructor() {
    super({
      name: 'Plus',
      type: KeyType.COMBINATION,
      description: '+',
      content: {leftTop: '+'},
      actions: {
        self: Plus,
        with: {shift: qwerty.EqualsSign},
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.PlusAndEqualsSign
      }
    })
  }
}

export default Plus