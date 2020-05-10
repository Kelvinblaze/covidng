<template>
  <div class="home">
    <div class="state-selector-container">
      <p class="text-secondary">Covid-19 Tracker for Nigeria</p>
      <div class="dropdown-menu">
        <div class="selected-state">
          <dropdown
            :config="config"
            @setSelectedOption="checkStateTotal($event)"
          >
          </dropdown>
        </div>
      </div>
      <p class="text-secondary">Latest Updated Statistics</p>

      <div class="statsbox">
        <div class="grid-layout">
          <statisticBox boxName="CONFIRMED" :boxCount="cases.confirmedCases" />
          <statisticBox boxName="ACTIVE" :boxCount="cases.activeCases" />
          <statisticBox boxName="RECOVERED" :boxCount="cases.discharged" />
          <statisticBox boxName="DECEASED" :boxCount="cases.death" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import statisticBox from "@/components/statBox";
import dropdown from "vue-dynamic-dropdown";
export default {
  name: "Home",
  components: {
    statisticBox,
    dropdown
  },
  data() {
    return {
      cases: [],
      config: {
        options: [
          {
            value: "Abia"
          },
          {
            value: "Adamawa"
          },
          {
            value: "Akwa Ibom"
          },
          {
            value: "Anambra"
          },
          {
            value: "Bauchi"
          },
          {
            value: "Bayelsa"
          },
          {
            value: "Benue"
          },
          {
            value: "Borno"
          },
          {
            value: "Cross River"
          },
          {
            value: "Delta"
          },
          {
            value: "Ebonyi"
          },
          {
            value: "Edo"
          },

          {
            value: "Ekiti"
          },
          {
            value: "FCT"
          },
          {
            value: "Gombe"
          },
          {
            value: "Imo"
          },
          {
            value: "Jigawa"
          },
          {
            value: "Kaduna"
          },
          {
            value: "Kano"
          },
          {
            value: "Katsina"
          },
          {
            value: "Kebbi"
          },
          {
            value: "Kogi"
          },
          {
            value: "Kwara"
          },
          {
            value: "Lagos"
          },
          {
            value: "Nasarawa"
          },
          {
            value: "Niger"
          },
          {
            value: "Ogun"
          },
          {
            value: "Ondo"
          },
          {
            value: "Osun"
          },
          {
            value: "Oyo"
          },
          {
            value: "Plateau"
          },
          {
            value: "Rivers"
          },
          {
            value: "Sokoto"
          },
          {
            value: "Taraba"
          },
          {
            value: "Yobe"
          },
          {
            value: "Zamfara"
          }
        ],
        prefix: "State",
        backgroundColor: "white",
        border: "blue"
      }
    };
  },
  created() {
    this.fetchTotal();
  },
  methods: {
    async fetchTotal() {
      try {
        const baseUrl = "https://covid19ngr.herokuapp.com/api/totals/";
        let apiCall = await this.$http.get(baseUrl);
        let apiJsonResponse = await apiCall.json();

        this.cases = apiJsonResponse.data;
      } catch (err) {
        console.log(err);
      }
    },
    async checkStateTotal(event) {
      try {
        let state = event.value;

        let stateName = state
          .split(" ")
          .join("")
          .toLowerCase();
        this.config.prefix = state;

        const baseUrl = `https://covid19ngr.herokuapp.com/api/states/${stateName}`;
        let apiCall = await this.$http.get(baseUrl);
        let apiJsonResponse = await apiCall.json();

        this.cases = apiJsonResponse.data;
      } catch (err) {
        console.log("An error occurred");
      }
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
