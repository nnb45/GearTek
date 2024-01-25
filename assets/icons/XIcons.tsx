import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
export const XIcons = (props: SvgProps) => (
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
      d="M15 5 5 15M5 5l10 10"
    />
  </Svg>
)
