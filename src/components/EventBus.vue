<template>

</template>


<script>
    export default {
        data () {
            return {
                current_page_id: 0
            }
        },
         watch: {
            // a computed getter
            current_page_id: function () {
              console.log(this.current_page_id)
           }
      }
    }
</script>


<style scoped>

</style>
