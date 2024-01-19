<template>
  <button @click="handleClick">{{ value }}</button>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    handleClick() {
      if (this.value === 'delete') {
        this.$emit('delete-click');
      } else {
        this.$emit('button-click', this.value);
      }
    }
  }
};
</script>