import { Button, Frog } from 'frog'
import { handle } from 'frog/vercel'
import { neynar } from 'frog/middlewares'
import { Box, Image, Column, Divider, Heading, Text, VStack, Spacer, vars } from "../lib/ui.js";
import dotenv from 'dotenv';

// Uncomment this packages to tested on local server
import { devtools } from 'frog/dev';
import { serveStatic } from 'frog/serve-static';


// Load environment variables from .env file
dotenv.config();

// Browser Location
const CAST_INTENS = 
  "https://warpcast.com/~/compose?text=&embeds[]=https://talent-passport.vercel.app/api/frame";


// Public URL
const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:5173';


// Background Image
const BG_IMAGE = `${NEXT_PUBLIC_URL}/bg.jpg`


// Base URL
const baseUrlNeynarV2 = process.env.BASE_URL_NEYNAR_V2;
const baseUrlTalentProtocol = process.env.BASE_URL_TALENT_PROTOCOL;


// Initialize Frog App
export const app = new Frog({
  assetsPath: '/',
  basePath: '/api/frame',
  ui: { vars },
  imageAspectRatio: '1:1',
  headers: {
    'cache-control': 'no-store, no-cache, must-revalidate, proxy-revalidate max-age=0, s-maxage=0',
  },
  imageOptions: {
    height: 1024,
    width: 1024,
  },
  browserLocation: CAST_INTENS,
}).use(
  neynar({
    apiKey: process.env.NEYNAR_API_KEY || '',
    features: ['interactor', 'cast'],
  }),
)


// Define a function to determine the skill level based on the score
function getSkillLevel(score: number) {
  if (score < 20) {
    return "Newbie";
  } else if (score < 40) {
    return "Beginner";
  } else if (score < 60) {
    return "Competent";
  } else if (score < 80) {
    return "Proficient";
  } else {
    return "Expert";
  }
}


// Initial frame
app.frame('/', (c) => {
  return c.res({
    title: 'Talent Passport',
    image: '/initial-image',
    intents: [
      <Button action='/my-passport'>My Passport</Button>,
      <Button.Link href='https://passport.talentprotocol.com/signin'>Register</Button.Link>,
    ]
  })
})


