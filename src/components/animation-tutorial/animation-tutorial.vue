 <template>
   <div class="animation-box g-pr">
    <!-- 列表过渡 -->
    <div class="list-demo-box">
      <button @click="add">Add</button>
      <button @click="remove">Remove</button>
      <transition-group name="list" tag="div">
        <span v-for="item in items" :key="item" class="list-item">{{ item }}</span>
      </transition-group>
    </div>

    <!-- 多个组件的过渡 -->
    <input type="radio" name="a" v-model="view" value="v-a"> <label for="a">v-a</label>
    <input type="radio" name="b" v-model="view" value="v-b"> <label for="b">v-b</label>
    <button @click="view='v-a'">A</button>
    <button @click="view='v-b'">B</button>

    <transition name="component-fade" mode="out-in">
      <component v-bind:is="view"></component>
    </transition>

    <!-- 多个元素的过渡 -->
    <transition name="fade-btn" mode="in-out">
      <button class="g-pa" v-if="status === 'off'" key="save" @click="status = 'on'">on</button>
      <button class="g-pa" v-else key="edit" @click="status = 'off'">off</button>
    </transition>

    <!-- 第二种方式, 用 css animation 做动画； -->

    <!-- 引入了 velocity.js -->
    <div class="animation-5-box">
      <button @click="visible5=!visible5">Toggle</button>

      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
        v-bind:css="false"
      >
        <p v-if="visible5">Demo</p>
      </transition>
    </div>

    <!-- 引入 animate.css -->
    <div class="animation-4-box">
      <button @click="visible4=!visible4">Toggle render</button>

      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @leave-cancelled="leaveCancelled"
        enter-active-class="animated tada"
        leave-active-class="animated bounceOutRight"
      >
        <p v-if="visible4">现在你已经了解了前端开发的基本概念，开始要进入实际项目了。</p>
      </transition>
    </div>

    <div class="animation-3-box">
      <button @click="visible3=!visible3">Toggle show</button>

      <transition name="bounce">
        <p v-if="visible3">现在你已经了解了前端开发的基本概念，开始要进入实际项目了。这一节将教会大家如何初始化一个项目，开发出一个可以展示 hello world 的项目.</p>
      </transition>
    </div>
    <!-- 第一种方式, 用 transition 做动画； -->
    <div class="animation-2-box">
      <button @click="visible2=!visible2">Toggle render</button>

      <transition name="slide-fade">
        <p v-if="visible2">hello</p>
      </transition>
    </div>
    <div class="animation-1-box">
      <button @click="visible1=!visible1">Toggle</button>

      <transition name="fade">
        <p v-if="visible1">hello</p>
      </transition>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import CA from './v-a'
import CB from './v-b'

export default {
  name: 'AnimationTutorial',
  components: {
    'v-a': CA,
    'v-b': CB
  },
  data () {
    return {
      visible1: true,
      visible2: true,
      visible3: true,
      visible4: true,
      visible5: true,
      status: 'on',
      view: 'v-a',
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10
    }
  },
  methods: {
    randomIndex () {
      return Math.floor(Math.random() * this.items.length)
    },
    add () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove () {
      this.items.splice(this.randomIndex(), 1)
    },
    // 进入中
    beforeEnter (el) {
      el.style.opacity = 0
      el.style.transformOrigin = 'left'
      console.log('enter 之前')
    },
    // 可选 与 css 结合使用
    enter (el, done) {
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      Velocity(el, { fontSize: '1.4em' }, { complete: done })
      console.log('enter 开始了')
      // done()
    },
    afterEnter (el) {
      console.log('enter 结束了')
    },
    enterCancelled (el) {
      console.log('enter 取消了')
    },
    beforeLeave (el) {
      console.log('leave 之前')
    },
    leave (el, done) {
      console.log('leave 开始了')
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, { complete: done })
      // Velocity (el, { translateX: '15px', rotateZ: '50deg' }, { duration: 500 })
      // Velocity (el, { rotateZ: '100deg' }, { loop: 2 })
      // Velocity (el, { translateX: '15px', translateY: '15px', rotateZ: '45deg', opacity: 0 }, { complete: done })
      // done()
    },
    afterLeave (el) {
      console.log('leave 结束了')
    },
    leaveCancelled (el) {
      console.log('leave 取消了')
    }
  }
}
</script>

<style lang="scss" scoped>
.list-item { display: inline-block; margin-right: 10px; transition: all 1s; }
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0; transform: translateY(30px);
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}

.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}

.fade-btn-enter-active, .fade-btn-leave-active {
  transition: all .5s;
}
.fade-btn-enter {
  opacity: 0; transform: translateX(100px)
}
.fade-btn-leave-to {
  opacity: 0; transform: translateX(-100px)
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% { transform: scale(0); }
  50% { transform: scale(1.5); }
  100% { transform: scale(1); }
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)
}
.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
  transform: translateX(10px);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.g-pr {
  position: relative;
}
.g-pa {
  position: absolute;
}
</style>
