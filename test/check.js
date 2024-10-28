import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const passportId = '0xc698865c38eC12b475AA55764d447566dd54c758';
const apiKey = process.env.TALENT_PROTOCOL_API_KEY || ''

const response = await fetch(`https://api.talentprotocol.com/api/v2/passports/${passportId}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': apiKey,
    },
});

if (response.ok) {
    const data = await response.json();
    console.log(data);
} else {
    console.error('Failed to fetch passport data:', response.status, response.statusText);
}