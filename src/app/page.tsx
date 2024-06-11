import { Suspense } from "react";
import HomePage from "./home"

async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense fallback={<div>Loading...</div>}>
        <HomePage></HomePage>
      </Suspense>
    </main>
  );
}

export default Home;
