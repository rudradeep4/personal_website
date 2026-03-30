import { Box, Text } from "@chakra-ui/react";
import "@fontsource/fragment-mono";

export default function Education({ textColor }) {
  return (
    <Box color={textColor} pt={2}>
      <Text fontFamily={"Fragment Mono"} fontSize={"sm"}>
        PhD (2022 - 2025)
      </Text>
      <Text fontFamily={"Fragment Mono"} fontSize={"xs"} color={"grey"}>
        Institut FEMTO-ST <br />
        Besançon, France
      </Text>

      <Text fontFamily={"Fragment Mono"} fontSize={"sm"} pt={4}>
        M.Sc. in Cognitive Science (2018 - 2020)
      </Text>
      <Text fontFamily={"Fragment Mono"} fontSize={"xs"} color={"grey"}>
        National Research University Higher School of Economics <br />
        Moscow, Russia
      </Text>

      <Text fontFamily={"Fragment Mono"} fontSize={"sm"} pt={4}>
        B.Sc. in Computer Science (2015 - 2018)
      </Text>
      <Text fontFamily={"Fragment Mono"} fontSize={"xs"} color={"grey"}>
        Ashoka University <br />
        New Delhi, India
      </Text>
    </Box>
  );
}
