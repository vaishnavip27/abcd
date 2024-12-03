"use client";
import {useRouter} from "next/navigation"

export default function Home() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/main"); 
  };

  return (
    <div>
      <button onClick={handleNavigation}>Click me</button>
    </div>
  );
}
