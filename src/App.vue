<template>
  <div id="app">
    <header>
      <router-link to="/">
        <img src="./assets/question_mark.png"/>
        <h3>
          问卷管理
        </h3>
        <h5>
          我的问卷
        </h5>
      </router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 1000px;
  width: 100%;
  background-color: #EFEFEF;

}

header{
  color: white;
  background-color: #EE7419;
  width: 100%;
  padding: 10px;
  overflow: auto;
  text-align: center;

  img{

    float: left;
    margin-left: 100px;
  }
  h3{
    color: white;
    margin-left: 60px;
    margin-top: 5px;
    float: left;
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
  }

  h5{
    color: white;
    margin-left: 60px;
    margin-top: 10px;
    float: left;
    display: inline-block;
    font-size: 16px;
  }

}



</style>
