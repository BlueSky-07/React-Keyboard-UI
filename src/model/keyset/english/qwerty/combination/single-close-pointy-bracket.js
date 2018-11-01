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
 |           |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class ClosePointyBracket extends Key {
  constructor() {
    super({
      name: 'ClosePointyBracket',
      type: KeyType.COMBINATION,
      description: '>',
      content: {leftTop: '>'},
      actions: {
        self: ClosePointyBracket,
        with: {shift: qwerty.Period},
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.ClosePointyBracketAndPeriod
      }
    })
  }
}

export default ClosePointyBracket