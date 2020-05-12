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
        <DataBox
          :icon="confirmedIcon"
          caseName="Confirmed Cases"
          :caseCount="cases.confirmedCases"
        />
        <DataBox
          :icon="deathIcon"
          caseName="Total Death"
          :caseCount="cases.death"
        />
        <DataBox
          :icon="recoveredIcon"
          caseName="Total Recovered"
          :caseCount="cases.discharged"
        />
        <DataBox
          :icon="newCasesIcon"
          caseName="Active Cases"
          :caseCount="cases.activeCases"
        />
      </c-box>
    </c-box>

    <c-box px="3rem" py="4rem">
      <c-text fontSize="4xl" fontWeight="800" letterSpacing="1.2px"
        >Preventions</c-text
      >
      <c-box d="flex" justifyContent="space-between" py="2rem">
        <c-stack>
          <c-image :src="washhandIcon"></c-image>
          <c-text fontWeight="600" color="vue.600" textAlign="center" mt="1rem"
            >Wash Hand</c-text
          >
        </c-stack>

        <c-stack>
          <c-image :src="usemasksIcon"></c-image>
          <c-text fontWeight="600" color="vue.600" textAlign="center" mt="1rem"
            >Use Masks</c-text
          >
        </c-stack>

        <c-stack>
          <c-image :src="cleanIcon"></c-image>
          <c-text fontWeight="600" color="vue.600" textAlign="center" mt="1rem"
            >Clean Disinfect</c-text
          >
        </c-stack>
      </c-box>
    </c-box>

    <c-box px="3rem" pb="3rem">
      <c-image :src="bottomBanner" width="100%" />
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
  data() {
    return {
      cases: []
    }
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
    },
    bottomBanner () {
      return require("../assets/bottombanner.svg");

    }
  },
  created () {
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
  },
}
</script>
