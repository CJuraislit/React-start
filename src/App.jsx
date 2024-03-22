import Header from "./components/Header";
import TeachingSection from "./components/TeachingSection.jsx";
import DifferencesSection from "./components/DifferencesSection.jsx";
import IntroSection from "./components/IntroSection.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TeachingSection />
        <DifferencesSection />
      </main>
    </>
  );
}

export default App;
