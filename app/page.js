"use client";
import {
  Box,
  Grid,
  Button,
  Flex,
  Spacer,
  VStack,
  Image,
  Center,
  AbsoluteCenter,
} from "@chakra-ui/react";
import { useState } from "react";
import { CgCheckR, CgCloseR } from "react-icons/cg";
import Content from "@/components/content";
import "@fontsource/fragment-mono";

export default function Home() {
  const [content, showContent] = useState("");

  const [colorMode, setColorMode] = useState(true)
  const bg = colorMode == true ? "#f5f2e1" : "#1A1A1A"
  const fg = colorMode == true ? "#1A1A1A" : "#f5f2e1"
  const accent =  "#FA7B62"

  return (
    <Grid
      bg={bg}
      h="100vh"
      overflow={"scroll"}
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
    >
      <Box w={["100%", "700px"]} px={[4, 0]} my={[4, 16]}>
        <Flex>
          <Image
            src="/me2_test.svg"
            alt="main picture"
            width={[200, 300]}
            height={[200, 300]}
          />

          <Spacer />

          <VStack align={"end"}>
            <Button
              variant="ghost"
              aria-label="Dark Mode Switch"
              size={["sm", "lg"]}
              fontFamily={"Fragment Mono"}
              onClick={() => setColorMode(!colorMode)}
              _hover={{ bg: "None", color: accent }}
              _active={{ color: accent }}
              color={fg}
            >
              dark-mode {colorMode === true ? <CgCloseR /> : <CgCheckR />}
            </Button>

            <Spacer />

            <Button
              variant="ghost"
              aria-label="home"
              size={["sm", "lg"]}
              fontFamily={"Fragment Mono"}
              onClick={() => showContent("")}
              _hover={{ bg: "None", color: accent }}
              _active={{ color: accent }}
              color={content === "" ? accent : fg}
            >
              home
            </Button>

            <Button
              variant="ghost"
              aria-label="education"
              size={["sm", "lg"]}
              fontFamily={"Fragment Mono"}
              onClick={() => showContent("education")}
              _hover={{ bg: "None", color: accent }}
              _active={{ color: accent }}
              color={content === "education" ? accent : fg}
            >
              education
            </Button>

            <Button
              variant="ghost"
              aria-label="publications"
              size={["sm", "lg"]}
              fontFamily={"Fragment Mono"}
              onClick={() => showContent("publications")}
              _hover={{ bg: "None", color: accent }}
              _active={{ color: accent }}
              color={content === "publications" ? accent : fg}
            >
              publications
            </Button>
          </VStack>
        </Flex>

        <Box>
          <Content content={content} colorMode={colorMode} accent={accent} />
        </Box>
      </Box>
    </Grid>
  );
}
