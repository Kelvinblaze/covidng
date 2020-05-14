<template>
  <c-box px="3rem" py="2rem" bg="#0d8e541a">
    <Navbar />
  </c-box>
</template>

<script>
import { CBox } from "@chakra-ui/vue";
import Navbar from "@/components/Navbar";
export default {
  name: "about",
  components: {
    CBox,
    Navbar
  }
};
</script>
