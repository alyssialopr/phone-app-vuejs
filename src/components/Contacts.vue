<template>
  <div>
    <h2>{{ contact.name }}</h2>
    <p>{{ contact.phone }}</p>
  </div>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true
    }
  }
}
</script>