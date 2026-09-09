// Central campaign constants — single source of truth across the platform.

export const LOGO_URL =
  "https://media.base44.com/images/public/user_69ca9199069a08ed53264196/d8ab4f4a7_IMG-20260824-WA0027.jpg";

// TODO: confirm the official 2027 election date with the campaign team.
export const ELECTION_DATE = "2027-02-20T08:00:00Z";

export const CANDIDATE_NAME = "Fuad Atanda Lawal";
export const CANDIDATE_TITLE = "Hon. Fuad Atanda Lawal";
export const CONSTITUENCY = "Eti-Osa Federal Constituency";
export const PARTY = "All Progressives Congress (APC)";
export const POSITION = "House of Representatives";

// Base URL of the external PHP/Laravel API. Forms and data calls post here.
// Set this once the API is deployed.
export const API_BASE = "";

export const WARDS = Array.from({ length: 27 }, (_, i) => `Ward ${String(i + 1).padStart(2, "0")}`);

export const ISSUE_CATEGORIES = [
  "Education", "Health", "Employment", "Infrastructure",
  "Youth", "Women", "Business", "Security", "Environment", "Others",
];

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Fuad", href: "/about" },
  { label: "VOICES", href: "/voices" },
  { label: "Ward Map", href: "/wards" },
  { label: "Events", href: "/events" },
  { label: "Media", href: "/media" },
  { label: "Volunteer", href: "/volunteer" },
];