<template>
  <div id="app">
    <header>
        <img src="./assets/question_mark.png" @click="toCheck"/>
        <h3 @click="toCheck">
          问卷管理
        </h3 >
        <h5 @click="toCheck">
          我的问卷
        </h5>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      //初始化为全不选
      checked: [],
      AllQnChoose: false,
      qnPages: []
    }
  },
  methods: {
    toCheck: function () {
        this.$router.push('check')
    }
  }

}
</script>

<style lang="scss" scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: #EFEFEF;
  padding-bottom: 100px;
  border-bottom: 2px solid #CCC;

}

header{
  color: white;
  background-color: #EE7419;
  width: 100%;
  padding: 10px;
  overflow: hidden;
  text-align: center;

  @media (max-width: 992px) {
    text-align: left;

    img{
      margin-left: 2px;
    }
    h3{
      margin-left: 20px;
      margin-top: 5px;
    }

    h5{
      margin-left: 10px;
      margin-top: 10px;

    }

  }

  img{
    cursor: pointer;
    float: left;
    margin-left: 100px;
    @media (max-width: 992px) {
        margin-left: 20px;
    }
  }
  h3{
    color: white;
    margin-left: 60px;
    margin-top: 5px;
    float: left;
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }

  h5{
    cursor: pointer;
    color: white;
    margin-left: 60px;
    margin-top: 10px;
    float: left;
    display: inline-block;
    font-size: 16px;
  }

}



</style>
