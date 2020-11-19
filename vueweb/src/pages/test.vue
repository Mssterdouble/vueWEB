<template>
  <div></div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  beforeMount () {
    let jsona = { "title": "阿信公告", "content": { "message": "消息" }, "type": "1", "date": "20200127000000", "isEncrypt": "0", "isAutoPush": "0", "isSave": "1", "alertMsg": "阿信公告" }
    // let jsona = "{\"title\":\"E\U4eab\U94f6\U51ac \U5468\U5468\U9886\U7ea2\U5305\",\"content\":{\"message\":{\"message2\":\"\",\"newflag\":\"1\",\"isPic\":\"1\",\"msgid\":\"sgts20201109143418\",\"isMarketing\":\"1\",\"marketingtext\":\"\U652f\U4ed8\U5b9d\U7ea2\U5305\U3001\U5e74\U7ec8\U5927\U5956\U7b49\U60a8\U62ff\Uff01\U9650\U53d7\U9080\U5ba2\U6237\U53c2\U4e0e\",\"type\":\"4\",\"isDetailpic\":\"1\",\"url\":\"http://go.citicbank.com/exyd_ts\",\"menuid\":\"100521\",\"href\":{\"PRDCODE\":\"A192A3330\",\"type\":\"shareInvestedChose\"},\"needlogin\":\"0\",\"jumpDetail\":\"1\"},\"imageUrl\":\"http://autoload.bank.ecitic.com/ebank/docs/cardpic/sgts2020110914341803.png\"},\"type\":\"0\",\"date\":\"20201111000000\",\"menuid\":\"100103\",\"isEncrypt\":\"0\",\"isAutoPush\":\"0\",\"isSave\":\"1\",\"alertMsg\":\"E\U4eab\U94f6\U51ac \U5468\U5468\U9886\U7ea2\U5305\",\"goto\":{\"url\":\"http://go.citicbank.com/exyd_ts\"}}";
    console.log(typeof JSON.stringify(jsona))
    console.log(this.isJSON(jsona))
  },
  methods: {
    isJSON (str) {
      if (typeof str === 'string') {
        try {

          let obj = JSON.parse(str)
          if (typeof obj == 'object' && obj) {
            return true;
          } else {
            return false;
          }
        } catch (e) {
          return false
        }
      } else {
        return false
      }
    }
  }
}
</script>