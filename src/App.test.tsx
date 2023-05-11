import React from "react";
import { render, screen, renderHook, waitFor } from "@testing-library/react";
import App from "./App";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

const wrapper = () => (
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);

export function useCustomHook() {
  return useQuery({ queryKey: ["ricknmorty"], queryFn: () => "Hello" });
}

describe("Rendering head", () => {
  it("renders change color text", async () => {
    const { result } = renderHook(() => useCustomHook(), { wrapper });
    await waitFor(() => result.current);

    const text = screen.getByText("Change me->");
    expect(text).toBeInTheDocument();
  });

  test("renders logo", async () => {
    const { result } = renderHook(() => useCustomHook(), { wrapper });
    await waitFor(() => result.current);
    const logo = screen.getByRole("img");
    expect(logo).toBeInTheDocument();
  });
});
