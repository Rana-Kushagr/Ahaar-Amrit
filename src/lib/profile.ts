import type { Dosha } from "@/lib/dosha";

export type AgeGroup = "13-15" | "16-18" | "18+";
export type Region =
  | "north"
  | "south"
  | "east"
  | "west"
  | "northeast";
export type DietaryPreference = "vegetarian" | "non-vegetarian" | "eggetarian";
export type Allergy = "dairy" | "nuts" | "gluten" | "soy" | "fish" | "other" | "none";
export type Goal =
  | "balanced-diet"
  | "everyday-habits"
  | "discover-indian-foods"
  | "ayurvedic-wellness"
  | "other";

export interface AhaarProfile {
  ageGroup?: AgeGroup;
  region?: Region;
  dietaryPreference?: DietaryPreference;
  allergies: Allergy[];
  otherAllergy?: string;
  goals: Goal[];
  otherGoal?: string;
  wantsAyurveda?: boolean;
  /** Optional — only set if the user chose to explore Ayurveda and finished the quiz. */
  dosha?: Dosha;
  completedAt?: string;
}

export const emptyProfile: AhaarProfile = { allergies: [], goals: [] };

export interface Choice<T extends string> {
  value: T;
  label: string;
  hindi: string;
}

export const ageGroupOptions: Choice<AgeGroup>[] = [
  { value: "13-15", label: "13–15", hindi: "किशोरावस्था" },
  { value: "16-18", label: "16–18", hindi: "युवा किशोर" },
  { value: "18+", label: "18+", hindi: "वयस्क" },
];

export const regionOptions: Choice<Region>[] = [
  { value: "north", label: "North India", hindi: "उत्तर भारत" },
  { value: "south", label: "South India", hindi: "दक्षिण भारत" },
  { value: "east", label: "East India", hindi: "पूर्वी भारत" },
  { value: "west", label: "West India", hindi: "पश्चिम भारत" },
  { value: "northeast", label: "Northeast India", hindi: "पूर्वोत्तर भारत" },
];

export const dietOptions: Choice<DietaryPreference>[] = [
  { value: "vegetarian", label: "Vegetarian", hindi: "शाकाहारी" },
  { value: "non-vegetarian", label: "Non-vegetarian", hindi: "मांसाहारी" },
  { value: "eggetarian", label: "Eggetarian", hindi: "अंडाहारी" },
];

export const allergyOptions: Choice<Allergy>[] = [
  { value: "dairy", label: "Dairy", hindi: "दूध से बने पदार्थ" },
  { value: "nuts", label: "Nuts", hindi: "मेवे" },
  { value: "gluten", label: "Gluten / Wheat", hindi: "गेहूँ / ग्लूटेन" },
  { value: "soy", label: "Soy", hindi: "सोया" },
  { value: "other", label: "Other", hindi: "अन्य" },
  { value: "none", label: "None", hindi: "कोई नहीं" },
];

export const goalOptions: Choice<Goal>[] = [
  { value: "balanced-diet", label: "Eat a more balanced diet", hindi: "संतुलित आहार" },
  { value: "everyday-habits", label: "Improve my everyday eating habits", hindi: "बेहतर आदतें" },
  { value: "discover-indian-foods", label: "Discover nutritious Indian foods", hindi: "भारतीय पौष्टिक भोजन" },
  { value: "ayurvedic-wellness", label: "Explore Ayurvedic wellness", hindi: "आयुर्वेदिक जीवनशैली" },
  { value: "other", label: "Other", hindi: "अन्य" },
];

export const PROFILE_STORAGE_KEY = "ahaar-amrit-profile";

/**
 * Storage layer is intentionally isolated so it can be swapped for a
 * backend/database later without touching the UI.
 */
export function loadProfile(): AhaarProfile | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(PROFILE_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<AhaarProfile>;
    if (!parsed || typeof parsed !== "object") return null;
    return {
      ...emptyProfile,
      ...parsed,
      allergies: Array.isArray(parsed.allergies) ? parsed.allergies : [],
      goals: Array.isArray(parsed.goals) ? parsed.goals : [],
    };
  } catch {
    return null;
  }
}

export function saveProfile(profile: AhaarProfile): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
  } catch {
    /* storage unavailable — profile stays in memory for this session */
  }
}

export function clearProfile(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(PROFILE_STORAGE_KEY);
  } catch {
    /* ignore */
  }
}

export function labelFor<T extends string>(options: Choice<T>[], value?: T): string {
  return options.find((o) => o.value === value)?.label ?? "—";
}
