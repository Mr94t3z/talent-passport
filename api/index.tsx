import { Button, Frog } from 'frog';
import { handle } from 'frog/vercel';
import { 
  Box, 
  Image, 
  Column, 
  Divider, 
  Text, 
  Spacer, 
  vars 
} from "../lib/ui.js";
import axios from 'axios';
import sharp from 'sharp';
import https from 'https';
import dotenv from 'dotenv';

// Uncomment this packages to tested on local server
// import { devtools } from 'frog/dev';
// import { serveStatic } from 'frog/serve-static';
import { farcasterDataFrogMiddleware } from "@airstack/frames";

// Load environment variables from .env file
dotenv.config();

const baseUrl = "https://warpcast.com/~/compose";
const text = "Check your Talent Passport 🪪\nFrame by @0x94t3z.eth";
const embedUrl = "https://www.talent-passport.xyz/api/frame";

const CAST_INTENS = `${baseUrl}?text=${encodeURIComponent(text)}&embeds[]=${encodeURIComponent(embedUrl)}`;

// Base URL
const baseUrlTalentProtocol = process.env.BASE_URL_TALENT_PROTOCOL;

interface UserDetails {
  profileName?: string | null;
  fnames?: (string | null)[] | null;
  userAssociatedAddresses?: string[] | null;
  followerCount?: number | null;
  followingCount?: number | null;
  profileImage?: {
    extraSmall?: string;
    small?: string;
    medium?: string;
    large?: string;
    original?: string;
  } | null;
  connectedAddresses?: {
    address: string;
    blockchain: string;
    chainId: string;
    timestamp: string;
  }[];
}

const farcasterDataMiddleware = farcasterDataFrogMiddleware({
  apiKey: process.env.AIRSTACK_API_KEY || '',
  features: {
    userDetails: {},
  },
  env: "dev",
});

// Initialize Frog App
export const app = new Frog({
  assetsPath: '/',
  basePath: '/api/frame',
  ui: { vars },
  title: 'Talent Passport',
  imageAspectRatio: '1:1',
  headers: {
    'cache-control': 'no-store, no-cache, must-revalidate, proxy-revalidate max-age=0, s-maxage=0',
  },
  imageOptions: {
    height: 1024,
    width: 1024,
  },
  browserLocation: CAST_INTENS,
  hub: {
    apiUrl: "https://hubs.airstack.xyz",
    fetchOptions: {
      headers: {
        "x-airstack-hubs": process.env.AIRSTACK_API_KEY || '',
      }
    }
  },
})

