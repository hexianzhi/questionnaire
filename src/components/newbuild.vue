<template>
    <div>
      <div class="new-build">
        <button class="new-questionnaire">
          <router-link to="/edit">
            + 新建问卷
          </router-link>
        </button>
      </div>

    </div>


</template>


<script>
    export default {
        data () {
            return {}
        }
    }
</script>


<style lang="scss" scoped>


  .new-build {
    height: 300px;
    position: relative;
    box-shadow: 0 0 3px grey;
    background-color: #fff;
    box-shadow: 0 0 5px #ccc;
    width: 1040px;

    /*这是个坑，记得放在margin 后面*/
    margin: 0 auto;
    margin-top: 50px;
    .new-questionnaire {
      width: 150px;
      height: 50px;
      font-size: 20px;
      position: absolute;
      left: 50%;
      top: 50%;
      background-color: #EE7419;
      border: 1px solid #EE7419;
      border-radius: 3px;
      transform: translate(-50%,-50%);
      a {
        color: #fff;
      }
  }


  }

  #new-build, .new-questionnaire {
    box-shadow: 0 0 3px grey;
  }
</style>
