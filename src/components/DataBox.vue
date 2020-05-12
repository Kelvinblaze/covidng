<template>
  <c-box w="100%" h="150px" bg="white" borderRadius="8px" py="1rem" px="1rem">
    <c-box d="flex" alignItems="center">
      <c-image
        rounded="full"
        h="10px"
        w="10px"
        :src="icon"
        alt="Confirmed Cases"
      />
      <c-text fontSize="md" ml="1rem">{{ caseName }}</c-text>
    </c-box>
    <c-box></c-box>
  </c-box>
</template>

<script>
import { CBox, CImage, CText } from "@chakra-ui/vue";
export default {
  name: "dataBox",
  props: ["icon", "caseName"],
  components: {
    CBox,
    CImage,
    CText
  }
};
</script>
