import { Box, Text, Icon } from "@chakra-ui/react";
import {
  TimelineItem,
  TimelineRoot,
  TimelineConnector,
  TimelineContent,
  TimelineTitle,
  TimelineDescription,
} from "@/components/ui/timeline";
import "@fontsource/fragment-mono";
import { MdSquare, MdCircle, MdOutlineCircle } from "react-icons/md";

export default function Education({ textColor, accent }) {
  return (
    <Box color={textColor}>
      <Text
        pt={8}
        fontSize={["md", "xl"]}
        fontFamily={"Fragment Mono"}
        color={textColor}
      >
        Education
      </Text>

      <TimelineRoot pt={8}>
        <TimelineItem>
          <TimelineContent>
            <TimelineTitle fontFamily={"Fragment Mono"}>
              PhD (2022 - )
            </TimelineTitle>
            <TimelineDescription fontFamily={"Fragment Mono"} textColor={textColor}>
              Institut FEMTO-ST <br />
              Besançon, France
            </TimelineDescription>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineContent>
            <TimelineTitle fontFamily={"Fragment Mono"}>
              M.Sc. in Cognitive Science (2018 - 2020)
            </TimelineTitle>
            <TimelineDescription fontFamily={"Fragment Mono"} textColor={textColor}>
              National Research University Higher School of Economics <br />
              Moscow, Russia
            </TimelineDescription>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineContent>
            <TimelineTitle fontFamily={"Fragment Mono"}>
              B.Sc. in Computer Science (2015 - 2018)
            </TimelineTitle>
            <TimelineDescription fontFamily={"Fragment Mono"} textColor={textColor}>
              Ashoka University <br />
              New Delhi, India
            </TimelineDescription>
          </TimelineContent>
        </TimelineItem>
      </TimelineRoot>
    </Box>
  );
}
