// pages/api/get-ip.js
import { ipAddress } from '@vercel/edge';

export const config = {
  runtime: 'edge',
};

export default function handler(request) {
  const ip = ipAddress(request) || 'unknown';
  return new Response(
    JSON.stringify({ ip }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}
