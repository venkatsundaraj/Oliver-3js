"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToHash() {
  const pathname = usePathname();
  const OFFSET = 100; // Offset in pixels

  // Function to handle the scrolling with offset
  const scrollToHashWithOffset = () => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      // Remove the '#' from the hash
      const id = window.location.hash.substring(1);

      // Find the element with the corresponding ID
      const element = document.getElementById(id);

      if (element) {
        // Get the element's position
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;

        // Scroll to element position minus the offset
        window.scrollTo({
          top: elementPosition - OFFSET,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    // Handle initial load
    scrollToHashWithOffset();

    // Add event listener for hash changes within the same page
    window.addEventListener("hashchange", scrollToHashWithOffset);

    // Cleanup
    return () => {
      window.removeEventListener("hashchange", scrollToHashWithOffset);
    };
  }, [pathname]); // Re-run the effect when the pathname changes

  return null; // This component doesn't render anything
}
