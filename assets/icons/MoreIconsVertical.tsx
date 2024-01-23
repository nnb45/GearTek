import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
export const MoreIconVertical = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#7F7F7F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 10.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666ZM10 5a.833.833 0 1 0 0-1.667A.833.833 0 0 0 10 5ZM10 16.667A.833.833 0 1 0 10 15a.833.833 0 0 0 0 1.667Z"
    />
  </Svg>
)
