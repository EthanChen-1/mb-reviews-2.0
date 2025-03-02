export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Mausbert Reviews";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "Find mouse reviews, rankings, and more from Mausbert here!";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
export const MOUSE_RANKING_LIMIT =
  Number(process.env.MOUSE_RANKING_LIMIT) || 10;
export const TEST_ADMIN_NAME = process.env.TEST_ADMIN_NAME || "";
export const TEST_ADMIN_EMAIL = process.env.TEST_ADMIN_EMAIL || "";
export const TEST_ADMIN_PASSWORD = process.env.TEST_ADMIN_PASSWORD || "";
export const TEST_ADMIN_ROLE = process.env.TEST_ADMIN_ROLE || "";
export const TEST_USER_NAME = process.env.TEST_USER_NAME || "";
export const TEST_USER_EMAIL = process.env.TEST_USER_EMAIL || "";
export const TEST_USER_PASSWORD = process.env.TEST_USER_PASSWORD || "";
export const TEST_USER_ROLE = process.env.TEST_USER_ROLE || "";
export const signInDefaultValues = {
  email: "",
  password: "",
};

export const signUpDefaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
