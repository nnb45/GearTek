import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
export const SliderIcons = (props: SvgProps) => (
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
      d="M3.333 18v-5.833M3.333 8.833V3M10 18v-7.5M10 7.167V3M16.667 18v-4.167M16.667 10.5V3M.833 12.167h5M7.5 7.167h5M14.167 13.833h5"
    />
  </Svg>
)