// Initial frame
app.frame('/', (c) => {
  return c.res({
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
          backgroundImage="url(https://raw.githubusercontent.com/Mr94t3z/talent-passport/refs/heads/master/public/union.png)"
          backgroundColor="bg"
          justifyContent="center"
          paddingTop="52"
          paddingLeft="80"
          paddingRight="80"
          backgroundSize="120% 130%"
          backgroundPosition="top -10%"
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
                  src="https://talentprotocol.com/images/farcaster.svg"
                />

            </Box>

            <Spacer size="6" />

              <Text color="linearBlur" align="center" size="14">
                {'0x94t3z.eth'}
              </Text>

          </Box>

          <Spacer size="52" />

          <Box 
            alignHorizontal="center" 
            alignVertical="center"
            position="relative"
          > 

              <text 
                color="white" 
                align="center" 
                style={{ 
                  fontSize: "500px",
                  position: "absolute", 
                  paddingTop: "25px",
                  color: "rgba(255, 255, 255, 0.1)",
                  top: "50%", 
                  left: "50%", 
                  transform: "translate(-50%, -50%)",
                }}
              >
                94
              </text>
            
              <img
                height="300"
                width="300"
                src="https://avatars.githubusercontent.com/u/52822242?v=4"
                style={{
                  borderRadius: "0%",
                  border: "2px solid #7559EC",
                }}
              />

          </Box>

          <Spacer size="24" />

          <Box 
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
                    ACTIVITY
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
                    IDENTITY
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
                    SKILLS
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
                    width="40"
                    height="40"
                    objectFit="contain"
                    src="/logomark_dark.png"
                  />

                  <Spacer size="8" />
                  
                  <Text color="linearBlur" align="center" size="14">
                    Passport ID
                  </Text>

                  <Spacer size="4" />

                  <Text color="white" align="center" size="14">
                    473376
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
                    src="https://talentprotocol.com/images/farcaster.svg"
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


app.frame('/my-passport', farcasterDataMiddleware, async (c) => {

  const userDetails = c.var?.userDetails as UserDetails;

  const fid = c.frameData?.fid ?? null;

  const ethAddress =
  userDetails?.connectedAddresses?.find((addr) => addr.blockchain === 'ethereum')?.address ?? 
  userDetails?.connectedAddresses?.[0]?.address ?? null;

  const embedUrlByUser = `${embedUrl}/result/${fid}/${ethAddress}`;

  const SHARE_BY_USER = `${baseUrl}?text=${encodeURIComponent(text)}&embeds[]=${encodeURIComponent(embedUrlByUser)}`;

  try {
    
    const agent = new https.Agent({
      rejectUnauthorized: false,
    });
  
    // Fetch API by Connect Wallet Address using Axios
    const response = await axios.get(`${baseUrlTalentProtocol}/${ethAddress}`, {
      headers: {
          'X-API-KEY': process.env.TALENT_PROTOCOL_API_KEY || '',
      },
      httpsAgent: agent,
    });

    // Check if the response status is not 200 (success) or if there’s an error in the response data
    if (response.status !== 200 || response.data.error) {
        return c.error({
            message: 'You need to register first 🫡',
        });
    }

    return c.res({
      title: 'Talent Passport',
      image: `/passport-image/${fid}/${ethAddress}`,
      intents: [
        <Button action={`/result/${fid}/${ethAddress}`}>My Passport</Button>,
        <Button.Link href={SHARE_BY_USER}>Share</Button.Link>,
      ]
    })
  } catch (error) {
    console.error('Error fetching passport data:', error);
    return c.error(
      {
        message: 'You need to register first 🫡',
      }
    )
  }
})


app.frame('/result/:fid/:ethAddress', async (c) => {
  const { fid, ethAddress } = c.req.param();

  const embedUrlByUser = `${embedUrl}/result/${fid}/${ethAddress}`;

  const SHARE_BY_USER = `${baseUrl}?text=${encodeURIComponent(text)}&embeds[]=${encodeURIComponent(embedUrlByUser)}`;

  try {

    const agent = new https.Agent({
      rejectUnauthorized: false,
    });
  
    // Fetch API by Connect Wallet Address using Axios
    const response = await axios.get(`${baseUrlTalentProtocol}/${ethAddress}`, {
      headers: {
        'X-API-KEY': process.env.TALENT_PROTOCOL_API_KEY || '',
      },
      httpsAgent: agent
    });
  
    // Check if the response status is not 200 (success)
    if (response.status !== 200 || response.data.error) {
      return c.error({
        message: 'You need to register first 🫡',
      });
    }

    return c.res({
      title: 'Talent Passport',
      image: `/passport-image/${fid}/${ethAddress}`,
      intents: [
        <Button action='/my-passport'>My Passport</Button>,
        <Button.Link href={SHARE_BY_USER}>Share</Button.Link>,
      ]
    })
  } catch (error) {
    return c.error(
      {
        message: 'You need to register first 🫡',
      }
    )
  }
})


app.image('/passport-image/:fid/:ethAddress', async (c) => {
  const { fid, ethAddress } = c.req.param();

  const agent = new https.Agent({
    rejectUnauthorized: false,
  });

  // Fetch API by Connect Wallet Address using Axios
  const response = await axios.get(`${baseUrlTalentProtocol}/${ethAddress}`, {
    headers: {
      'X-API-KEY': process.env.TALENT_PROTOCOL_API_KEY || '',
    },
    httpsAgent: agent
  });
  
  // Extract relevant information from the response
  const data = response.data;
  const username = data.passport.passport_profile.name || 'Unknown';
  const builder_score = data.passport.score || 0;
  const activity_score = data.passport.activity_score || 0;
  const identity_score = data.passport.identity_score || 0;
  const skills_score = data.passport.skills_score || 0;
  const passport_id = data.passport.passport_id || 0;
  const image_url = data.passport.passport_profile.image_url || '';


  // Fetch the user's profile picture using Axios
  const imageResponse = await axios.get(image_url, {
    responseType: 'arraybuffer',
    httpsAgent: agent
  });
  const imageArrayBuffer = Buffer.from(imageResponse.data, 'binary');

  // Convert the WebP image to PNG using sharp
  const pngBuffer = await sharp(imageArrayBuffer).toFormat('png').toBuffer();

  const imageSrc = `data:image/png;base64,${pngBuffer.toString('base64')}`;


  return c.res({
    headers: {
      'cache-control': 'no-store, no-cache, must-revalidate, proxy-revalidate max-age=0, s-maxage=0',
    },
    image: (
      <Box
          alignVertical="center"
          backgroundImage="url(https://raw.githubusercontent.com/Mr94t3z/talent-passport/refs/heads/master/public/union.png)"
          backgroundColor="bg"
          justifyContent="center"
          paddingTop="52"
          paddingLeft="80"
          paddingRight="80"
          backgroundSize="120% 130%"
          backgroundPosition="top -10%"
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
                  src="https://talentprotocol.com/images/farcaster.svg"
                />

            </Box>

            <Spacer size="6" />

              <Text color="linearBlur" align="center" size="14">
                {username}
              </Text>

          </Box>

          <Spacer size="52" />

          <Box 
            alignHorizontal="center" 
            alignVertical="center"
            position="relative"
          >

            {builder_score >= 100 ? (
              <>
              
              <text
                color="white"
                align="center"
                style={{
                  fontSize: "380px",
                  position: "absolute",
                  paddingTop: "25px",
                  color: "rgba(255, 255, 255, 0.1)",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                {builder_score}
              </text>
              
              <img
                  height="240"
                  width="240"
                  src={imageSrc}
                  style={{
                    borderRadius: "0%",
                    border: "2px solid #7559EC",
                  }} 
                />
                  
                </>

              ) : (

                <>
                
                <text
                  color="white"
                  align="center"
                  style={{
                    fontSize: "500px",
                    position: "absolute",
                    paddingTop: "25px",
                    color: "rgba(255, 255, 255, 0.1)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {builder_score}
                </text>
                
                <img
                    height="300"
                    width="300"
                    src={imageSrc}
                    style={{
                      borderRadius: "0%",
                      border: "2px solid #7559EC",
                    }} 
                  />
                    
                </>
              )}

          </Box>

          <Spacer size="24" />

          <Box 

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
                  {activity_score <= 0 ? (
                  <Text color="white" align="center" size="32">
                    0
                  </Text>  
                  ) : (
                  <Text color="white" align="center" size="32">
                    {activity_score}
                  </Text>
                  )}
                  <Spacer size="10" />
                  <Text color="linearBlur" align="center" size="14">
                    ACTIVITY
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
                  {identity_score <= 0 ? (
                  <Text color="white" align="center" size="32">
                    0
                  </Text>  
                  ) : (
                  <Text color="white" align="center" size="32">
                    {identity_score}
                  </Text>
                  )}
                  <Spacer size="10" />
                  <Text color="linearBlur" align="center" size="14">
                    IDENTITY
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
                  {skills_score <= 0 ? (
                  <Text color="white" align="center" size="32">
                    0
                  </Text>  
                  ) : (
                  <Text color="white" align="center" size="32">
                    {skills_score}
                  </Text>
                  )}
                  <Spacer size="10" />
                  <Text color="linearBlur" align="center" size="14">
                    SKILLS
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
                    width="40"
                    height="40"
                    objectFit="contain"
                    src="/logomark_dark.png"
                  />

                  <Spacer size="8" />
                  
                  <Text color="linearBlur" align="center" size="14">
                    Passport ID
                  </Text>

                  <Spacer size="4" />

                  <Text color="white" align="center" size="14">
                    {passport_id}
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
                    src="https://talentprotocol.com/images/farcaster.svg"
                  />

                  <Spacer size="4" />
                  
                  <Text color="linearBlur" align="center" size="14">
                    Farcaster ID
                  </Text>

                  <Spacer size="4" />

                  <Text color="white" align="center" size="14">
                    {fid}
                  </Text>

              </Box>

            </Box>

          </Box>
        
        </Box>

      </Box>
    ),
  })
})


// Uncomment this line code to tested on local server
// devtools(app, { serveStatic });

export const GET = handle(app)
export const POST = handle(app)
