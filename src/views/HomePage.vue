<template>
  <c-box w="100%">
    <c-box
      px="3rem"
      py="2rem"
      bg="#0d8e541a"
      h="60vh"
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

    <c-box px="3rem" py="4rem">
      <c-text fontSize="4xl" fontWeight="800" letterSpacing="1.2px"
        >Preventions</c-text
      >
      <c-box d="flex" justifyContent="space-between" py="2rem">
        <c-stack>
          <c-image :src="washhandIcon"></c-image>
          <c-text fontWeight="600" color="vue.500">Wash Hand</c-text>
        </c-stack>

        <c-stack>
          <c-image :src="usemasksIcon"></c-image>
          <c-text fontWeight="600" color="vue.500" textAlign="center"
            >Use Masks</c-text
          >
        </c-stack>

        <c-stack>
          <c-image :src="cleanIcon"></c-image>
          <c-text fontWeight="600" color="vue.500" textAlign="center"
            >Clean Disinfect</c-text
          >
        </c-stack>
      </c-box>
    </c-box>
  </c-box>
</template>

<script lang="js">
import { CBox, CIcon, CText, CStack, CImage} from '@chakra-ui/vue'
import DataBox from "@/components/DataBox";

export default {
  name: 'page',
  components: {
    CBox,
    CIcon,
    CText,
    CStack,
    CImage,
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
    },
    washhandIcon () {
      return require("../assets/washhandIcon.svg");
    },
     usemasksIcon () {
      return require("../assets/usemasksIcon.svg");
    },
     cleanIcon () {
      return require("../assets/cleanIcon.svg");
    }
  },
}
</script>
