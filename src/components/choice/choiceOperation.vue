<template>
  <div>
    <div class="container">
      <span onselectstart="return false"  class="up" v-bind:class="{active: canUp}" @click="up">
      上移
       </span>

      <span onselectstart="return false" class="down" v-bind:class="{ active: canDown}" @click="down">
      下移
      </span>

      <span onselectstart="return false" class="repeat" @click="repeat">
       复用
      </span>

      <span onselectstart="return false;" class="delete" @click="deleteChoice">
       删除
      </span>

    </div>

  </div>
</template>


<script>
    export default {
        data () {
            return {
            }
        },
        props: {
          canUp: {
            type: Boolean,
            default: false
          },
          canDown: {
            type: Boolean,
            default: false
          }
        },
        methods: {
          up: function () {
            this.$emit("up")
          },
          down: function () {
            this.$emit("down")
          },

          deleteChoice: function () {
            this.$emit('deleteChoice')
          },
          repeat: function () {
            this.$emit('repeat')
          }
        }
    }
</script>


<style lang="scss" scoped>

  .container{
    span{
      font-size: 16px;
      padding: 10px;
      cursor: pointer;
    }
    .up, .down{
      display: none;
    }
    .active{
      display: inline;
    }
  }
</style>
