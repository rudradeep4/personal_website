import { createSystem, defineConfig } from "@chakra-ui/react";
import "@fontsource/fragment-mono";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        whitish: { value: "#F7F6F2" },
        blackish: { value: "#1A1A1A" },
        orangey: { value: "#FA7B62" },
      },
      fonts: {
        primary: { value: ["Liberation Mono"] },
      },
    },
  },
});

export default createSystem(config);
