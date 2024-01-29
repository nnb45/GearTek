import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
export const ProfileIcons_active = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#0ACF83"
      fillRule="evenodd"
      d="M15.5 2.5C8.596 2.5 3 8.096 3 15s5.596 12.5 12.5 12.5S28 21.904 28 15 22.404 2.5 15.5 2.5Zm0 3.75a5 5 0 1 0 0 10 5 5 0 0 0 0-10ZM7.464 21.874c1.668-2.883 4.23-4.999 8.036-4.999 3.806 0 6.368 2.116 8.036 5a1.25 1.25 0 0 1-1.082 1.875H8.546a1.25 1.25 0 0 1-1.082-1.876Z"
      clipRule="evenodd"
    />
  </Svg>
)
