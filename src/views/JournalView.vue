

<script>
import { useJournalStore } from "@/stores/called";

export default {
    name: "JournalView",
    setup() {
        const journalStore = useJournalStore();
        return { journalStore };
    },

    data() {
        return {
            journal: "journal"
        };
    },

    methods: {
        handleSubmit() {
            const journal = {
                id: Date.now().toString(),
                contact: this.contact,
                phone: this.phone,
            };
            this.journalStore.addJournal(journal);
            this.$router.push("/journal");
        },
    },
};
</script>

<template>
    <div class="journal">
        <h2>Journal</h2>
        <ul>
        <li v-for="journal in journalStore.journals" :key="journal.id" :journal="journal">
            <p>{{ journal.contact }}</p>
            <p>{{ journal.phone }}</p>
        </li>
        </ul>
    </div>
</template>