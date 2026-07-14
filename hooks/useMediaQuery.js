'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to evaluate a CSS media query and reactively update on change.
 * @param {string} query - CSS media query string, e.g. '(min-width: 768px)'
 * @returns {boolean} Whether the media query currently matches.
 */
export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const handler = (e) => setMatches(e.matches);
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, [query]);

  return matches;
}
