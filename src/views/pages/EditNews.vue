<template>
  <div>
    <MdEditor />
  </div>
</template>

<script>
import { mapGetters,mapMutations } from 'vuex'
import MdEditor from '../../components/MDEditor.vue'

export default {
  name: 'EditNews',
  //数据
  data(){
      return {
      };
  },
  props: {},
    //组件
  components: {
    MdEditor
  },
  computed: {
    ...mapGetters([
      'news'
    ]),
    ...mapMutations([
    ]),
  },
  methods: {
      handleChange(val) {
        console.log(`更改 ${val} `);
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>