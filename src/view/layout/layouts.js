import qwerty from './english/qwerty'
import dvorak from './english/dvorak'
import qwerty_daniu from './shuang/qwerty/daniu'
import qwerty_guobiao from './shuang/qwerty/guobiao'
import qwerty_jiandao3 from './shuang/qwerty/jiandao3'
import qwerty_jiandao6 from './shuang/qwerty/jiandao6'
import qwerty_pinyinjiajia from './shuang/qwerty/pinyinjiajia'
import qwerty_sougou from './shuang/qwerty/sougou'
import qwerty_weiruan from './shuang/qwerty/weiruan'
import qwerty_xiaoguan from './shuang/qwerty/xiaoguan'
import qwerty_xiaohe from './shuang/qwerty/xiaohe'
import qwerty_xiaolang from './shuang/qwerty/xiaolang'
import qwerty_zhinengabc from './shuang/qwerty/zhinengabc'
import qwerty_ziguang from './shuang/qwerty/ziguang'
import qwerty_ziranma from './shuang/qwerty/ziranma'
import dvorak_daniu from './shuang/dvorak/daniu'
import dvorak_guobiao from './shuang/dvorak/guobiao'
import dvorak_jiandao3 from './shuang/dvorak/jiandao3'
import dvorak_jiandao6 from './shuang/dvorak/jiandao6'
import dvorak_pinyinjiajia from './shuang/dvorak/pinyinjiajia'
import dvorak_sougou from './shuang/dvorak/sougou'
import dvorak_weiruan from './shuang/dvorak/weiruan'
import dvorak_xiaoguan from './shuang/dvorak/xiaoguan'
import dvorak_xiaohe from './shuang/dvorak/xiaohe'
import dvorak_xiaolang from './shuang/dvorak/xiaolang'
import dvorak_zhinengabc from './shuang/dvorak/zhinengabc'
import dvorak_ziguang from './shuang/dvorak/ziguang'
import dvorak_ziranma from './shuang/dvorak/ziranma'

const layouts = {
  english: {
    qwerty, dvorak
  },
  shuang: {
    qwerty: {
      daniu: qwerty_daniu,
      guobiao: qwerty_guobiao,
      jiandao3: qwerty_jiandao3,
      jiandao6: qwerty_jiandao6,
      pinyinjiajia: qwerty_pinyinjiajia,
      sougou: qwerty_sougou,
      weiruan: qwerty_weiruan,
      xiaoguan: qwerty_xiaoguan,
      xiaohe: qwerty_xiaohe,
      xiaolang: qwerty_xiaolang,
      zhinengabc: qwerty_zhinengabc,
      ziguang: qwerty_ziguang,
      ziranma: qwerty_ziranma
    },
    dvorak: {
      daniu: dvorak_daniu,
      guobiao: dvorak_guobiao,
      jiandao3: dvorak_jiandao3,
      jiandao6: dvorak_jiandao6,
      pinyinjiajia: dvorak_pinyinjiajia,
      sougou: dvorak_sougou,
      weiruan: dvorak_weiruan,
      xiaoguan: dvorak_xiaoguan,
      xiaohe: dvorak_xiaohe,
      xiaolang: dvorak_xiaolang,
      zhinengabc: dvorak_zhinengabc,
      ziguang: dvorak_ziguang,
      ziranma: dvorak_ziranma
    }
  }
}

export default layouts