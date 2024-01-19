import { defineStore } from "pinia";

export const useContactStore = defineStore("contact", {
  state: () => ({
    contacts: [
      {
        id: 1,
        name: "Doe",
        phone: "0606060606",
      },
    ],
  }),

  actions: {
    addContact(contact) {
      this.contacts.push(contact);
    },
  },
});
