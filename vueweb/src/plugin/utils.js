import Vue from '../main'

const utils = {
  getUrlQuaryParams () {
    return Vue.$route.params
  }
}

export default utils