const fs = require('fs')

const template =
    `$IMPORTS$

const $SCHEMENAME$ = {
  $ALPHABETLIST$
}

export default $SCHEMENAME$
`

const schemenames = [
  'daniu',
  'guobiao',
  'jiandao3',
  'jiandao6',
  'pinyinjiajia',
  'sougou',
  'zhinengabc',
  'weiruan',
  'xiaoguan',
  'xiaohe',
  'xiaolang',
  'ziguang',
  'ziranma',
]
const alphabet = 'x'.repeat(26).split('').map((c, idx) => String.fromCharCode('a'.charCodeAt(0) + idx))

const _imports = []

alphabet.forEach(c => {
  _imports.push(
      `import ${c.toUpperCase()} from './letter/${c}'`
  )
})
_imports.push('import SpaceBar from \'./spacebar\'')

schemenames.forEach(schemename => {
  if (!fs.existsSync(schemename)){
    fs.mkdirSync(schemename)
  }
  fs.writeFile(
      `${schemename}/${schemename}.js`,
      template
          .replace(/\$IMPORTS\$/g, _imports.join('\n'))
          .replace(/\$ALPHABETLIST\$/g, alphabet.concat('SpaceBar').map(c => c.slice(0, 1).toUpperCase() + c.slice(1)).join(', '))
          .replace(/\$SCHEMENAME\$/g, schemename)
      ,
      e => {
        console.log(`${schemename}.js`, 'generated', (e ? 'un' : '') + 'successfully')
      }
  )
})