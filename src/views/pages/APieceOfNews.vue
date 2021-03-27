<template>
  <div>
    <div class="aNewBoard" ref="aNewBoard">
    </div>
  </div>
</template>

<script>
import { mapGetters,mapMutations } from 'vuex'

export default {
  name: 'APieceOfNews',
  //数据
  data(){
      return {
      };
  },
  mounted() {
    this.$refs.aNewBoard.innerHTML = this.aNews
  },
  props: {},
  computed: {
    ...mapGetters([
      'aNews'
    ]),
    ...mapMutations([
      'changeANews', // 将 `this.changeANews()` 映射为 `this.$store.commit('changeANews')`
    ]),
  },
  methods: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.aNewBoard{
  margin: 0 20px;
}
</style>