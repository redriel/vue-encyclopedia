<script>
import Modal from '@/components/Modal.vue'
export default {
  name: 'Card',
  props: {
    name: String,
    description: String,
    category: String
  },
  components: {
    Modal
  },
  data() {
    return { counter: 0 }
  },
  methods: {
    greet() {
      // `this` inside methods points to the current active instance
      alert(`Hello ${this.name}!`)
      // `event` is the native DOM event
    }
  }
}
</script>

<template>
  <!-- <div class="grid-container"> -->
  <div class="card">
    <img
      class="card-image"
      src="https://2e.aonprd.com/Images/Classes/Iconic_Valeros.png"
      @click="$refs.modalName.openModal()"
    />
    <div class="container">{{ name }}</div>
  </div>
  <!-- </div> -->

  <modal ref="modalName">
    <template v-slot:header>
      {{ name }}
    </template>

    <template v-slot:body>
      <div class="modal-container">
        <img
          class="modal-image"
          src="https://2e.aonprd.com/Images/Classes/Iconic_Valeros.png"
        />
        <div class="modal-text">
          <p>
            {{ description }}
          </p>
        </div>
      </div>
    </template>
  </modal>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  /* 5px rounded corners */
  width: 200px;
  position: relative;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
}

.card-image {
  position: relative;
  width: 200px;
  height: 280px;
  object-fit: cover;
  object-position: 50% 0%;
}

/* Add some padding inside the card container */
.container {
  position: absolute;
  z-index: 1;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.25));
  border-radius: 0 0 5px 5px;
  font-family: 'Eczar';
  font-size: 2.5em;
  font-weight: 900;
  color: #4e0707;
  border-color: #efcd98;
  font-variant: small-caps;
  text-shadow: 2px 0 #efcd98, -2px 0 #efcd98, 0 2px #efcd98, 0 -2px #efcd98,
    1px 1px #efcd98, -1px -1px #efcd98, 1px -1px #efcd98, -1px 1px #efcd98;
}

/* Add rounded corners to the top left and the top right corner of the image */
img {
  border-radius: 5px 5px 0 0;
}
</style>
