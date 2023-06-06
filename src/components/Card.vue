<script>
import Modal from '@/components/Modal.vue'
export default {
  name: 'Card',
  props: {
    name: String
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
  <div class="grid-container">
    <div class="card">
      <img
        src="https://www.w3schools.com/howto/img_avatar2.png"
        alt="Avatar"
        style="width: 100%"
      />
      <div class="container">
        <h4>
          <b>{{ name }}</b>
        </h4>
      </div>
    </div>
    <div class="card">
      <img
        src="https://www.w3schools.com/howto/img_avatar2.png"
        alt="Avatar"
        style="width: 100%"
      />
      <div class="container">
        <h4>
          <b>{{ name }}</b>
        </h4>
      </div>
    </div>
    <div class="card">
      <img
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="Avatar"
        style="width: 100%"
      />
      <div class="container">
        <h4>
          <b>{{ name }}</b>
        </h4>
      </div>
    </div>
    <div class="card">
      <img
        src="https://www.w3schools.com/howto/img_avatar2.png"
        alt="Avatar"
        style="width: 100%"
      />
      <div class="container">
        <h4>
          <b>{{ name }}</b>
        </h4>
      </div>
    </div>
    <div class="card">
      <img
        src="https://www.w3schools.com/howto/img_avatar2.png"
        alt="Avatar"
        style="width: 100%"
      />
      <div class="container">
        <h4>
          <b>{{ name }}</b>
        </h4>
      </div>
    </div>
    <div class="card">
      <img
        class="card-image"
        src="https://www.w3schools.com/howto/img_avatar2.png"
        alt="Avatar"
        style="width: 100%"
      />
      <div class="container">
        <h4>
          <b>{{ name }}</b>
        </h4>
      </div>
    </div>
    <div class="card">
      <img
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="Avatar"
        style="width: 100%"
      />
      <div class="container">
        <h4>
          <b>{{ name }}</b>
        </h4>
      </div>
    </div>
    <div class="card">
      <img
        class="card-image"
        src="https://i.pinimg.com/originals/d2/76/ff/d276ffe76dc9f561d82413446c93d9ce.png"
        alt="Avatar"
        style="width: 100%"
      />
      <div class="container">
        <h4>
          <b>{{ name }}</b>
        </h4>
      </div>
    </div>
    <div class="card" @click="counter++">
      <img
        src="..\assets\Iconic_Valeros.png"
        alt="Avatar"
        style="width: 100%"
      />
      <div class="container">
        <h4>
          <b>{{ name }} {{ counter }}</b>
        </h4>
      </div>
    </div>
    <div class="card">
      <img
        class="card-image"
        src="https://2e.aonprd.com/Images/Classes/Iconic_Valeros.png"
        @click="$refs.modalName.openModal()"
      />
      <div class="container">Valeros</div>
    </div>
  </div>

  <modal ref="modalName">
    <template v-slot:header>
      <h1>Modal title</h1>
    </template>

    <template v-slot:body>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nunc sed velit
        dignissim sodales ut eu sem integer vitae. Id aliquet lectus proin nibh
        nisl condimentum.
      </p>
      <img src="https://2e.aonprd.com/Images/Classes/Iconic_Valeros.png" />
    </template>
  </modal>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
