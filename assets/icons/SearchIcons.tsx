import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
export const SearchIcons = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#BABABA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.167 16.333A6.667 6.667 0 1 0 9.167 3a6.667 6.667 0 0 0 0 13.333ZM17.5 18l-3.625-3.625"
    />
  </Svg>
)
