"use client";
import { Box, Text, Badge, IconButton, HStack, Link } from "@chakra-ui/react";
import { LuMail, LuGithub } from "react-icons/lu";
import '@fontsource-variable/stack-sans-headline';


export default function Main({ textColor, accent }) {
  const ff = "Stack Sans Headline Variable";

  return (
    <Box color={textColor}>
      <Text
        pt={8}
        fontFamily={ff}
        fontSize={["lg", "2xl"]}
        fontWeight={"bold"}
        color={accent}
      >
        Rudradeep Guha
      </Text>

      <Box pt={2}>
        <Badge
          variant={"outline"}
          color={textColor}
          fontFamily={ff}
          mr={1}
        >
          social cognition
        </Badge>
        <Badge
          variant={"outline"}
          color={textColor}
          fontFamily={ff}
          mr={1}
        >
          temporal response functions
        </Badge>
        <Badge
          variant={"outline"}
          color={textColor}
          fontFamily={ff}
          mr={1}
        >
          interpersonal synchrony
        </Badge>
        <Badge
          variant={"outline"}
          color={textColor}
          fontFamily={ff}
          mr={1}
        >
          disorders of consciousness
        </Badge>
      </Box>

      <HStack pt={2} ml={-2.5}>
        <Link href="mailto:rudradeep4@gmail.com" isExternal>
          <IconButton
            variant="ghost"
            aria-label="Email"
            size={["sm", "md"]}
            _hover={{ bg: "None", color: accent }}
            _active={{ color: accent }}
            color={textColor}
          >
            <LuMail />
          </IconButton>
        </Link>
        <Link href="https://github.com/rudradeep4" isExternal target="_blank">
          <IconButton
            variant="ghost"
            aria-label="Github"
            size={["sm", "md"]}
            _hover={{ bg: "None", color: accent }}
            _active={{ colorMode: accent }}
            color={textColor}
          >
            <LuGithub />
          </IconButton>
        </Link>
      </HStack>

    </Box>
  );
}
