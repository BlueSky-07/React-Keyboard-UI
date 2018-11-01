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
 |     ,     |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class Period extends Key {
  constructor() {
    super({
      name: 'Period',
      type: KeyType.COMBINATION,
      description: ',',
      content: {leftBottom: ','},
      actions: {
        self: Period,
        with: {shift: qwerty.ClosePointyBracket}
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.ClosePointyBracketAndPeriod
      }
    })
  }
}

export default Period