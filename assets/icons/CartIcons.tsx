import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
export const CartIcons = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#939393"
      fillRule="evenodd"
      d="M3.58 3.019a.687.687 0 0 1 .545-.269h19.25a.687.687 0 0 1 .664.865l-2.75 10.312a.688.688 0 0 1-.664.51H6.875a.687.687 0 0 1-.664-.51L3.46 3.615a.687.687 0 0 1 .119-.596Zm1.44 1.106 2.383 8.938h12.694l2.383-8.938H5.02Z"
      clipRule="evenodd"
    />
    <Path
      fill="#939393"
      fillRule="evenodd"
      d="M0 0h3.438c.315 0 .59.215.666.52l.688 2.75-1.334.334-.557-2.229H0V0ZM7.563 17.875a1.375 1.375 0 1 0 0 2.75 1.375 1.375 0 0 0 0-2.75Zm-2.75 1.375a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0ZM19.938 17.875a1.375 1.375 0 1 0 0 2.75 1.375 1.375 0 0 0 0-2.75Zm-2.75 1.375a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0Z"
      clipRule="evenodd"
    />
  </Svg>
)
