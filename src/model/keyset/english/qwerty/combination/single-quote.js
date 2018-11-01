/**
 
 +-----------+-----------+
 |           |           |
 |     "     |           |
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

class Quote extends Key {
  constructor() {
    super({
      name: 'Quote',
      type: KeyType.COMBINATION,
      description: '"',
      content: {leftTop: '"'},
      actions: {
        self: Quote,
        with: {shift: qwerty.SingleQuote},
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.QuoteAndSingleQuote
      }
    })
  }
}

export default Quote