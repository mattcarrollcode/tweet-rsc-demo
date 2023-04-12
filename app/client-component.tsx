"use client";

export function ClientComponent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>{"Start of a client component"}</h1>
      {children}
      <h1>{"End of a client component"}</h1>
    </>
  );
}
