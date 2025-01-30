import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import "@fontsource/fragment-mono";

export default function Publications({ textColor, accent }) {
  return (
    <Box color={textColor}>
      <Text
        pt={8}
        fontSize={"2xl"}
        fontFamily={"Fragment Mono"}
        color={textColor}
      >
        Publications
      </Text>

      <LinkBox fontFamily={"Fragment Mono"} pt={8}>
        <LinkOverlay
          href="https://www.sciencedirect.com/science/article/pii/S0010945224001692"
          _hover={{ color: accent }}
        >
          <Text fontSize={"sm"}>
            Cortical responses to looming sources are explained away by the
            auditory periphery.
          </Text>
        </LinkOverlay>
        <Text fontSize={"sm"}>
          Benghanem, S., <b>Guha, R.</b>, Pruvost-Robieux, E., Levi-Strauss, J.,
          Joucla, C., Cariou, A., ... & Aucouturier, J. J.
        </Text>
        <Text fontSize={"sm"}>Cortex, 2024</Text>
      </LinkBox>
    </Box>
  );
}
