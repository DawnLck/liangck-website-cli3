<template>
    <div class="home">
        <Particle></Particle>
        <Content class="container">
            <h1 class="cd-headline clip is-full-width">
                我是
                <span class="cd-words-wrapper" v-text="typeShow"></span>
                _
            </h1>
        </Content>
    </div>
</template>

<script>
// @ is an alias to /src
import Particle from '@/components/Particles.vue'

export default {
  name: 'home',
  components: {
    Particle
  },
  data: function () {
    return {
      timer: 0,
      typeTarget: '',
      typeShow: '',
      typeIndex: 0,
      typeIter: 0,
      typeArray: ['Liangck', '一枚程序员', '前端工程狮']
    }
  },
  methods: {
    hideType () {
      let _iter = this.typeIter

      if (_iter > 0) {
        this.typeShow = this.typeShow.substring(0, this.typeShow.length - 1)
        this.typeIter--
        this.timer = setTimeout(() => {
          this.hideType()
        }, 100)
      } else {
        // clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          ++this.typeIndex
          if (this.typeIndex >= this.typeArray.length) this.typeIndex = 0
          this.typeTarget = this.typeArray[this.typeIndex]
          this.typing()
        }, 300)
      }
    },
    typing () {
      let _target = this.typeTarget
      let _iter = this.typeIter

      if (_iter < _target.length) {
        this.typeShow += _target[this.typeIter++]
        this.timer = setTimeout(() => {
          this.typing()
        }, 100)
      } else {
        // clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.hideType()
        }, 1000)
      }
    }
  },
  mounted () {
    this.typeTarget = this.typeArray[this.typeIndex]
    this.typing()
  }
}
</script>

<style lang="scss">
    .home {
        height: 40rem;
        padding: 2rem 0;
        margin: 2rem 3rem;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .container {
        position: relative;
        text-align: center;
        color: white;
        font-size: 2rem;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }
</style>