app.image('/initial-image', (c) => {
  return c.res({
    headers: {
      'cache-control': 'no-store, no-cache, must-revalidate, proxy-revalidate max-age=0, s-maxage=0',
    },
    image: (
      <Box
          alignVertical="center"
          backgroundImage="url(https://talentprotocol.com/images/gradient-home-page-background.png)"
          backgroundColor="bg"
          justifyContent="center"
          paddingTop="60"
          paddingLeft="80"
          paddingRight="80"
          backgroundSize="100% 100%"
      >
          
        <Box
          backgroundColor="linear"
          borderTopLeftRadius="80"
          borderTopRightRadius="80"
          paddingTop="20"
          paddingLeft="20"
          paddingRight="20"
          height="100%"
          width="100%"
        >

          <Box 
            flexDirection="row" 
            alignHorizontal="center" 
            alignVertical="center"
            paddingTop="10"
          > 

            <Box
              backgroundColor="purple"
              borderRadius="8"
              padding="2"
              height="22"
              width="22"
            >

              <Image
                  width="18"
                  height="18"
                  objectFit="cover"
                  src="https://talentprotocol.com/images/farcaster_logo.svg"
                />

            </Box>

            <Spacer size="6" />

              <Text color="linearBlur" align="center" size="14">
                {'0x94t3z.eth'}
              </Text>

          </Box>

          <Spacer size="32" />

          <Box 
            alignHorizontal="center" 
            alignVertical="center"
          > 

            <img
                height="300"
                width="300"
                src="https://avatars.githubusercontent.com/u/52822242?v=4"
                style={{
                  borderRadius: "0%",
                  border: "2px solid #FFFFFF",
                }}
              />

          </Box>

          <Spacer size="24" />

          <Box 
            // backgroundColor='linear'
            padding="10"
            height="96"
            width="100%"
          >

            <Box grow flexDirection="row" gap="2">
            
              <Box flex="1">
                <Column 
                  flexDirection="column" 
                  paddingLeft="10" 
                  paddingRight="10" 
                  paddingTop="10" 
                  paddingBottom="10"
                >
                  <Text color="white" align="center" size="32">
                    87
                  </Text>
                  <Spacer size="10" />
                  <Text color="linearBlur" align="center" size="14">
                    CONNECTIONS
                  </Text>
                </Column>
              </Box>

            <Divider direction="vertical" color="linearBlur" />
            
              <Box flex="1">
                <Column 
                  flexDirection="column" 
                  paddingLeft="10" 
                  paddingRight="10" 
                  paddingTop="10" 
                  paddingBottom="10"
                >
                  <Text color="white" align="center" size="32">
                    95
                  </Text>
                  <Spacer size="10" />
                  <Text color="linearBlur" align="center" size="14">
                    CREDENTIALS
                  </Text>
                </Column>
              </Box>

            <Divider direction="vertical" color="linearBlur" />

              <Box flex="1">
                <Column 
                  flexDirection="column" 
                  paddingLeft="10" 
                  paddingRight="10" 
                  paddingTop="10" 
                  paddingBottom="10"
                >
                  <Text color="white" align="center" size="32">
                    92
                  </Text>
                  <Spacer size="10" />
                  <Text color="linearBlur" align="center" size="14">
                    CREDIBILITY
                  </Text>
                </Column>
              </Box>

            </Box>

          </Box>

          <Spacer size="24" />

          <Box 
            grow 
            flexDirection="row" 
            paddingLeft="20"
            paddingRight="20"
            gap="8"
          >

            <Box 
              backgroundColor="linear"
              borderRadius="32"
              flex="1"
              padding="10"
              height="128"
              width="100%" 
            >

              <Box 
                  flexDirection="column" 
                  padding="10"
                  paddingBottom="10"
                  alignHorizontal="center"
                  alignVertical="center"
                >
                  <Image
                    width="42"
                    height="42"
                    objectFit="cover"
                    src="https://talentprotocol.com/images/talent-logo.svg"
                  />

                  <Spacer size="6" />
                  
                  <Text color="linearBlur" align="center" size="14">
                    Passport ID
                  </Text>

                  <Spacer size="4" />

                  <Text color="white" align="center" size="14">
                    401992
                  </Text>

              </Box>

            </Box>

            <Spacer size="8" />

            <Box 
              backgroundColor="linear"
              borderRadius="32"
              flex="1"
              padding="10"
              height="128"
              width="100%" 
            >

              <Box 
                  flexDirection="column" 
                  padding="10"
                  paddingBottom="10"
                  alignHorizontal="center"
                  alignVertical="center"
                >
                  <Image
                    width="48"
                    height="48"
                    objectFit="cover"
                    src="https://talentprotocol.com/images/farcaster_logo.svg"
                  />

                  <Spacer size="4" />
                  
                  <Text color="linearBlur" align="center" size="14">
                    Farcaster ID
                  </Text>

                  <Spacer size="4" />

                  <Text color="white" align="center" size="14">
                    397668
                  </Text>

              </Box>

            </Box>

          </Box>
        
        </Box>

      </Box>
    ),
  })
})


app.frame('/search', async (c) => {
  const { verifiedAddresses } = c.var.interactor || {}

  const ethAddresses = verifiedAddresses?.ethAddresses[0] || [];

  const eth_address = ethAddresses;
  return c.res({
    image: (
      <Box
          grow
          alignVertical="center"
          backgroundColor="black"
          padding="48"
          textAlign="center"
          height="100%"
      >
          <VStack gap="4">
              <Box flexDirection="row">
                <Image
                    height="24"
                    objectFit="cover"
                    src="/talent-protocol.png"
                  />
                <Spacer size="10" />
                <Text color="grey" decoration="underline" align="center" size="14">
                  Talent Protocol
                </Text>
              </Box>
              <Spacer size="16" />
              <Heading color="white" weight="900" align="center" size="32">
                Builder Score Checker
              </Heading>
              <Spacer size="22" />
              <Text align="center" color="grey" size="16">
                Do you want to check your Builder Score?
              </Text>
              <Spacer size="22" />
              <Box flexDirection="row" justifyContent="center">
                  <Text color="white" align="center" size="14">created by</Text>
                  <Spacer size="10" />
                  <Text color="grey" decoration="underline" align="center" size="14"> @0x94t3z</Text>
              </Box>
              <Spacer size="32" />
          </VStack>
      </Box>
    ),
    intents: [ 
      <Button action={`/result/${eth_address}`}>Yes, please!</Button>,
      <Button action='/'>No</Button>,
    ]
  })
})


