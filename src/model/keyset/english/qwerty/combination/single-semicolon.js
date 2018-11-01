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
 |     ;     |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class Semicolon extends Key {
  constructor() {
    super({
      name: 'Semicolon',
      type: KeyType.COMBINATION,
      description: ';',
      content: {leftBottom: ';'},
      actions: {
        self: Semicolon,
        with: {shift: qwerty.Colon}
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.ColonAndSemicolon
      }
    })
  }
}

export default Semicolon