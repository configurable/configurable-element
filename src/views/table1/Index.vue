<template>
  <div>
    <el-input :type='submitDataRules.data1.type' v-model="submitData[submitDataRules.data1.propName]" ></el-input>
    <el-form v-model="submitData">
      <el-form-item :label="submitDataRules.data1.label" prop="data1">

      </el-form-item>
      <el-form-item label="">
        
      </el-form-item>
      
    </el-form>
  </div>
</template>

<script>
import config from "./data";

export default {
  data() {
    return {
      a: 1,
      submitData: config.submitData,
      submitDataRules: config.submitDataRules
    };
  },
  mounted() {
    setTimeout(() => {
      this.a++;
    }, 1000);
  },
  computed: {
    b() {
      let b = this.a;
      console.log(b);

      return b;
    }
  }
};
</script>

<style lang="postcss">
</style>