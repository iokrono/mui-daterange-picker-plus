import {
  addDays,
  startOfWeek,
  endOfWeek,
  addWeeks,
  startOfMonth,
  endOfMonth,
  addMonths,
  startOfYear,
  endOfYear,
  addYears,
  startOfDay,
  endOfDay,
} from "date-fns";
import type { Locale } from "date-fns";
import type { DefinedRange } from "./types/utils";

/**
 * ? An array of default ranges to populate the presets list with
 * @param date date to get month
 * @param locale locale to use
 * @returns array of default ranges
 */
export const getDefaultRanges = (
  date: Date,
  locale?: Locale
): DefinedRange[] => [
  {
    label: "Today",
    startDate: startOfDay(date),
    endDate: endOfDay(date),
  },
  {
    label: "Yesterday",
    startDate: startOfDay(addDays(date, -1)),
    endDate: endOfDay(addDays(date, -1)),
  },
  {
    label: "This Week",
    startDate: startOfWeek(date, { locale }),
    endDate: endOfWeek(date, { locale }),
  },
  {
    label: "Last Week",
    startDate: startOfWeek(addWeeks(date, -1), { locale }),
    endDate: endOfWeek(addWeeks(date, -1), { locale }),
  },
  {
    label: "This Month",
    startDate: startOfMonth(date),
    endDate: endOfMonth(date),
  },
  {
    label: "Last Month",
    startDate: startOfMonth(addMonths(date, -1)),
    endDate: endOfMonth(addMonths(date, -1)),
  },
  {
    label: "This Year",
    startDate: startOfYear(date),
    endDate: endOfYear(date),
  },
  {
    label: "Last Year",
    startDate: startOfYear(addYears(date, -1)),
    endDate: endOfYear(addYears(date, -1)),
  },
];
