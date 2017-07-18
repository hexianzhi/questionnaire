<template>
  <div>
    <div id="container">
      <div class="single-qn" >
      <span class="qn-name">
        {{this.index}}. 单选题
      </span>
        <ul class="qn-list">
          <li class="qn-list-item"  v-for="(name, index)  in names" v-bind:key="index">
            <label> <input class="item-checkbox" type="radio"/> </label>
            <p class="item-content" v-on:keyup="itemNameChange(index)"   contenteditable="true"   >
              {{name}}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>


</template>


<script>
    export default {
      name: 'singleChoice',
      data () {
        return {
            names: ['点我编辑','点我编辑']
        }
      },

      props: {
       index: {
         type: Number,
         default: 1
       }
      },
      methods: {
        itemNameChange: function (index) {
        //     获取内容有变化的选项的位置
          console.log(index)
          console.log(event.target.parentElement)
        }
      }

    }
</script>


<style lang="scss" scoped>
  #container{
    text-align: left;

    .qn-name{
      font-size: 18px;
      font-weight: bold;
    }

    .qn-list-item{
      margin: 20px;

      .item-checkbox{
        background-color: white;
      }

      .item-content{
        display: inline-block;
        margin-left: 10px;
        font-size: 16px;
      }

    }
    .single-qn{
      padding: 20px;
    }

  }


</style>
