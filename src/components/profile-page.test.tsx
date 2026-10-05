import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { ProfilePage } from "./profile-page";
afterEach(cleanup);
describe("프로필 화면", () => {
  it("프로필과 소개를 표시한다", () => {
    render(<ProfilePage />);
    expect(screen.getByRole("heading", { name: "임자임당" })).toBeTruthy();
    expect(screen.getByText(/직접 경험해서/)).toBeTruthy();
    expect(screen.getByRole("img")).toBeTruthy();
  });
  it("링크를 안전하게 새 탭으로 연다", () => {
    render(<ProfilePage />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(3);
    for (const link of links) {
      expect(link.getAttribute("href")).toMatch(/^https:\/\//);
      expect(link.getAttribute("target")).toBe("_blank");
      expect(link.getAttribute("rel")).toBe("noopener noreferrer");
    }
  });
});
