<template>
  <c-box>
    <c-box
      d="flex"
      justifyContent="space-between"
      alignItems="center"
      py="1.5rem"
    >
      <c-button ref="btnRef" @click="isOpen = true">
        <c-icon name="align-left" color="vue.500" size="2rem"></c-icon>
      </c-button>

      <c-icon name="search" color="vue.500" size="2rem"></c-icon>
    </c-box>

    <c-drawer
      :isOpen="isOpen"
      placement="left"
      :on-close="close"
      :initialFocusRef="() => $refs.inputInsideModal"
    >
      <c-drawer-overlay />
      <c-drawer-content>
        <c-drawer-close-button />
        <c-drawer-header borderBottomWidth="1px">Menu</c-drawer-header>

        <c-drawer-body>
          <!-- Body Elements Goes Here -->
          <c-list styleType="none" my="2rem" spacing="5">
            <c-list-item>Home</c-list-item>
            <c-list-item>All States</c-list-item>
            <c-list-item>About</c-list-item>
          </c-list>
        </c-drawer-body>

        <c-drawer-footer mb="10rem">
          <c-text>Created with ❤️ by Ifeanyi Kelvin Ossai</c-text>
        </c-drawer-footer>
      </c-drawer-content>
    </c-drawer>
  </c-box>
</template>

<script>
import {
  CBox,
  CIcon,
  CText,
  CButton,
  CDrawer,
  CDrawerBody,
  CDrawerFooter,
  CDrawerHeader,
  CDrawerOverlay,
  CDrawerContent,
  CDrawerCloseButton,
  CList,
  CListItem
} from "@chakra-ui/vue";

export default {
  name: "Navbar",
  components: {
    CBox,
    CIcon,
    CText,
    CButton,
    CDrawer,
    CDrawerBody,
    CDrawerFooter,
    CDrawerHeader,
    CDrawerOverlay,
    CDrawerContent,
    CDrawerCloseButton,
    CList,
    CListItem
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    close() {
      this.isOpen = false;
    },
    openSomething() {
      alert("hi");
    }
  }
};
</script>
