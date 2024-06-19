import { createSystem } from "frog/ui";

export const { Box, Columns, Column, Divider, Image, Heading, Text, VStack, Spacer, vars } = createSystem({
  colors: {
    bg: "rgb(11,6,34)",
    white: "white",
    black: "rgb(0,2,18)",
    purple: 'rgb(117,89,236)',
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