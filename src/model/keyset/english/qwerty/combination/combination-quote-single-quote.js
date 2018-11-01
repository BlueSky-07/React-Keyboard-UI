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
 |     '     |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class QuoteAndSingleQuote extends Key {
  constructor() {
    super({
      name: 'Quote&SingleQuote',
      type: KeyType.COMBINATION,
      description: '" \'',
      content: {leftTop: '"', leftBottom: '\''},
      actions: {
        self: qwerty.SingleQuote,
        with: {shift: qwerty.Quote},
      },
      style: {widthRatio: 1},
      combination: {
        set: [qwerty.SingleQuote, qwerty.Quote]
      }
    })
  }
}

export default QuoteAndSingleQuote