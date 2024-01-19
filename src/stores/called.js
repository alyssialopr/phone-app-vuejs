import { defineStore } from "pinia";

export const useJournalStore = defineStore("journal", {
  state: () => ({
    journals: [
      {
        date: "01/01/2021",
        heure: "12:00",
        contact: "Doe",
        phone: "0606060606",
      },
    ],
  }),

  actions: {
    call(contact) {
      const date = new Date();
      const appel = {
        date: date.toLocaleDateString(),
        heure: date.toLocaleTimeString(),
        contact: contact,
      };
      this.journal.push(appel);
    },
  },
});
