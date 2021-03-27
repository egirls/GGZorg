<template>
  <div>
    <div class="paperDBoard" ref="paperDBoard">
    </div>
  </div>
</template>

<script>
import { mapGetters,mapMutations } from 'vuex'

export default {
  name: 'paperD',
  //数据
  data(){
      return {
      };
  },
  mounted() {
    this.$refs.paperDBoard.innerHTML = this.paperD
  },
  props: {},
  computed: {
    ...mapGetters([
      'paperD'
    ]),
    ...mapMutations([
    ]),
  },
  methods: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.paperDBoard{
  margin: 0 20px;
}
</style>