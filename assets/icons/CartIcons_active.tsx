import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
export const CartIcons_active = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#0ACF83"
      fillRule="evenodd"
      d="M6.303 5.987a1.387 1.387 0 0 0-1.34 1.744l2.773 10.4c.162.606.712 1.029 1.34 1.029H22.94c.628 0 1.178-.423 1.34-1.03l2.773-10.399a1.387 1.387 0 0 0-1.34-1.744H6.303Z"
      clipRule="evenodd"
    />
    <Path
      fill="#0ACF83"
      fillRule="evenodd"
      d="M2.143 3.214h3.466c.636 0 1.191.433 1.345 1.05l.694 2.774-2.69.672-.431-1.723H2.143V3.214ZM9.769 19.853a3.466 3.466 0 1 0 0 6.933 3.466 3.466 0 0 0 0-6.933ZM22.248 19.853a3.466 3.466 0 1 0 0 6.933 3.466 3.466 0 0 0 0-6.933Z"
      clipRule="evenodd"
    />
  </Svg>
)
