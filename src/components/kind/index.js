import React from 'react'
import './menu.scss'
import store from '@/store'

const tabs = [
  { title: '热销分类' },
  { title: '儿童服饰' },
  { title: '婴儿装' },
  { title: '婴童鞋' },
  { title: '奶粉辅食' },
  { title: '纸尿裤' },
  { title: '哺育喂养' },
  { title: '洗护清洁' },
  { title: '睡眠出行' },
  { title: '玩具文体' },
  { title: '孕妈专区' },
  { title: '流行服饰' },
  { title: '鞋包配饰' },
  { title: '居家百货' },
  { title: '美妆个护' },
];
class Com extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      tab1: [
        [
          {
            img: '//b1.hucdn.com/upload/category/1607/08/47777251304120_150x150.png!160x160.webp',
            tit: '纸尿裤'
          },
          {
            img: '//b1.hucdn.com/upload/category/1512/08/65064681196826_120x120.jpg!160x160.webp',
            tit: '奶瓶'
          },
          {
            img: '//b1.hucdn.com/upload/category/1606/03/52214243214120_150x150.jpg!160x160.webp',
            tit: '益智早教'
          },
          {
            img: '//b1.hucdn.com/upload/category/1607/08/47799721994120_150x150.jpg!160x160.webp',
            tit: '奶粉'
          },
          {
            img: '//b1.hucdn.com/upload/category/1610/27/61534086624120_150x150.png!160x160.webp',
            tit: '套装'
          },
          {
            img: '//b1.hucdn.com/upload/category/1610/27/61539581244120_150x150.png!160x160.webp',
            tit: '哈衣爬服'
          },
          {
            img: '//b1.hucdn.com/upload/category/1610/27/61544811414120_150x150.jpg!160x160.webp',
            tit: '爆款童鞋'
          },
          {
            img: '//b1.hucdn.com/upload/category/1609/30/04541470574120_150x150.png!160x160.webp',
            tit: '鞋包配饰'
          },
          {
            img: '//b1.hucdn.com/upload/category/1610/13/55301456264120_150x150.png!160x160.webp',
            tit: '春装上新'
          },
          {
            img: '//b1.hucdn.com/upload/category/1601/14/35669652256826_120x120.jpg!160x160.webp',
            tit: '床品'
          },
          {
            img: '//b1.hucdn.com/upload/category/1512/06/85158569796826_120x120.jpg!160x160.webp',
            tit: '护肤套装'
          },
          {
            img: '//b1.hucdn.com/upload/category/1512/03/22075111826826_120x120.jpg!160x160.webp',
            tit: '红人同款'
          }
        ],
        [
          {
            img: '//b1.hucdn.com/upload/category/1610/14/36469660224120_150x150.png!160x160.webp',
            tit: '套装'
          },
          {
            img: '//b1.hucdn.com/upload/category/1609/08/07504068084120_150x150.png!160x160.webp',
            tit: '外套'
          },
          {
            img: '//b1.hucdn.com/upload/category/1609/08/07437350114120_150x150.png!160x160.webp',
            tit: '针织衫'
          },
          {
            img: '//b1.hucdn.com/upload/category/1608/19/85409717694120_150x150.png!160x160.webp',
            tit: '卫衣'
          },
          {
            img: '//b1.hucdn.com/upload/category/1608/19/95755584924120_150x150.png!160x160.webp',
            tit: 'T恤'
          },
          {
            img: '//b1.hucdn.com/upload/category/1609/08/07518800384120_150x150.png!160x160.webp',
            tit: '连衣裙'
          },
          {
            img: '//b1.hucdn.com/upload/category/1608/19/86623417614120_150x150.png!160x160.webp',
            tit: '衬衫'
          },
          {
            img: '//b1.hucdn.com/upload/category/1610/14/37049072874120_150x150.png!160x160.webp',
            tit: '羽绒服'
          },
          {
            img: '//b1.hucdn.com/upload/category/1608/19/86726867394120_150x150.png!160x160.webp',
            tit: '内衣套装'
          },
          {
            img: '//b1.hucdn.com/upload/category/1608/19/86675848494120_150x150.png!160x160.webp',
            tit: '休闲裤'
          },
          {
            img: '//b1.hucdn.com/upload/category/1610/14/37389767044120_150x150.png!160x160.webp',
            tit: '牛仔裤'
          },
          {
            img: '//b1.hucdn.com/upload/category/1608/19/86756481754120_150x150.png!160x160.webp',
            tit: '内裤'
          },
          {
            img: '//b1.hucdn.com/upload/category/1608/19/86765364694120_150x150.png!160x160.webp',
            tit: '袜子'
          },
          {
            img: '//b1.hucdn.com/upload/category/1608/19/86675848494120_150x150.png!160x160.webp',
            tit: '休闲裤'
          },
          {
            img: '//b1.hucdn.com/upload/category/1608/19/86785754754120_150x150.png!160x160.webp',
            tit: '配饰'
          },
          {
            img: '//b1.hucdn.com/upload/category/1610/14/37567516814120_150x150.png!160x160.webp',
            tit: '爆款热销'
          }
        ],
        [
          {
            img: '//b1.hucdn.com/upload/category/1608/19/87101618004120_150x150.png!160x160.webp',
            tit: '哈衣爬服'
          },
          {
            img: '//b1.hucdn.com/upload/category/1608/19/85458816784120_150x150.png!160x160.webp',
            tit: '套装'
          },
          {
            img: '//b1.hucdn.com/upload/category/1608/19/87111016594120_150x150.png!160x160.webp',
            tit: 'T恤上衣'
          },
          {
            img: '//b1.hucdn.com/upload/category/1608/19/87116567624120_150x150.png!160x160.webp',
            tit: '婴儿外套'
          },
          {
            img: '//b1.hucdn.com/upload/category/1608/19/87121396834120_150x150.png!160x160.webp',
            tit: '婴儿礼盒'
          },
          {
            img: '//b1.hucdn.com/upload/category/1608/19/87127292764120_150x150.png!160x160.webp',
            tit: '婴儿内衣'
          },
          {
            img: '//b1.hucdn.com/upload/category/1608/19/87133428274120_150x150.png!160x160.webp',
            tit: '婴儿棉衣'
          },
          {
            img: '//b1.hucdn.com/upload/category/1608/19/87162414164120_150x150.png!160x160.webp',
            tit: '婴儿裤子'
          }
        ],
        [
          {
            img: '//b1.hucdn.com/upload/category/1601/13/48292110576826_120x120.jpg!160x160.webp',
            tit: '学步鞋'
          },
          {
            img: '//b1.hucdn.com/upload/category/1601/29/68602844366826_120x120.jpg!160x160.webp',
            tit: '单鞋'
          },
          {
            img: '//b1.hucdn.com/upload/category/1601/13/48247633786826_120x120.jpg!160x160.webp',
            tit: '运动鞋'
          },
          {
            img: '//b1.hucdn.com/upload/category/1601/13/48257500946826_120x120.jpg!160x160.webp',
            tit: '帆布鞋'
          },
          {
            img: '//b1.hucdn.com/upload/category/1601/29/68129599006826_120x120.jpg!160x160.webp',
            tit: '休闲鞋'
          },
          {
            img: '//b1.hucdn.com/upload/category/1601/13/48300751436826_120x120.jpg!160x160.webp',
            tit: '机能鞋'
          },
          {
            img: '//b1.hucdn.com/upload/category/1609/30/03147199414120_150x150.jpg!160x160.webp',
            tit: '靴子'
          },
          {
            img: '//b1.hucdn.com/upload/category/1608/24/35107881234120_150x150.jpg!160x160.webp',
            tit: '皮鞋'
          }
        ],
        [
          {
            img: '//b1.hucdn.com/upload/category/1607/08/47799721994120_150x150.jpg!160x160.webp',
            tit: '婴儿奶粉'
          },
          {
            img: '//b1.hucdn.com/upload/category/1607/08/47821390384120_150x150.png!160x160.webp',
            tit: '成人奶粉'
          },
          {
            img: '//b1.hucdn.com/upload/category/1607/08/47826624424120_150x150.png!160x160.webp',
            tit: '米糊汤粥'
          },
          {
            img: '//b1.hucdn.com/upload/category/1607/08/47844435924120_150x150.png!160x160.webp',
            tit: '肉松'
          },
          {
            img: '//b1.hucdn.com/upload/category/1608/19/95755584924120_150x150.png!160x160.webp',
            tit: 'T恤'
          },
          {
            img: '//b1.hucdn.com/upload/category/1607/08/47880664524120_150x150.jpg!160x160.webp',
            tit: '营养品'
          },
          {
            img: '//b1.hucdn.com/upload/category/1506/15/52251587303577_120x120.png!160x160.webp',
            tit: '果泥肉泥'
          },
          {
            img: '//b1.hucdn.com/upload/category/1506/15/52292739473577_120x120.png!160x160.webp',
            tit: '磨牙饼干'
          },
          {
            img: '//b1.hucdn.com/upload/category/1506/15/52264949943577_120x120.png!160x160.webp',
            tit: '清火奶伴'
          },
          {
            img: '//b1.hucdn.com/upload/category/1506/29/49270960253577_120x120.png!160x160.webp',
            tit: '面条'
          },
          {
            img: '//b1.hucdn.com/upload/category/1601/26/09391996086826_120x120.jpg!160x160.webp',
            tit: '坚果零食'
          },
          {
            img: '//b1.hucdn.com/upload/category/1607/08/49198815334120_150x150.png!160x160.webp',
            tit: '多美滋'
          },
          {
            img: '//b1.hucdn.com/upload/category/1607/08/49317321594120_150x150.png!160x160.webp',
            tit: '美赞臣'
          },
          {
            img: '//b1.hucdn.com/upload/category/1607/08/49374957154120_150x150.png!160x160.webp',
            tit: '贝因美'
          },
          {
            img: '//b1.hucdn.com/upload/category/1607/08/49344713494120_150x150.png!160x160.webp',
            tit: '雅培'
          },
          {
            img: '//b1.hucdn.com/upload/category/1607/08/49418685014120_150x150.png!160x160.webp',
            tit: '喜宝'
          },
          {
            img: '//b1.hucdn.com/upload/category/1607/08/49477680364120_150x150.png!160x160.webp',
            tit: '君乐宝'
          },
          {
            img: '//b1.hucdn.com/upload/category/1607/08/50873518584120_150x150.png!160x160.webp',
            tit: '合生元'
          },
          {
            img: '//b1.hucdn.com/upload/category/1607/08/50892732444120_150x150.png!160x160.webp',
            tit: '雀巢'
          },
          {
            img: '//b1.hucdn.com/upload/category/1607/08/50908662714120_150x150.png!160x160.webp',
            tit: '伊利'
          }
        ],
        [
          {
            img: '//b1.hucdn.com/upload/category/1607/08/47777251304120_150x150.png!160x160.webp',
            tit: '纸尿裤'
          },
          {
            img: '//b1.hucdn.com/upload/category/1506/15/52185170193577_120x120.png!160x160.webp',
            tit: '拉拉裤'
          },
          {
            img: '//b1.hucdn.com/upload/category/1506/15/52201787473577_120x120.png!160x160.webp',
            tit: '纸尿片'
          },
          {
            img: '//b1.hucdn.com/upload/category/1601/26/04129378046826_120x120.jpg!160x160.webp',
            tit: '花王'
          },
          {
            img: '//b1.hucdn.com/upload/category/1607/08/55510114304120_150x150.jpg!160x160.webp',
            tit: '好奇'
          },
          {
            img: '//b1.hucdn.com/upload/category/1508/27/68419386693577_120x120.jpg!160x160.webp',
            tit: '帮宝适'
          },
          {
            img: '//b1.hucdn.com/upload/category/1508/27/68455171043577_120x120.jpg!160x160.webp',
            tit: '雀氏'
          },
          {
            img: '//b1.hucdn.com/upload/category/1510/22/92179065376826_120x120.jpg!160x160.webp',
            tit: '妈咪宝贝'
          },
          {
            img: '//b1.hucdn.com/upload/category/1510/16/73365684886826_120x120.jpg!160x160.webp',
            tit: '希望宝宝'
          },
          {
            img: '//b1.hucdn.com/upload/category/1510/16/73946817036826_120x120.jpg!160x160.webp',
            tit: 'moony'
          },
          {
            img: '//b1.hucdn.com/upload/category/1601/26/04874305426826_120x120.jpg!160x160.webp',
            tit: '奇酷'
          },
          {
            img: '//b1.hucdn.com/upload/category/1601/26/04992466566826_120x120.jpg!160x160.webp',
            tit: '倍康'
          },
          {
            img: '//b1.hucdn.com/upload/category/1601/26/04545841216826_120x120.jpg!160x160.webp',
            tit: '爽然'
          },
          {
            img: '//b1.hucdn.com/upload/category/1510/16/73630285486826_120x120.jpg!160x160.webp',
            tit: '安儿乐'
          },
          {
            img: '//b1.hucdn.com/upload/category/1510/09/54065474996826_120x120.jpg!160x160.webp',
            tit: '一朵'
          },
          {
            img: '//b1.hucdn.com/upload/category/1510/16/74072790426826_120x120.jpg!160x160.webp',
            tit: '菲比'
          }
        ],
        [
          {
            img: '//b1.hucdn.com/upload/category/1601/13/74470097556826_120x120.jpg!160x160.webp',
            tit: '奶瓶'
          },
          {
            img: '//b1.hucdn.com/upload/category/1511/04/19051918496826_120x120.jpg!160x160.webp',
            tit: '奶嘴'
          },
          {
            img: '//b1.hucdn.com/upload/category/1601/13/74744704836826_120x120.jpg!160x160.webp',
            tit: '辅助用具'
          },
          {
            img: '//b1.hucdn.com/upload/category/1601/13/74643786436826_120x120.jpg!160x160.webp',
            tit: '学饮杯'
          },
          {
            img: '//b1.hucdn.com/upload/category/1601/13/74618705616826_120x120.jpg!160x160.webp',
            tit: '餐具'
          },
          {
            img: '//b1.hucdn.com/upload/category/1511/17/37805620516826_120x120.jpg!160x160.webp',
            tit: '围嘴'
          },
          {
            img: '//b1.hucdn.com/upload/category/1601/13/74653898246826_120x120.jpg!160x160.webp',
            tit: '餐椅'
          },
          {
            img: '//b1.hucdn.com/upload/category/1601/13/74605103356826_120x120.jpg!160x160.webp',
            tit: '哺喂电器'
          },
          {
            img: '//b1.hucdn.com/upload/category/1510/29/14972840336826_120x120.jpg!160x160.webp',
            tit: '贝亲奶瓶'
          },
          {
            img: '//b1.hucdn.com/upload/category/1510/29/15003029986826_120x120.jpg!160x160.webp',
            tit: 'Nuk'
          },
          {
            img: '//b1.hucdn.com/upload/category/1510/29/05054212306826_120x120.jpg!160x160.webp',
            tit: '新安怡'
          },
          {
            img: '//b1.hucdn.com/upload/category/1510/29/04955239136826_120x120.jpg!160x160.webp',
            tit: 'Comotomo'
          }
        ],
        [
          {
            img: '//b1.hucdn.com/upload/category/1601/13/70169698206826_120x120.jpg!160x160.webp',
            tit: '湿巾'
          },
          {
            img: '//b1.hucdn.com/upload/category/1601/13/70181275306826_120x120.jpg!160x160.webp',
            tit: '洗发沐浴'
          },
          {
            img: '//b1.hucdn.com/upload/category/1512/01/34482646516826_120x120.jpg!160x160.webp',
            tit: '牙膏牙刷'
          },
          {
            img: '//b1.hucdn.com/upload/category/1601/13/70197045406826_120x120.jpg!160x160.webp',
            tit: '洗护礼盒'
          },
          {
            img: '//b1.hucdn.com/upload/category/1512/01/34507254326826_120x120.jpg!160x160.webp',
            tit: '爽身防痱'
          },
          {
            img: '//b1.hucdn.com/upload/category/1512/01/34514535746826_120x120.jpg!160x160.webp',
            tit: '日常护理'
          },
          {
            img: '//b1.hucdn.com/upload/category/1601/13/70219001466826_120x120.jpg!160x160.webp',
            tit: '润肤按摩'
          },
          {
            img: '//b1.hucdn.com/upload/category/1601/13/70240071466826_120x120.jpg!160x160.webp',
            tit: '衣物清洁'
          },
          {
            img: '//b1.hucdn.com/upload/category/1512/01/34547855686826_120x120.jpg!160x160.webp',
            tit: '理发器'
          },
          {
            img: '//b1.hucdn.com/upload/category/1511/04/18216628466826_120x120.jpg!160x160.webp',
            tit: '尿布尿垫'
          },
          {
            img: '//b1.hucdn.com/upload/category/1601/13/70265698366826_120x120.jpg!160x160.webp',
            tit: '坐便器'
          },
          {
            img: '//b1.hucdn.com/upload/category/1601/13/70270173656826_120x120.jpg!160x160.webp',
            tit: '浴盆'
          }
        ],
        [
          {
            img: '//b1.hucdn.com/upload/category/1512/01/33824361606826_120x120.jpg!160x160.webp',
            tit: '安全座椅'
          },
          {
            img: '//b1.hucdn.com/upload/category/1512/01/33829463786826_120x120.jpg!160x160.webp',
            tit: '推车'
          },
          {
            img: '//b1.hucdn.com/upload/category/1512/01/33833926126826_120x120.jpg!160x160.webp',
            tit: '学步'
          },
          {
            img: '//b1.hucdn.com/upload/category/1512/01/33838871256826_120x120.jpg!160x160.webp',
            tit: '背带腰凳'
          },
          {
            img: '//b1.hucdn.com/upload/category/1609/30/05772757024120_150x150.png!160x160.webp',
            tit: '隔尿垫'
          },
          {
            img: '//b1.hucdn.com/upload/category/1609/30/05780767844120_150x150.png!160x160.webp',
            tit: '防护栏'
          },
          {
            img: '//b1.hucdn.com/upload/category/1609/30/05797649114120_150x150.png!160x160.webp',
            tit: '婴儿枕'
          },
          {
            img: '//b1.hucdn.com/upload/category/1512/01/33859020196826_120x120.jpg!160x160.webp',
            tit: '床品套件'
          },
          {
            img: '//b1.hucdn.com/upload/category/1512/01/33866318486826_120x120.jpg!160x160.webp',
            tit: '婴儿床'
          },
          {
            img: '//b1.hucdn.com/upload/category/1512/01/33873715126826_120x120.jpg!160x160.webp',
            tit: '睡袋抱被'
          },
          {
            img: '//b1.hucdn.com/upload/category/1511/04/17354094106826_120x120.jpg!160x160.webp',
            tit: '床垫床围'
          },
          {
            img: '//b1.hucdn.com/upload/category/1512/01/33878329546826_120x120.jpg!160x160.webp',
            tit: '雨衣雨具'
          },
          {
            img: '//b1.hucdn.com/upload/category/1609/19/71240839134120_150x150.png!160x160.webp',
            tit: '好孩子'
          },
          {
            img: '//b1.hucdn.com/upload/category/1609/30/06113089704120_150x150.png!160x160.webp',
            tit: '宝得适'
          },
          {
            img: '//b1.hucdn.com/upload/category/1609/30/06123713324120_150x150.png!160x160.webp',
            tit: '嗨皮熊'
          },
          {
            img: '//b1.hucdn.com/upload/category/1609/30/06333053324120_150x150.png!160x160.webp',
            tit: '威尔贝鲁'
          }
        ],
        [
          {
            img: '//b1.hucdn.com/upload/category/1606/03/52214243214120_150x150.jpg!160x160.webp',
            tit: '益智早教'
          },
          {
            img: '//b1.hucdn.com/upload/category/1606/30/54894228874120_150x150.jpg!160x160.webp',
            tit: '婴幼玩具'
          },
          {
            img: '//b1.hucdn.com/upload/category/1607/07/62817577204120_150x150.jpg!160x160.webp',
            tit: '童车轮滑'
          },
          {
            img: '//b1.hucdn.com/upload/category/1606/30/55894985824120_150x150.jpg!160x160.webp',
            tit: '爬行垫'
          },
          {
            img: '//b1.hucdn.com/upload/category/1606/30/55932785584120_150x150.jpg!160x160.webp',
            tit: '休闲体育'
          },
          {
            img: '//b1.hucdn.com/upload/category/1606/30/55964485174120_150x150.jpg!160x160.webp',
            tit: '游泳戏水'
          },
          {
            img: '//b1.hucdn.com/upload/category/1607/11/17360423644120_150x150.png!160x160.webp',
            tit: '积木'
          },
          {
            img: '//b1.hucdn.com/upload/category/1607/07/64140511144120_150x150.png!160x160.webp',
            tit: '涂画'
          },
          {
            img: '//b1.hucdn.com/upload/category/1607/11/17413199424120_150x150.png!160x160.webp',
            tit: '童书'
          },
          {
            img: '//b1.hucdn.com/upload/category/1606/30/56488684784120_150x150.png!160x160.webp',
            tit: '音乐绘画'
          },
          {
            img: '//b1.hucdn.com/upload/category/1606/30/56643090874120_150x150.png!160x160.webp',
            tit: '书包文具'
          },
          {
            img: '//b1.hucdn.com/upload/category/1606/30/56129539544120_150x150.jpg!160x160.webp',
            tit: '电动遥控'
          },
          {
            img: '//b1.hucdn.com/upload/category/1606/30/56781671124120_150x150.jpg!160x160.webp',
            tit: '摇铃'
          },
          {
            img: '//b1.hucdn.com/upload/category/1607/11/17624983804120_150x150.jpg!160x160.webp',
            tit: '健身架'
          },
          {
            img: '//b1.hucdn.com/upload/category/1606/30/56952907064120_150x150.jpg!160x160.webp',
            tit: '毛绒布艺'
          },
          {
            img: '//b1.hucdn.com/upload/category/1607/11/17658653964120_150x150.jpg!160x160.webp',
            tit: '彩泥仿真'
          }
        ],
        [
          {
            img: '//b1.hucdn.com/upload/category/1512/23/36825830486826_120x120.png!160x160.webp',
            tit: '吸奶器'
          },
          {
            img: '//b1.hucdn.com/upload/category/1512/23/36816920296826_120x120.png!160x160.webp',
            tit: '待产用品'
          },
          {
            img: '//b1.hucdn.com/upload/category/1512/23/36857683506826_120x120.png!160x160.webp',
            tit: '产后用品'
          },
          {
            img: '//b1.hucdn.com/upload/category/1511/04/26868639566826_120x120.jpg!160x160.webp',
            tit: '孕妈护肤'
          },
          {
            img: '//b1.hucdn.com/upload/category/1601/13/77429915636826_120x120.jpg!160x160.webp',
            tit: '孕妇装'
          },
          {
            img: '//b1.hucdn.com/upload/category/1511/04/26817593756826_120x120.jpg!160x160.webp',
            tit: '孕妈内衣'
          },
          {
            img: '//b1.hucdn.com/upload/category/1511/04/26822287726826_120x120.jpg!160x160.webp',
            tit: '打底裤'
          },
          {
            img: '//b1.hucdn.com/upload/category/1512/23/61791135476826_120x120.jpg!160x160.webp',
            tit: '防辐射服'
          },
          {
            img: '//b1.hucdn.com/upload/category/1511/04/26905559676826_120x120.jpg!160x160.webp',
            tit: '产后塑身'
          },
          {
            img: '//b1.hucdn.com/upload/category/1506/15/52391420333577_120x120.png!160x160.webp',
            tit: '营养品'
          },
          {
            img: '//b1.hucdn.com/upload/category/1512/23/36845874266826_120x120.png!160x160.webp',
            tit: '妈咪包'
          },
          {
            img: '//b1.hucdn.com/upload/category/1601/13/75586874516826_120x120.jpg!160x160.webp',
            tit: '孕妇枕'
          }
        ],
        [
          {
            img: '//b1.hucdn.com/upload/category/1612/15/81528564244120_150x150.png!160x160.webp',
            tit: '连衣裙'
          },
          {
            img: '//b1.hucdn.com/upload/category/1609/22/42227511274120_150x150.png!160x160.webp',
            tit: '针织衫'
          },
          {
            img: '//b1.hucdn.com/upload/category/1609/22/42246720754120_150x150.png!160x160.webp',
            tit: '卫衣'
          },
          {
            img: '//b1.hucdn.com/upload/category/1610/14/37829175794120_150x150.png!160x160.webp',
            tit: '短外套'
          },
          {
            img: '//b1.hucdn.com/upload/category/1612/15/81644452804120_150x150.png!160x160.webp',
            tit: '毛呢大衣'
          },
          {
            img: '//b1.hucdn.com/upload/category/1612/15/81660819334120_150x150.png!160x160.webp',
            tit: '羽绒服'
          },
          {
            img: '//b1.hucdn.com/upload/category/1609/22/43136401604120_150x150.png!160x160.webp',
            tit: '牛仔裤'
          },
          {
            img: '//b1.hucdn.com/upload/category/1609/22/43184036754120_150x150.png!160x160.webp',
            tit: '打底裤'
          },
          {
            img: '//b1.hucdn.com/upload/category/1610/19/47163827794120_150x150.png!160x160.webp',
            tit: '时尚套装'
          },
          {
            img: '//b1.hucdn.com/upload/category/1612/15/81741007954120_150x150.png!160x160.webp',
            tit: '风衣'
          },
          {
            img: '//b1.hucdn.com/upload/category/1609/30/02542808314120_150x150.jpg!160x160.webp',
            tit: '内衣'
          },
          {
            img: '//b1.hucdn.com/upload/category/1609/30/02536145234120_150x150.jpg!160x160.webp',
            tit: '保暖套装'
          },
          {
            img: '//b1.hucdn.com/upload/category/1608/25/92133978434120_150x150.png!160x160.webp',
            tit: '冲锋衣'
          },
          {
            img: '//b1.hucdn.com/upload/category/1610/13/57229561624120_150x150.png!160x160.webp',
            tit: '运动鞋'
          }
        ],
        [
          {
            img: '//b1.hucdn.com/upload/category/1610/13/58348297674120_150x150.png!160x160.webp',
            tit: '踝靴'
          },
          {
            img: '//b1.hucdn.com/upload/category/1610/13/57394474744120_150x150.png!160x160.webp',
            tit: '单鞋'
          },
          {
            img: '//b1.hucdn.com/upload/category/1610/13/57386285214120_150x150.png!160x160.webp',
            tit: '靴子'
          },
          {
            img: '//b1.hucdn.com/upload/category/1610/13/57167194344120_150x150.png!160x160.webp',
            tit: '休闲鞋'
          },
          {
            img: '//b1.hucdn.com/upload/category/1608/24/21252445504120_150x150.png!160x160.webp',
            tit: '豆豆鞋'
          },
          {
            img: '//b1.hucdn.com/upload/category/1610/13/57513243524120_150x150.png!160x160.webp',
            tit: '帆布鞋'
          },
          {
            img: '//b1.hucdn.com/upload/category/1608/12/03036922164120_150x150.jpg!160x160.webp',
            tit: '高跟鞋'
          },
          {
            img: '//b1.hucdn.com/upload/category/1608/25/06422834394120_150x150.png!160x160.webp',
            tit: '松糕鞋'
          },
          {
            img: '//b1.hucdn.com/upload/category/1608/24/18925141194120_150x150.jpg!160x160.webp',
            tit: '小白鞋'
          },
          {
            img: '//b1.hucdn.com/upload/category/1609/30/04727034534120_150x150.png!160x160.webp',
            tit: '乐福鞋'
          },
          {
            img: '//b1.hucdn.com/upload/category/1609/08/33235747554120_150x150.png!160x160.webp',
            tit: '运动鞋'
          },
          {
            img: '//b1.hucdn.com/upload/category/1608/24/21701751434120_150x150.png!160x160.webp',
            tit: '男鞋'
          },
          {
            img: '//b1.hucdn.com/upload/category/1609/30/04752765654120_150x150.jpg!160x160.webp',
            tit: '户外鞋'
          },
          {
            img: '//b1.hucdn.com/upload/category/1608/24/26969459344120_150x150.png!160x160.webp',
            tit: '单肩包'
          },
          {
            img: '//b1.hucdn.com/upload/category/1608/24/22290587084120_150x150.png!160x160.webp',
            tit: '双肩包'
          },
          {
            img: '//b1.hucdn.com/upload/category/1608/24/19954908494120_150x150.png!160x160.webp',
            tit: '手提包'
          },
          {
            img: '//b1.hucdn.com/upload/category/1607/08/57122129714120_150x150.png!160x160.webp',
            tit: '钱包'
          },
          {
            img: '//b1.hucdn.com/upload/category/1607/28/97285442034120_150x150.png!160x160.webp',
            tit: '男包'
          },
          {
            img: '//b1.hucdn.com/upload/category/1607/08/57132482104120_150x150.png!160x160.webp',
            tit: '拉杆箱'
          },
          {
            img: '//b1.hucdn.com/upload/category/1608/24/22497940664120_150x150.png!160x160.webp',
            tit: '银饰品'
          },
          {
            img: '//b1.hucdn.com/upload/category/1608/24/22781085354120_150x150.png!160x160.webp',
            tit: '丝巾围巾'
          },
          {
            img: '//b1.hucdn.com/upload/category/1608/24/22583761414120_150x150.png!160x160.webp',
            tit: '头饰发饰'
          },
          {
            img: '//b1.hucdn.com/upload/category/1608/24/22738130544120_150x150.png!160x160.webp',
            tit: '手表'
          },
          {
            img: '//b1.hucdn.com/upload/category/1609/30/04818596634120_150x150.png!160x160.webp',
            tit: '帽子'
          },
          {
            img: '//b1.hucdn.com/upload/category/1609/08/33280158264120_150x150.png!160x160.webp',
            tit: '毛衣链'
          },
          {
            img: '//b1.hucdn.com/upload/category/1608/24/22924194704120_150x150.png!160x160.webp',
            tit: '水晶串珠'
          },
          {
            img: '//b1.hucdn.com/upload/category/1608/24/20446138824120_150x150.png!160x160.webp',
            tit: '耳饰'
          },
          {
            img: '//b1.hucdn.com/upload/category/1607/28/97170292314120_150x150.png!160x160.webp',
            tit: '男士皮带'
          }
        ],
        [
          {
            img: '//b1.hucdn.com/upload/category/1601/14/35348206296826_120x120.jpg!160x160.webp',
            tit: '床品套件'
          },
          {
            img: '//b1.hucdn.com/upload/category/1601/14/35361825476826_120x120.jpg!160x160.webp',
            tit: '被子床单'
          },
          {
            img: '//b1.hucdn.com/upload/category/1601/14/35993290066826_120x120.jpg!160x160.webp',
            tit: '毛毯绒毯'
          },
          {
            img: '//b1.hucdn.com/upload/category/1601/14/35879902926826_120x120.jpg!160x160.webp',
            tit: '毛巾浴巾'
          },
          {
            img: '//b1.hucdn.com/upload/category/1511/18/47955860176826_120x120.jpg!160x160.webp',
            tit: '拖鞋'
          },
          {
            img: '//b1.hucdn.com/upload/category/1601/14/35373727546826_120x120.jpg!160x160.webp',
            tit: '水杯'
          },
          {
            img: '//b1.hucdn.com/upload/category/1601/14/36403450166826_120x120.jpg!160x160.webp',
            tit: '小家电'
          },
          {
            img: '//b1.hucdn.com/upload/category/1511/18/46388612626826_120x120.jpg!160x160.webp',
            tit: '收纳百货'
          },
          {
            img: '//b1.hucdn.com/upload/category/1510/28/15292865656826_120x120.jpg!160x160.webp',
            tit: '家具家饰'
          },
          {
            img: '//b1.hucdn.com/upload/category/1511/18/47961927246826_120x120.jpg!160x160.webp',
            tit: '布艺座垫'
          },
          {
            img: '//b1.hucdn.com/upload/category/1602/14/33350836166826_120x120.jpg!160x160.webp',
            tit: '晾晒除湿'
          },
          {
            img: '//b1.hucdn.com/upload/category/1511/18/47948224886826_120x120.jpg!160x160.webp',
            tit: '洗衣液'
          },
          {
            img: '//b1.hucdn.com/upload/category/1511/18/47986567636826_120x120.jpg!160x160.webp',
            tit: '纸巾'
          },
          {
            img: '//b1.hucdn.com/upload/category/1511/18/48011107056826_120x120.jpg!160x160.webp',
            tit: '厨具餐具'
          },
          {
            img: '//b1.hucdn.com/upload/category/1601/14/35866068776826_120x120.jpg!160x160.webp',
            tit: '家庭清洁'
          },
          {
            img: '//b1.hucdn.com/upload/category/1601/14/36090720746826_120x120.jpg!160x160.webp',
            tit: '健康护理'
          }
        ],
        [
          {
            img: '//b1.hucdn.com/upload/category/1512/06/85158569796826_120x120.jpg!160x160.webp',
            tit: '护肤套装'
          },
          {
            img: '//b1.hucdn.com/upload/category/1512/06/85165102116826_120x120.jpg!160x160.webp',
            tit: '卸妆洁面'
          },
          {
            img: '//b1.hucdn.com/upload/category/1512/06/85169927106826_120x120.jpg!160x160.webp',
            tit: '化妆水'
          },
          {
            img: '//b1.hucdn.com/upload/category/1512/06/85175425296826_120x120.jpg!160x160.webp',
            tit: '乳液面霜'
          },
          {
            img: '//b1.hucdn.com/upload/category/1512/06/85196693166826_120x120.jpg!160x160.webp',
            tit: '面膜'
          },
          {
            img: '//b1.hucdn.com/upload/category/1512/06/85210980886826_120x120.jpg!160x160.webp',
            tit: '洗发护发'
          },
          {
            img: '//b1.hucdn.com/upload/category/1512/06/85215751276826_120x120.jpg!160x160.webp',
            tit: '沐浴润体'
          },
          {
            img: '//b1.hucdn.com/upload/category/1512/06/85221540296826_120x120.jpg!160x160.webp',
            tit: '口腔护理'
          },
          {
            img: '//b1.hucdn.com/upload/category/1512/06/85224962286826_120x120.jpg!160x160.webp',
            tit: '卫生巾'
          },
          {
            img: '//b1.hucdn.com/upload/category/1511/19/97110744196826_120x120.jpg!160x160.webp',
            tit: '御泥坊'
          },
          {
            img: '//b1.hucdn.com/upload/category/1510/20/21131997306826_120x120.jpg!160x160.webp',
            tit: '百雀羚'
          },
          {
            img: '//b1.hucdn.com/upload/category/1510/20/21192920456826_120x120.jpg!160x160.webp',
            tit: '自然堂'
          },
          {
            img: '//b1.hucdn.com/upload/category/1510/20/28199487336826_120x120.jpg!160x160.webp',
            tit: '资生堂'
          },
          {
            img: '//b1.hucdn.com/upload/category/1510/20/21175297656826_120x120.jpg!160x160.webp',
            tit: '苏菲'
          }
        ],
      ]
    }
  }
  componentDidMount () {
    this.refs.left_list.firstChild.className = 'active'
    this.refs.right_list.firstChild.style.display = 'block'
  }
  back () {
    this.props.history.go(-1)
  }
  searchItem (event) {
    let val = ''
    if(event.target.nodeName === 'IMG'){
      val = event.target.nextSibling.textContent
    } else if(event.target.nodeName === 'P') {
      val = event.target.textContent
    }
    console.log(val)
    store.dispatch({
      type: 'CHANGE_VAL',
      data: val
    })
    this.props.history.push('/result')
  }
  changeList (event) {
    let index = Number(event.target.getAttribute('index'))
    const rightObj = this.refs.right_list.childNodes
    const obj = event.target.parentNode.childNodes
    for(var i = 0; i < rightObj.length; i++){
      rightObj[i].style.display = 'none'
    }
    rightObj[index].style.display = 'block'
    for(var j = 0; j < obj.length; j++){
      obj[j].className = ''
    }
    event.target.className = 'active'
  }
  render () {
    return (
      <div className="kind_content">
        <header className="header">
          <span className='iconfont icon---' onClick={ this.back.bind(this) }></span>
          <p>分类</p>
          <em> </em>
        </header>
        <div className="cover">
          <div className="left">
            <ul className="left_cover" ref='left_list' onClick={ this.changeList.bind(this) }>
              {
                tabs.map((item, index) => {
                  return (
                    <li key={ index } index={ index }>{ item.title }</li>
                  )
                })
              }
            </ul>
          </div>
          <div className="right" ref='right_list'>
              {
                this.state.tab1.map((item, index) => {
                  let str = ''
                  item.map((itm, index1) => {
                    str += `<li class='item' key=${index1}><img src='${ itm.img }' alt=""/><p>${ itm.tit }</p></li>`
                    return str
                  })
                  return (
                    <div className="list_cover"  key={ index }>
                      <ul className='right_cover' key={ index }  dangerouslySetInnerHTML={{ __html: str }} onClick={ this.searchItem.bind(this) }>
                      </ul>
                    </div>
                  )
                })
              }
          </div>
        </div>
      </div>
    )
  }
}

export default Com