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
 |     ;     |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class ColonAndSemicolon extends Key {
  constructor() {
    super({
      name: 'Colon&Semicolon',
      type: KeyType.COMBINATION,
      description: ': ;',
      content: {leftTop: ':', leftBottom: ';'},
      actions: {
        self: qwerty.Semicolon,
        with: {shift: qwerty.Colon},
      },
      style: {widthRatio: 1},
      combination: {
        set: [qwerty.Semicolon, qwerty.Colon]
      }
    })
  }
}

export default ColonAndSemicolon