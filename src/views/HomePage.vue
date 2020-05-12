<template>
  <c-box w="100%" h="100vh">
    <c-box
      px="3rem"
      py="2rem"
      bg="#0d8e541a"
      h="65vh"
      roundedBottomRight="50px"
      roundedBottomLeft="50px"
    >
      <c-box
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        py="1.5rem"
      >
        <c-icon name="align-left" color="vue.500" size="2rem"></c-icon>
        <c-icon name="search" color="vue.500" size="2rem"></c-icon>
      </c-box>

      <c-box
        mt="3rem"
        d="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(145px, 1fr))"
        gridGap="8px"
      >
        <DataBox :icon="confirmedIcon" caseName="Confirmed Cases" />
        <DataBox :icon="deathIcon" caseName="Total Death" />
        <DataBox :icon="recoveredIcon" caseName="Total Recovered" />
        <DataBox :icon="newCasesIcon" caseName="New Cases" />
      </c-box>
    </c-box>
  </c-box>
</template>

<script lang="js">
import { CBox, CIcon} from '@chakra-ui/vue'
import DataBox from "@/components/DataBox";

export default {
  name: 'page',
  components: {
    CBox,
    CIcon,
    DataBox
  },
  computed: {
     confirmedIcon() {
      return require("../assets/confirmedIcon.svg");
    },
    deathIcon () {
      return require("../assets/deathIcon.svg");
    },
    recoveredIcon () {
      return require("../assets/recoveredIcon.svg");
    },
    newCasesIcon () {
      return require("../assets/newcasesIcon.svg");
    }
  },
}
</script>
