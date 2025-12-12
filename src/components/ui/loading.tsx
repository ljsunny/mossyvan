"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

// JSON 데이터를 미리 정의
const mossyAnimationData = {
  "v": "5.8.1",
  "fr": 60,
  "ip": 0,
  "op": 120,
  "w": 600,
  "h": 600,
  "assets": [],
  "layers": [
    {
      "ddd": 0,
      "ind": 1,
      "ty": 4,
      "nm": "mossy",
      "sr": 1,
      "ks": {
        "o": { "a": 0, "k": 100 },
        "r": { "a": 0, "k": 0 },
        "p": { "a": 0, "k": [300, 300, 0] },
        "a": { "a": 0, "k": [0, 0, 0] },
        "s": { "a": 0, "k": [100, 100, 100] }
      },
      "shapes": [
        {
          "ty": "gr",
          "it": [
            {
              "ty": "el",
              "p": { "a": 0, "k": [0, 0] },
              "s": { "a": 0, "k": [260, 260] }
            },
            {
              "ty": "fl",
              "c": { "a": 0, "k": [0.43, 0.67, 0.36, 1] },
              "o": { "a": 0, "k": 100 }
            },
            {
              "ty": "tr",
              "p": { "a": 0, "k": [0, 0] },
              "a": { "a": 0, "k": [0, 0] },
              "s": { "a": 0, "k": [100, 100] },
              "r": { "a": 0, "k": 0 },
              "o": { "a": 0, "k": 100 }
            }
          ]
        }
      ]
    }
  ],
  "markers": []
};

export default function Loading({ size = 200 }: { size?: number }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div
        className="flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <div 
          className="border-2 border-current border-t-transparent rounded-full animate-spin"
          style={{ width: size * 0.6, height: size * 0.6 }}
        />
      </div>
    );
  }

  return (
    <div
      className="flex items-center justify-center"
      style={{ width: size, height: size, minWidth: size, minHeight: size }}
    >
      <Lottie
        animationData={mossyAnimationData}
        loop={true}
        autoplay={true}
        style={{ 
          width: size, 
          height: size,
          display: 'block'
        }}
      />
    </div>
  );
}
