<template>
  <div class="home">
    <div class="state-selector-container">
      <p class="text-secondary">Covid-19 Tracker</p>
      <div class="dropdown-menu">
        <div class="selected-state" @click="toggleDropDown()">
          <h1>Lagos</h1>
          <span class="material-icons">arrow_drop_down</span>
        </div>

        <div class="list" v-show="dropdown">
          <ul>
            <li>Anambra</li>
          </ul>
        </div>
      </div>
      <p class="text-secondary">Last Updated 1 hour ago</p>

      <div class="statsbox">
        <div class="grid-layout">
          <statisticBox boxName="CONFIRMED" />
          <statisticBox boxName="ACTIVE" />
          <statisticBox boxName="RECOVERED" />
          <statisticBox boxName="DECEASED" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import statisticBox from "@/components/statBox";
export default {
  name: "Home",
  components: {
    statisticBox
  },
  data() {
    return {
      dropdown: false
    };
  },
  methods: {
    toggleDropDown() {
      this.dropdown = !this.dropdown;
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  background: var(--main-bg-color);
  width: 100%;
}
.state-selector-container {
  background-color: #212b45;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
  height: 40vh;
  width: 100%;
  padding: 1.5em;
  color: var(--primary-text-color);

  .dropdown-menu {
    padding: 1.5em 0;

    .selected-state {
      display: inline-flex;
      align-items: center;
      cursor: pointer;

      span {
        color: pink;
      }
    }
  }
}

.statsbox {
  width: 100%;
  height: 400px;
  margin-top: 10vh;

  .grid-layout {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
  }
}

.list {
  width: 250px;
  height: 60vh;
  background: var(--white);
  position: absolute;
  top: 120px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-radius: 0.5em;

  color: black;
}
</style>
