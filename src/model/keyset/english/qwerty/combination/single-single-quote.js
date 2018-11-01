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
 |     '     |           |
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'
import qwerty from '../qwerty'

class SingleQuote extends Key {
  constructor() {
    super({
      name: 'SingleQuote',
      type: KeyType.COMBINATION,
      description: '\'',
      content: {leftBottom: '\''},
      actions: {
        self: SingleQuote,
        with: {shift: qwerty.Quote}
      },
      style: {widthRatio: 1},
      combination: {
        from: qwerty.QuoteAndSingleQuote
      }
    })
  }
}

export default SingleQuote