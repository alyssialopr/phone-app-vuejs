<template>
  <div class="contact">
    <h2>Contacts</h2>

    <ul>
      <li v-for="contact in contacts" :key="contact.id" :contact="contact">
        <p>{{ contact.name }}</p>
        <p>{{ contact.phone }}</p>
      </li>
    </ul>
  </div>

  <button class="creercontact" @click="goToCreerContactView">Ajouter un contact</button>

</template>

<style scoped>
    .creercontact{
        width: 90px;
        height: 40px;
        margin-top: 10px;
        margin-right: 10px;
        font-size: 12px;
    }
</style>

<script>
import Contacts from '@/components/Contacts.vue'
import { useContactStore } from "@/stores/store";

export default {
    name: "ContactView",
    data() {
        const contactStore = useContactStore();

        return {
            contactStore
        };
    },
    computed: {
        contacts() {
            return this.contactStore.contacts;
        }
    },
    methods: {
        goToCreerContactView() {
            this.$router.push("/creercontact");
        }
    },
};
</script>
