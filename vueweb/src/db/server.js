import ADS from './tables/tb-ads'
const SQL = {

  // 获取全部广告内容
  getAllAds () {
    console.log('获取全部广告数据', ADS)
    return ADS
  },

  /*
  通过起始位置查询广告
  start 开始位置
  end 结束位置
  status 失效状态 0全部1有效2失效
  */
  getAdsBySize(start,end,status){
    end = end < ADS.length ? end : ADS.length
    let ads = ADS.filter((item)=>{
      return status == '0' || (status == '1' && item.status === '1') || (status == '2' && item.status === '0')
    }).slice(start,end)
    let ret = {
      total: ADS.length,
      position: 0,
      resultList: ads
    }
    return ret
  }
}
// select * form tab where key=value limit 5
export default SQL