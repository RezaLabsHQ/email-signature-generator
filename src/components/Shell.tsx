import { ReactNode } from "react";

/** Ambient dark canvas — layered gradients, noise, grid, and floating blobs. */
export default function Shell({ children }: { children: ReactNode }) {
  return (
    <main className="ambient-shell min-h-screen text-ink">
      <div className="ambient-blob ambient-blob-one" />
      <div className="ambient-blob ambient-blob-two" />
      <div className="ambient-blob ambient-blob-three" />
      {children}
    </main>
  );
}
