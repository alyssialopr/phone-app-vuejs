<template>
  <div id="numero">
    <div class="numerocomp">
      <p>Numéro composé : <br> {{ phoneNumber }}</p>
    </div>
    <div class="chiffre">
      <KeyButton v-for="key in keyboard" :key="key" :value="key" @button-click="handleButtonClick" />
    </div>
    <button @click="call" class="telep"><img class="tel" src="@/assets/telephone.svg" alt="Téléphone"></button>
  </div>
</template>

<script>
import KeyButton from '@/components/KeyButton.vue';
import { useJournalStore } from "@/stores/called";

export default {
  components: {
    KeyButton
  },
  data() {
    return {
      phoneNumber: ''
    };
  },
  computed: {
    keyboard() {
      return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#','delete'];
    }
  },
  methods: {
    handleButtonClick(value) {
      if (value !== 'delete') {
        this.phoneNumber += value;
      }
    },
    handleDeleteClick() {
      this.phoneNumber = this.phoneNumber.slice(0, -1);
    },

    runAppel(){
      this.journalStore.addJournal(journal);
      this.$router.push("/journal");
    },
  }
};
</script>

<style scoped>
.chiffre{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  margin: 0 auto;
  width: 300px;
  height: 300px;
  font-size: 30px;
}

.numerocomp{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  margin: 0 auto;
  width: 300px;
  height: 150px0px;
  font-size: 15px;
}

.numerocomp > p {
  text-align: center;
  margin-top: 50px;
  font-size: 20px;
  font-weight: bold;
  width: 300px;
}
.telep{
  width: 80px;
  height: 80px;
  margin: 0 auto;
  display: block;
  margin-top: 20px;
  gap: 5px;
  border-radius: 30px;
  background-color: #54d554;
  border: 2px solid #1a2a1a;
}

.telep:hover{
  background-color: #2d6c2d;
  border: 2px solid #1a2a1a;
}

.tel{
  width: 50px;
  height: 50px;
  margin: 0 auto;
  display: block;
}
</style>