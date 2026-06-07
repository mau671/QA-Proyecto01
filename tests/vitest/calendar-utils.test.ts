import { describe, expect, it } from "vitest";

import {
  getGroupId,
  groupsHaveConflict,
  parseTimeToDate,
} from "/home/mau/Dev/horarios/src/lib/calendar-utils.ts";

describe("calendar-utils", () => {
  it("convierte hora y día en una fecha dentro de la semana indicada", () => {
    const weekStart = new Date(2026, 5, 1, 0, 0, 0, 0);
    const result = parseTimeToDate("07:30", 1, weekStart);

    expect(result.getDay()).toBe(1);
    expect(result.getHours()).toBe(7);
    expect(result.getMinutes()).toBe(30);
  });

  it("detecta choque cuando dos grupos tienen sesiones traslapadas el mismo día", () => {
    const group1 = {
      group_code: "1",
      meetings: [{ weekday: 1, starts_at: "07:30", ends_at: "09:20" }],
    };
    const group2 = {
      group_code: "2",
      meetings: [{ weekday: 1, starts_at: "08:30", ends_at: "10:20" }],
    };

    expect(groupsHaveConflict(group1, group2)).toBe(true);
  });

  it("no marca choque cuando los horarios no se traslapan", () => {
    const group1 = {
      group_code: "1",
      meetings: [{ weekday: 2, starts_at: "07:30", ends_at: "09:20" }],
    };
    const group2 = {
      group_code: "2",
      meetings: [{ weekday: 2, starts_at: "09:30", ends_at: "11:20" }],
    };

    expect(groupsHaveConflict(group1, group2)).toBe(false);
  });

  it("genera identificadores estables para curso y grupo", () => {
    expect(getGroupId("IC1802", "1")).toBe("IC1802-1");
  });
});
