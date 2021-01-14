import React from 'react';

export function useHunterCreditsLog() {
  React.useEffect(() => {
    console.log(
      '%cSite was designed and developed by: hunterjennings.dev',
      `
      border: 1px solid white;
      font-family: monospace; 
      font-size: 14px; 
      padding: 10px;
      color: white;
      `,
    );
  }, []);
}
