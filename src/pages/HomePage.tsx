import CryptosGrid from "../components/CryptosGrid/CryptosGrid";
import HomePageLayout from "../components/Layouts/HomePageLayout/HomePageLayout";
import SearchBar from "../components/SearchBar/SearchBar";
import Logo from "../components/Logo/Logo";

export default function HomePage() {
  return (
    <HomePageLayout>
      <Logo />
      <SearchBar />
      <CryptosGrid />
    </HomePageLayout>
  )
}
