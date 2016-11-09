
<template><div id="mycheck">
        <el-checkbox v-model="checked1">备选项3</el-checkbox>
        <el-checkbox v-model="checked2" disabled>备选项2</el-checkbox></div>
</template>
<script>
    export default {
        data() {
            return {
                checked1: false,
                checked2: true
            };
        }
    };
</script>