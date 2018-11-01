/**
 
 +-----------+-----------+
 |           |           |
 |     >     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |           |
 |     ,     |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class ClosePointyBracketAndPeriod extends Key {
  constructor() {
    super({
      name: 'ClosePointyBracket&Period',
      type: KeyType.COMBINATION,
      description: '> ,',
      content: {leftTop: '>', leftBottom: ','},
      actions: {
        self: qwerty.Period,
        with: {shift: qwerty.ClosePointyBracket},
      },
      style: {widthRatio: 1},
      combination: {
        set: [qwerty.Period, qwerty.ClosePointyBracket]
      }
    })
  }
}

export default ClosePointyBracketAndPeriod