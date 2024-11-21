"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      // Remove the '#' from the hash
      const id = window.location.hash.substring(1);

      // Find the element with the corresponding ID
      const element = document.getElementById(id);

      if (element) {
        // Scroll to the element
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [pathname]); // Re-run the effect when the pathname changes

  return null; // This component doesn't render anything
}
