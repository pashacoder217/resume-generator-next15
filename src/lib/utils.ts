import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Validation helpers for store
export const validateString = (value: unknown): string => {
  if (value === null || value === undefined || value === "") {
    return "";
  }
  return String(value);
};

export const validateHTML = (value: unknown): string => {
  if (value === null || value === undefined || value === "") {
    return "<p></p>";
  }
  // Basic XSS prevention
  const sanitized = String(value)
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/on\w+="[^"]*"/g, "");
  return sanitized || "<p></p>";
};

export const validateArray = <T>(value: T[] | null | undefined): T[] => {
  if (!Array.isArray(value)) {
    return [];
  }
  return value;
};

export const validateObject = <T extends object>(
  value: T | null | undefined,
  defaultValue: T
): T => {
  if (!value || typeof value !== "object") {
    return defaultValue;
  }
  return value;
};
