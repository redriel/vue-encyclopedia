<script>
import Modal from '@/components/Modal.vue'
export default {
  name: 'Card',
  props: {
    name: String,
    description: String,
    image: String,
    category: String
  },
  components: {
    Modal
  }
}
</script>

<template>
  <div class="card">
    <img class="card-image" :src="image" @click="$refs.modalName.openModal()" />
    <div class="container">
      <div class="card-text">{{ name }}</div>
    </div>
  </div>

  <modal ref="modalName">
    <template v-slot:header>
      {{ name }}
    </template>

    <template v-slot:body>
      <div class="modal-container">
        <img class="modal-image" :src="image" />
        <div class="modal-text">
          <p>
            {{ description }}
          </p>
        </div>
      </div>
    </template>
  </modal>
</template>

<style scoped>
.modal-container {
  padding: 0px 20px 0px;
  max-width: 640px;
}

.modal-image {
  display: inline-block;
  vertical-align: top;
  width: 46%;
  margin: 0px 30px 0 0;
}

.modal-text {
  text-align: justify;
  text-justify: inter-word;
  font-family: Eczar;
  line-height: 140%;
  font-size: 1.1em;
  display: inline-block;
  width: 46%;
  @media (max-width: 620px) {
    width: 100%;
  }
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  padding: 50px;
  padding-top: 40px;
  column-gap: 0px;
  row-gap: 40px;
  justify-items: center;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  border-color: #58180d;
  border-style: solid;
  border-width: 2px;
  width: 200px;
  height: 300px;
  position: relative;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
}

.card-image {
  z-index: 99;
  position: center;
  height: 325px;
  max-width: 100%;
  width: 200px;
  max-height: 100%;
  object-fit: cover;
  object-position: 50% 0%;
  border-radius: 5px;
  background-color: white;
}

.container {
  position: absolute;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.25));
  /* border-radius: 0 0 5px 5px; */
  font-family: 'Eczar';
  font-size: 2.5em;
  font-weight: 900;
  color: #5e0000;
  border-color: #efcd98;
  font-variant: small-caps;
  text-shadow: 2px 0 #efcd98, -2px 0 #efcd98, 0 2px #efcd98, 0 -2px #efcd98,
    1px 1px #efcd98, -1px -1px #efcd98, 1px -1px #efcd98, -1px 1px #efcd98;
  line-height: 90%;
}

.card-text {
  bottom: 30px !important;
}
</style>
