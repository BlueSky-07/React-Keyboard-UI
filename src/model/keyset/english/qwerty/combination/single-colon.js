/**
 
 +-----------+-----------+
 |           |           |
 |     :     |           |
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

class Colon extends Key {
  constructor() {
    super({
      name: 'Colon',
      type: KeyType.COMBINATION,
      description: ':',
      content: {leftTop: ':'},
      actions: {
        self: Colon,
        with: {shift: qwerty.Semicolon},
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.ColonAndSemicolon
      }
    })
  }
}

export default Colon