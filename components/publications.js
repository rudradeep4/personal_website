import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import "@fontsource/fragment-mono";

export default function Publications({ textColor, accent }) {
  return (
    <Box color={textColor}>
      <Text
        pt={8}
        fontSize={["md", "xl"]}
        fontFamily={"Fragment Mono"}
        color={textColor}
      >
        Publications
      </Text>

      <LinkBox fontFamily={"Fragment Mono"} pt={8}>
        <LinkOverlay
          href="../../public/Thesis_RudradeepGuha_Final.pdf"
          target="_blank"
          _hover={{ color: accent }}
        >
          <Text fontSize={"sm"}>
            The social transfer function: a system-identification approach to studying social contingency
          </Text>
        </LinkOverlay>
        <Text fontSize={"xs"} pt={1}>
          <b>Guha, R.</b>
        </Text>
        <Text fontSize={"xs"}>PhD thesis, 2025</Text>
      </LinkBox>
            
      <LinkBox fontFamily={"Fragment Mono"} pt={8}>
        <LinkOverlay
          href="https://neuro-team-femto.github.io/articles/2024/benghanem_cortex_2024.pdf"
          _hover={{ color: accent }}
        >
          <Text fontSize={"sm"}>
            Cortical responses to looming sources are explained away by the
            auditory periphery.
          </Text>
        </LinkOverlay>
        <Text fontSize={"xs"} pt={1}>
          Benghanem, S., <b>Guha, R.</b>, Pruvost-Robieux, E., Levi-Strauss, J.,
          Joucla, C., Cariou, A., ... & Aucouturier, J. J.
        </Text>
        <Text fontSize={"xs"}>Cortex, 2024</Text>
      </LinkBox>
    </Box>
  );
}
