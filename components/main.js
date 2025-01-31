"use client";
import { Box, Text, Badge, IconButton, HStack, Link } from "@chakra-ui/react";
import { SiGooglescholar } from "react-icons/si";
import { TbBrandGmail, TbBrandGithub } from "react-icons/tb";
import { LiaOrcid } from "react-icons/lia";
import "@fontsource/fragment-mono";

export default function Main({ textColor, accent }) {
  return (
    <Box color={textColor}>
      <Text
        pt={8}
        fontFamily={"Fragment Mono"}
        fontSize={["md", "xl"]}
      >
        Rudradeep Guha
      </Text>
      <Text
        pt={8}
        fontFamily={"Fragment Mono"}
        fontSize={["sm", "md"]}
        color={textColor}
      >
        PhD Student <br />
        Institut FEMTO-ST
      </Text>

      <Box pt={4}>
        <Badge
          variant={"outline"}
          color={textColor}
          fontFamily={"Fragment Mono"}
          mr={2}
        >
          social cognition
        </Badge>
        <Badge
          variant={"outline"}
          color={textColor}
          fontFamily={"Fragment Mono"}
          mr={2}
        >
          temporal response functions
        </Badge>
        <Badge
          variant={"outline"}
          color={textColor}
          fontFamily={"Fragment Mono"}
          mr={2}
        >
          interpersonal synchrony
        </Badge>
        <Badge
          variant={"outline"}
          color={textColor}
          fontFamily={"Fragment Mono"}
          mr={2}
        >
          disorders of consciousness
        </Badge>
      </Box>

      <HStack pt={4}>
        <Link href="mailto:rudradeep4@gmail.com" isExternal>
          <IconButton
            variant="ghost"
            aria-label="Email"
            size={["md", "lg"]}
            _hover={{ bg: "None", color: accent }}
            _active={{ color: accent }}
            color={textColor}
          >
            <TbBrandGmail />
          </IconButton>
        </Link>
        <Link href="https://github.com/rudradeep4" isExternal>
          <IconButton
            variant="ghost"
            aria-label="Github"
            size={["md", "lg"]}
            _hover={{ bg: "None", color: accent }}
            _active={{ colorMode: accent }}
            color={textColor}
          >
            <TbBrandGithub />
          </IconButton>
        </Link>
        <Link href="https://orcid.org/0000-0002-0227-6401" isExternal>
          <IconButton
            variant="ghost"
            aria-label="Orcid"
            size={["md", "lg"]}
            _hover={{ bg: "None", color: accent }}
            _active={{ colorMode: accent }}
            color={textColor}
          >
            <LiaOrcid />
          </IconButton>
        </Link>
        <Link
          href="https://scholar.google.com/citations?user=Zj_w2T8AAAAJ&hl=en&oi=ao"
          isExternal
        >
          <IconButton
            variant="ghost"
            aria-label="Google Scholar"
            size={["md", "lg"]}
            _hover={{ bg: "None", color: accent }}
            _active={{ colorMode: accent }}
            color={textColor}
          >
            <SiGooglescholar />
          </IconButton>
        </Link>
      </HStack>
    </Box>
  );
}
