import Header from "./components/Header/Header.jsx";
import TeachingSection from "./components/TeachingSection.jsx";
import DifferencesSection from "./components/DifferencesSection.jsx";
import IntroSection from "./components/IntroSection.jsx";
import TabsSection from "./components/TabsSection.jsx";
import FeedBackSection from "./components/FeedBackSection.jsx";
import EffectSecton from "./components/EffectSection.jsx";

import { useState } from "react";

function App() {
  const [tab, setTab] = useState("effect");

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab === "main" && (
          <>
            <TeachingSection />
            <DifferencesSection />
          </>
        )}

        {tab === "feedback" && (
          <>
            <FeedBackSection />
          </>
        )}

        {tab === "effect" && (
          <>
            <EffectSecton />
          </>
        )}
      </main>
    </>
  );
}

export default App;
