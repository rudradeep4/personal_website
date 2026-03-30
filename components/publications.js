import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import "@fontsource/fragment-mono";

export default function Publications({ textColor, accent }) {
  return (
    <Box color={textColor}>
      <LinkBox fontFamily={"Fragment Mono"} pt={2}>
        <LinkOverlay
          href="Thesis_RudradeepGuha_Final.pdf"
          target="_blank"
          _hover={{ color: accent }}
        >
          <Text fontSize={"sm"}>
            The social transfer function: a system-identification approach to studying social contingency
          </Text>
        </LinkOverlay>
        <Text fontSize={"xs"} pt={1} color={"grey"}>
          <u>Guha, R.</u>
        </Text>
        <Text fontSize={"xs"} color={"grey"}>PhD thesis, 2025</Text>
      </LinkBox>
            
      <LinkBox fontFamily={"Fragment Mono"} pt={4}>
        <LinkOverlay
          href="https://neuro-team-femto.github.io/articles/2024/benghanem_cortex_2024.pdf"
          target="_blank"
          _hover={{ color: accent }}
        >
          <Text fontSize={"sm"}>
            Cortical responses to looming sources are explained away by the
            auditory periphery.
          </Text>
        </LinkOverlay>
        <Text fontSize={"xs"} pt={1} color={"grey"}>
          Benghanem, S., <u>Guha, R.</u>, Pruvost-Robieux, E., Levi-Strauss, J.,
          Joucla, C., Cariou, A., ... & Aucouturier, J. J.
        </Text>
        <Text fontSize={"xs"} color={"grey"}>Cortex, 2024</Text>
      </LinkBox>
    </Box>
  );
}
