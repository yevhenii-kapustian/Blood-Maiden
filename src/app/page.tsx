// app/page.tsx (or wherever your main page is)

import LowerHome from "@/components/LowerHomeSection";

export default function HomePage() {
  return (
    <main>
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Crimson+Pro:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        />
      {/* Any other content */}
      <LowerHome />
    </main>
  );
}
