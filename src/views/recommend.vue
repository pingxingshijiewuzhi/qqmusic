<template>
  <div class="recommend">
    <div class="recommend-content">
      <!-- 轮播图 -->
      <div class="slider-wrapper"></div>
      <m-slide :slideList='slideList'></m-slide>
      <!-- 热门歌曲列表 -->
      <div class="recommend-list" v-if="hotRecomList.length">
        <h1 class="list-title">热门歌曲推荐</h1>
        <ul>
          <li v-for="(item,index) in hotRecomList" :key='index' class="item"
          :class='[(index+1)%2===1?"p-left":"p-right"]'
          >
              <div class="icon">
                    <img :src="item.imgurl" alt="" width="160" height="160">
              </div>
              <div class='text'>
                  <h2 class='name'>{{item.creator.name}}</h2>
                  <p class="desc">{{item.dissname}}</p>
              </div>
          </li>
        </ul>
      </div>
      <!-- Loading -->
      <div class="loading-container" v-show="!hotRecomList.length">
            <loading></loading>
      </div>
    </div>
  </div>
</template>

<script>
import MSlide from '../base/m-slide'
import  {getSlideList, getHotRecom} from '../api/recommend.js'
import {ERR_OK} from '../common/js/config.js'
import Loading from '../base/loading/loading'
export default {
  data(){
    return {
      slideList:[],
      hotRecomList:[]
    }
  },
  components:{
    MSlide,
    Loading
  },
  methods:{
    _getSlideList(){
      // 调用接口引入数据
      getSlideList().then(res=>{
        console.log(res);
        if(res.code === ERR_OK){//判断接口状态是否正常
          this.slideList = res.data.slider;
        }
      })
    },
    _getHotRecom(){
        getHotRecom().then(res=>{
      console.log(1111);
      console.log(res.data);
      if(res.code === ERR_OK){//判断接口状态是否正常
          this.hotRecomList = res.data.list;
        }
    })
    }
  },
    // 请求逻辑不能直接写在其中
  created(){
    this._getSlideList();
    this._getHotRecom()
  }
}
</script>

<style scoped lang="stylus" >
@import '../common/stylus/variable'
.recommend
  position fixed
  width 100%
  top 88px
  bottom 0
  .recommend-content
    height 100%
    overflow hidden
    .slider-wrapper
      position relative
      width 100%
      overflow hidden
    .recommend-list
      height 100%
      overflow hidden
      position relative
      .p-left
      padding-left 10px
      .p-right
      padding-right 10px
      .list-title
        height 65px
        line-height 65px
        text-align center
        font-size $font-size-medium-x
        color $color-theme

      .item
        display inline-flex
        box-sizing border-box
        align-items center
        flex-direction column
        width 50%

        .icon
          flex 0 0 60px
          max-width 160px
          .recom-img
            border-radius 10px
            max-width 160px
        .text
          line-height 20px
          font-size $font-size-medium
          max-width 160px
          margin-top 6px
          .name
            margin-bottom 10px
            color #888
          .desc
            color $color-text-d
    .loading-container
      display flex
      align-items center
      justify-content center
      transform translateY(100%)
  .slide-enter-active, .slide-leave-active
    transition all 0.5s
  .slide-enter, .slide-leave-to
    transform translateX(100%)
  
</style>