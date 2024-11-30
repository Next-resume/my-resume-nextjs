import ClientSideCountryCode from "./components/ClientSideCountryCode";
import ServeSideCountryCode from "./components/ServeSideCountryCode";

export default function Home() {
  return (
    <div>
      <ClientSideCountryCode />
      <ServeSideCountryCode />
    </div>
  );
}
