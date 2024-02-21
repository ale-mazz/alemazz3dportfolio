import NavBar from "@/components/Navbar";
import { createClient } from "@/prismicio";

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <header className="top-0 z-50 mx-auto max-w-[95rem] md:sticky md:top-4">
      <NavBar settings={settings} />
    </header>
  );
}
