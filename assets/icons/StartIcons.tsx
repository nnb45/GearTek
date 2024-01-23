import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
export const StartIcons = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#FFC120"
      stroke="#FFC120"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8 1.333 2.06 4.174 4.607.673-3.334 3.247.787 4.586L8 11.847l-4.12 2.166.787-4.586L1.333 6.18l4.607-.673L8 1.333Z"
    />
  </Svg>
)
