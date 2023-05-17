// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef, useState } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type TOProps = CountrySymbolProps;

const TO = forwardRef<SVGSVGElement, TOProps>(function TO(props: TOProps, ref) {
  const [uid] = useState(() => props.id || Math.random().toString());

  return (
    <CountrySymbol
      data-testid="TO"
      aria-label="Tonga"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask
        id={`${uid}-TO-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-TO-a)`}>
        <path fill="#DD2033" d="M0 72V0h72v72z" />
        <path
          fill="#F5F7F8"
          fillRule="evenodd"
          d="M-.2 0v44h44V0h-44ZM21 14h6v7h7v6h-7v7h-6v-7h-7v-6h7v-7Z"
          clipRule="evenodd"
        />
      </g>
    </CountrySymbol>
  );
});

export default TO;