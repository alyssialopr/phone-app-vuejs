<template>
  <form @submit.prevent="handleSubmit">
    <label for="name">Nom :</label>
    <br />
    <input type="text" id="name" v-model="name" required />
    <br />
    <label for="numero">Numero :</label>
    <br />
    <input type="tel" id="numero" v-model="phone" required />
    <br />
    <button type="submit" @click="handleSubmit">Envoyer</button>
  </form>
</template>

<script>
import { useContactStore } from "@/stores/store";

export default {
    name: "CreerContactView",
    setup() {
        const contactStore = useContactStore();
        return { contactStore };
  },
  data() {
    return {
      name: "",
      phone: "",
    };
  },
  methods: {
    handleSubmit() {
          const contact = {
        id: Date.now().toString(),
        name: this.name,
        phone: this.phone,
      };
      this.contactStore.addContact(contact);
      this.$router.push("/contact");
    },
  },
};
</script>