app.frame('/result/:eth_address', async (c) => {
  const { eth_address } = c.req.param();

  try {
    // Fetch API by Connect Wallet Address
    const response = await fetch(`${baseUrlTalentProtocol}/${eth_address}`, {
      method: 'GET',
      headers: {
          'X-API-KEY': process.env.TALENT_PROTOCOL_API_KEY || '',
      }
    });
    
    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    
    // Parse the JSON from the response
    const data = await response.json();

    const name = data.passport.passport_profile.display_name;
    const username = data.passport.passport_profile.name;
    const image = data.passport.passport_profile.image_url;
    const score = data.passport.score;

    // Get the skill level based on the score
    const skillLevel = getSkillLevel(score);

    return c.res({
      title: 'Builder Score Stats',
      image: (
        <Box
            grow
            alignVertical="center"
            backgroundImage={`url(${BG_IMAGE})`}
            backgroundColor="black"
            padding="48"
            textAlign="center"
            width="100%"
            height="100%"
        >
            <VStack gap="4">
                <Box flexDirection="row">
                  <Image
                      height="24"
                      borderRadius="12"
                      objectFit="cover"
                      src="/talent-protocol.png"
                    />
                  <Spacer size="10" />
                  <Text color="grey" decoration="underline" align="center" size="14">
                    Talent Protocol
                  </Text>
                </Box>
                <Spacer size="12" />
                <Box flexDirection="row" alignHorizontal="center" alignVertical="center">
                <Box 
                  borderStyle="solid" 
                  borderRadius="42"
                  borderWidth="4" 
                  borderColor="metalPink" 
                  height="64" 
                  width="64" 
                >
                  <Image
                    borderRadius="38"
                    height="56"
                    width="56"
                    objectFit="cover"
                    src={image}
                  />
                </Box>
                <Spacer size="12" />
                  <Box flexDirection="column" alignHorizontal="left">
                    <Text color="white" align="left" size="16">
                      {name}
                    </Text>
                    <Text color="grey" align="left" size="12">
                      @{username}
                    </Text>
                  </Box>
                </Box>
                <Text color="metalPink" align="center" size="64">{score}</Text>
                <Text color="white" align="center" size="18">Builder Score</Text>
                <Text color="grey" align="center" size="16">{skillLevel}</Text>
            </VStack>
        </Box>
      ),
      intents: [
        <Button action='/search'>Try it</Button>,
        <Button.Link href={`https://warpcast.com/~/compose?text=My%20Builder%20Score%20%F0%9F%8E%AF%0AFrame%20by%20@0x94t3z.eth&embeds[]=https://builder-score-checker.vercel.app/api/frame/result/${eth_address}`}>Share</Button.Link>,
      ]
    });
  } catch (error) {
    return c.res({
      image: (
        <Box
            grow
            alignVertical="center"
            backgroundColor="black"
            padding="48"
            textAlign="center"
            height="100%"
        >
            <VStack gap="4">
                <Box flexDirection="row">
                  <Image
                      height="24"
                      objectFit="cover"
                      src="/talent-protocol.png"
                    />
                  <Spacer size="10" />
                  <Text color="grey" decoration="underline" align="center" size="14">
                    Talent Protocol
                  </Text>
                </Box>
                <Spacer size="16" />
                <Heading color="white" weight="900" align="center" size="32">
                  ⚠️ Failed ⚠️
                </Heading>
                <Spacer size="22" />
                <Text align="center" color="grey" size="16">
                   Uh oh, you need to sign up first!
                </Text>
                <Spacer size="22" />
                <Box flexDirection="row" justifyContent="center">
                    <Text color="white" align="center" size="14">created by</Text>
                    <Spacer size="10" />
                    <Text color="grey" decoration="underline" align="center" size="14"> @0x94t3z</Text>
                </Box>
            </VStack>
        </Box>
      ),
      intents: [
        <Button action='/search'>Try again</Button>,
        <Button.Link href='https://passport.talentprotocol.com/signin'>Register</Button.Link>,
      ]
    });
  }
})


// Uncomment this line code to tested on local server
devtools(app, { serveStatic });

export const GET = handle(app)
export const POST = handle(app)
