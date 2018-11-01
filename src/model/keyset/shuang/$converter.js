const fs = require('fs')
if(!fs.existsSync('letter')) {
  fs.mkdirSync('letter')
}
// const scheme = {detail: {ugmu: {}, ypmu: {}}}

const schemename = 'ziranma'
const scheme = {
  detail: {
    ugmu: {
      b: 'b',
      c: 'c',
      d: 'd',
      f: 'f',
      g: 'g',
      h: 'h',
      j: 'j',
      k: 'k',
      l: 'l',
      m: 'm',
      n: 'n',
      p: 'p',
      q: 'q',
      r: 'r',
      s: 's',
      t: 't',
      w: 'w',
      x: 'x',
      y: 'y',
      z: 'z',
      ch: 'i',
      sh: 'u',
      zh: 'v'
    },
    ypmu: {
      a: 'a',
      ai: 'l',
      an: 'j',
      ang: 'h',
      ao: 'k',
      e: 'e',
      ei: 'z',
      en: 'f',
      eng: 'g',
      i: 'i',
      ia: 'w',
      ian: 'm',
      iang: 'd',
      iao: 'c',
      ie: 'x',
      iong: 's',
      in: 'n',
      ing: 'y',
      iu: 'q',
      o: 'o',
      ong: 's',
      ou: 'b',
      u: 'u',
      ua: 'w',
      uai: 'y',
      uan: 'r',
      uang: 'd',
      ue: 't',
      ui: 'v',
      un: 'p',
      uo: 'o',
      v: 'v',
      ve: 't'
    }
  }
}

const keysets = {}

// { $KEY$.toUpperCase(): ["?", ...] ...}

;[scheme.detail.ugmu, scheme.detail.ypmu].forEach(dict => {
  Object.entries(dict).forEach(
      ([k, _v]) => {
        _v = Array.isArray(_v) ? _v : [_v]
        _v.forEach(v => {
          if (k === v && !new Set(['a', 'e', 'i', 'o', 'u', 'v']).has(v)) return
          else v = v.toUpperCase()
          if (keysets[v]) {
            keysets[v].push(k)
          } else {
            keysets[v] = [k]
          }
        })
      }
  )
})

const template = `/**
 
 +-----------+-----------+
 |           |           |
 |     $KEY$     |           |
 |           |           |
 +-----------+-----------+
 |                       |
 |                       |
 |                       |
 +-----------+-----------+
 |           |$RIGHTBOTTOM1COMMENT$|
 |    $LEFTBOTTOMCOMMENT$     |$RIGHTBOTTOM2COMMENT$|
 |           |           |
 +-----------+-----------+
 
 */

import {Key, KeyType} from '../../../../Key'

class $KEY$ extends Key {
  constructor() {
    super({
      name: '$KEY$',
      type: KeyType.LETTER,
      description: '$KEY$: $DESCRIPTION$',
      content: {leftTop: '$KEY$'$RIGHTBOTTOMOBJECT$$LEFTBOTTOMOBJECT$},
      actions: {
        self: $KEY$
      },
      style: {widthRatio: 1}
    })
  }
}

export default $KEY$
`

// $KEY$: key name
// $SCHEMENAME$: scheme name
// $LEFTBOTTOMCOMMENT$: left bottom, 2 letters or 2 spaces
// $RIGHTBOTTOM1COMMENT$: 11 length
// $RIGHTBOTTOM2COMMENT$: 11 length
// $DESCRIPTION$: ['?', ...].join(', ')
// $LEFTBOTTOMOBJECT$: {, leftBottom: '?'}
// $RIGHTBOTTOMOBJECT$: {, rightBottom: '?'} or {, rightBottom: ['?', ...]}

// filename: $KEY$.toLowerCase()

Object.entries(keysets).forEach(([key, v]) => {
  let leftBottom = new Set(['ch', 'sh', 'zh']).has(v[0]) ? v[0] : null
  const leftBottomComment = leftBottom ? leftBottom : '  '
  const rightBottom = leftBottom ? v.slice(1) : v
  let rightBottom1Comment = ' '.repeat(11)
  let rightBottom2Comment = ' '.repeat(11)
  switch (rightBottom.length) {
    case 1: {
      const k = rightBottom[0]
      const left = Math.ceil((11 - k.length) / 2)
      const right = 11 - left - k.length
      rightBottom2Comment = ' '.repeat(left) + k + ' '.repeat(right)
      break
    }
    case 2: {
      const k1 = rightBottom[0]
      const left1 = Math.ceil((11 - k1.length) / 2)
      const right1 = 11 - left1 - k1.length
      rightBottom1Comment = ' '.repeat(left1) + k1 + ' '.repeat(right1)
      const k2 = rightBottom[1]
      const left2 = Math.ceil((11 - k2.length) / 2)
      const right2 = 11 - left2 - k2.length
      rightBottom2Comment = ' '.repeat(left2) + k2 + ' '.repeat(right2)
      break
    }
    case 3: {
      const k1 = rightBottom[0] + ' ' + rightBottom[1]
      const left1 = Math.ceil((11 - k1.length) / 2)
      const right1 = 11 - left1 - k1.length
      rightBottom1Comment = ' '.repeat(left1) + k1 + ' '.repeat(right1)
      const k2 = rightBottom[2]
      const left2 = Math.ceil((11 - k2.length) / 2)
      const right2 = 11 - left2 - k2.length
      rightBottom2Comment = ' '.repeat(left2) + k2 + ' '.repeat(right2)
      break
    }
    case 4: {
      const k1 = rightBottom[0] + ' ' + rightBottom[1]
      const left1 = Math.ceil((11 - k1.length) / 2)
      const right1 = 11 - left1 - k1.length
      rightBottom1Comment = ' '.repeat(left1) + k1 + ' '.repeat(right1)
      const k2 = rightBottom[2] + ' ' + rightBottom[3]
      const left2 = Math.ceil((11 - k2.length) / 2)
      const right2 = 11 - left2 - k2.length
      rightBottom2Comment = ' '.repeat(left2) + k2 + ' '.repeat(right2)
      break
    }
    default: {
      throw 'not implement'
    }
  }
  const description = v.join(', ')
  const leftBottomObject = leftBottom ? `, leftBottom: '${leftBottom}'` : ''
  let rightBottomObject = ''
  if (rightBottom.length === 1) {
    rightBottomObject = `, rightBottom: '${rightBottom}'`
  } else {
    rightBottomObject = `, rightBottom: [${rightBottom.map(c => '\'' + c + '\'').join(', ')}]`
  }
  
  fs.writeFile(
      'letter/' + key.toLowerCase() + '.js',
      template
          .replace(/\$KEY\$/g, key)
          .replace(/\$SCHEMENAME\$/g, schemename)
          .replace(/\$LEFTBOTTOMCOMMENT\$/g, leftBottomComment)
          .replace(/\$RIGHTBOTTOM1COMMENT\$/g, rightBottom1Comment)
          .replace(/\$RIGHTBOTTOM2COMMENT\$/g, rightBottom2Comment)
          .replace(/\$DESCRIPTION\$/g, description)
          .replace(/\$LEFTBOTTOMOBJECT\$/g, leftBottomObject)
          .replace(/\$RIGHTBOTTOMOBJECT\$/g, rightBottomObject),
      (e) => {
        console.log(`${key.toLowerCase()}.js`, 'generated', (e ? 'un' : '') + 'successfully')
      }
  )
})