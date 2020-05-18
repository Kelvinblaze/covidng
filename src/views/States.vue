<template>
  <c-box>
    <c-box px="3rem" py="2rem" bg="#0d8e541a" h="25vh">
      <Navbar />

      <c-box>
        <c-text fontSize="6xl" fontWeight="bold" py="2rem">All States</c-text>
      </c-box>
    </c-box>

    <c-box mt="1rem" px="1rem">
      <div class="header-menu">
        <div class="menu">STATES</div>
        <div class="menu case confirmed">C</div>
        <div class="menu case active">A</div>
        <div class="menu case recovered">R</div>
        <div class="menu  case deaths">D</div>
      </div>

      <div class="states-menu" v-for="(state, index) in states" :key="index">
        <div class="body-menu">
          <div class="menu">{{ state.state.toUpperCase() }}</div>
          <div class="menu case">{{ state.confirmedCases }}</div>
          <div class="menu case">{{ state.activeCases }}</div>
          <div class="menu case">{{ state.discharged }}</div>
          <div class="menu  case">{{ state.death }}</div>
        </div>
      </div>
    </c-box>
  </c-box>
</template>

<script>
import { CBox, CText } from "@chakra-ui/vue";
import Navbar from "@/components/Navbar";
export default {
  name: "States",
  components: {
    CBox,
    CText,
    Navbar
  },
  data() {
    return {
      states: null
    };
  },
  mounted() {
    if (this.states === null) {
      this.fetchStates();
    }
  },
  methods: {
    async fetchStates() {
      try {
        const apiCall = await this.$http.get(
          "https://covid19ngr.herokuapp.com/api/states/"
        );
        const apiJsonResponse = await apiCall.json();

        console.log(apiJsonResponse.data);

        this.states = apiJsonResponse.data;
      } catch {
        console.log("An error occurred");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.header-menu {
  display: grid;
  grid-template-columns: 40% 15% 15% 15% 15%;
  grid-gap: 1px;

  .menu {
    padding: 1rem;
    background: #ecf4f0;
    font-weight: bolder;
  }
}

.states-menu {
  margin: 0.5rem 0;
}

.body-menu {
  display: grid;
  grid-template-columns: 40% 15% 15% 15% 15%;
  grid-gap: 1px;

  .menu {
    padding: 1rem;
    background: #fdfdfd;
    font-weight: bold;
    font-size: 1.5rem;
    color: #333;
  }
}

.case {
  text-align: center;
}
.confirmed {
  color: #ff8c00;
}
.active {
  color: #5856d6;
}
.recovered {
  color: #50e3c2;
}
.deaths {
  color: #ff2d55;
}
</style>
