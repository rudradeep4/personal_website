import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import "@fontsource-variable/stack-sans-headline";

export default function Publications({ textColor, accent }) {
  const ff = "Stack Sans Headline Variable";

  return (
    <Box color={textColor}>
      <LinkBox fontFamily={ff} pt={2}>
        <LinkOverlay
          href="https://theses.hal.science/tel-05519173/file/these_A_GUHA_Rudradeep_2025.pdf"
          target="_blank"
          _hover={{ color: accent }}
        >
          <Text fontSize={"sm"}>
            The social transfer function: a system-identification approach to studying social contingency
          </Text>
        </LinkOverlay>
        <Text fontSize={"sm"} color={"grey"}>
          <u>Guha, R.</u>
        </Text>
        <Text fontSize={"sm"} color={"grey"}>PhD thesis, 2025</Text>
      </LinkBox>
            
      <LinkBox fontFamily={ff} pt={4}>
        <LinkOverlay
          href="https://doi.org/10.1016/j.cortex.2024.05.018"
          target="_blank"
          _hover={{ color: accent }}
        >
          <Text fontSize={"sm"}>
            Cortical responses to looming sources are explained away by the
            auditory periphery
          </Text>
        </LinkOverlay>
        <Text fontSize={"sm"} color={"grey"}>
          Benghanem, S., <u>Guha, R.</u>, Pruvost-Robieux, E., Levi-Strauss, J.,
          Joucla, C., Cariou, A., ... & Aucouturier, J. J.
        </Text>
        <Text fontSize={"sm"} color={"grey"}>Cortex, 2024</Text>
      </LinkBox>
    </Box>
  );
}
