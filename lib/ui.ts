import { createSystem } from "frog/ui";

export const { Box, Columns, Column, Divider, Image, Heading, Text, VStack, Spacer, vars } = createSystem({
  colors: {
    bg: "rgb(11,6,34)",
    white: "white",
    black: "rgb(0,2,18)",
    fcPurple: "rgb(71,42,145)",
    red: "rgb(253,39,74)",
    tosca: "rgb(167,210,210)",
    yellow: 'rgb(247,169,72)',
    purple: 'rgb(117,89,236)',
    blue: 'rgb(17,54,93)',
    grey: 'rgba(128, 128, 128, 0.75)',
    metalPink : 'rgb(195,141,147)',
    linear: 'rgba(255, 255, 255, 0.1)',
    linearBlur: 'rgba(255, 255, 255, 0.5)'
  },
  fonts: {
    default: [
      {
        name: "Inter",
        source: "google",
        weight: 600,
      },
    ],
  },
});