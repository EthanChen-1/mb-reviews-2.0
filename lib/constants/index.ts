export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Mausbert Reviews";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "Find mouse reviews, rankings, and more from Mausbert here!";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
export const MOUSE_RANKING_LIMIT =
  Number(process.env.MOUSE_RANKING_LIMIT) || 10;
