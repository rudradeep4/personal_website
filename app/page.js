"use client";
import {
  Grid,
  Box,
  Tabs
} from "@chakra-ui/react";
import "@fontsource/fragment-mono";
import "@fontsource-variable/lexend";
import Main from "@/components/main";
import Publications from "@/components/publications";
import Education from "@/components/education";

export default function Home() {
  const bg = "#eee8d5";
  const fg = "#1A1A1A";
  const accent = "#B7410E"

  return (
    <Grid
      bg={bg}
      h="100vh"
      overflow={"scroll"}
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
    >
      <Box w="700px" pt={8}>
        <Main textColor={fg} accent={accent} />

        <Tabs.Root defaultValue="publications" variant="outline" pt={10}>
          <Tabs.List>
            <Tabs.Trigger value="publications" fontFamily={"Fragment Mono"} color={fg}>
              Publications
            </Tabs.Trigger>
            <Tabs.Trigger value="education" fontFamily={"Fragment Mono"} color={fg}>
              Education
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="publications">
            <Publications textColor={fg} accent={accent} />
          </Tabs.Content>
          <Tabs.Content value="education">
            <Education textColor={fg} />
          </Tabs.Content>
        </Tabs.Root>
      </Box>
    </Grid>
  );
}
