<template>
  <div class="stats-box">
    <p class="stats-box--name">{{ boxName }}</p>
    <h2
      class="stats-box--count"
      :class="[
        boxName === 'RECOVERED'
          ? greenColor
          : boxName === 'CONFIRMED'
          ? redColor
          : boxName === 'ACTIVE'
          ? blueColor
          : boxName === 'DECEASED'
          ? darkColor
          : ''
      ]"
    >
      765
    </h2>
  </div>
</template>

<script>
export default {
  name: "statsBox",
  props: {
    boxName: {
      type: String
    }
  },
  data() {
    return {
      greenColor: "green",
      redColor: "red",
      blueColor: "blue",
      darkColor: "dark"
    };
  }
};
</script>

<style lang="scss" scoped>
.stats-box {
  width: 100%;
  height: 180px;
  background: var(--white);
  color: var(--primary-bg-color);
  border-radius: 0.2em;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  padding: 1em;

  &--name {
    color: gray;
    font-size: 14px;
    font-weight: bold;
  }
  &--count {
    margin: 8px 0;
    font-size: 48px;
    font-weight: bold;
  }
}
.green {
  color: #499b5a;
}
.red {
  color: #c7405d;
}
.blue {
  color: #2f78c5;
}
.dark {
  color: #333333;
}
</style>
