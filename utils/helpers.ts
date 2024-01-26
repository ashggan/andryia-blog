import type { LocaleObject } from "@nuxtjs/i18n/dist/runtime/composables";

export const castToNumber = (param: number | string) => {
  const num = Number(param);
  if (isNaN(num)) {
    return false;
  }
  return num;
};

export const getLocaleCode = (loc: string | LocaleObject) =>
  typeof loc === "object" ? loc.code : loc;

export const getLocaleName = (loc: string | LocaleObject) =>
  typeof loc === "object" ? loc.name : loc;
