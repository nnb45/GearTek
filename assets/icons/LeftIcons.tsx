import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
export const LeftIcons = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7 13.5-6-6 6-6"
    />
  </Svg>
)