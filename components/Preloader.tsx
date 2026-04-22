import React from "react";

interface PreloaderProps {
  isLoading: boolean;
}

export default function Preloader({ isLoading }: PreloaderProps) {
  return (
    <>
      <style>{`
        .zag-stroke {
          fill: transparent;
          stroke: #FE491F;
          stroke-width: 2;
        }
        .zag-stroke-1 {
          stroke-dasharray: 0 1;
          animation: zagDrawStroke 0.55s ease-in-out 0.15s forwards;
        }
        .zag-stroke-2 {
          stroke-dasharray: 0 1;
          animation: zagDrawStroke 0.55s ease-in-out 0.35s forwards;
        }
        .zag-fill-group {
          clip-path: circle(0% at 50% 50%);
          animation: zagRevealFill 0.5s ease-in-out 0.85s forwards;
        }
        @keyframes zagDrawStroke {
          from { stroke-dasharray: 0 1; }
          to   { stroke-dasharray: 1 0; }
        }
        @keyframes zagRevealFill {
          from { clip-path: circle(0% at 50% 50%); }
          to   { clip-path: circle(100% at 50% 50%); }
        }
      `}</style>

      <div
        aria-hidden={!isLoading}
        className={[
          "fixed inset-0 z-[9999] flex items-center justify-center bg-black",
          "transition-opacity duration-700 ease-in-out",
          isLoading ? "opacity-100" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          width="120"
          height="120"
        >
          <path
            className="zag-stroke zag-stroke-1"
            d="M137.322 94.15V79.1042H90.6371L81.9332 96.1125H120.705L81.9332 167.635H97.5606L137.322 94.15Z"
            pathLength="1"
          />
          <path
            className="zag-stroke zag-stroke-2"
            d="M50.6782 107.991V122.841H96.5716L106.462 105.925H67.2948L105.078 36.3652H89.4407L50.6782 107.991Z"
            pathLength="1"
          />
          <g className="zag-fill-group">
            <path
              d="M137.322 94.15V79.1042H90.6371L81.9332 96.1125H120.705L81.9332 167.635H97.5606L137.322 94.15Z"
              fill="#FE491F"
            />
            <path
              d="M50.6782 107.991V122.841H96.5716L106.462 105.925H67.2948L105.078 36.3652H89.4407L50.6782 107.991Z"
              fill="#FE491F"
            />
          </g>
        </svg>
      </div>
    </>
  );
}
