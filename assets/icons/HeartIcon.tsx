import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
export const HeartIcon = (props: SvgProps) => (
   <Svg

      width={14}
      height={13}
      fill="none"
      {...props}
   >
      <Path
         fill="#0ACF83"
         d="M12.893 1.073a3.667 3.667 0 0 0-5.186 0L7 1.78l-.707-.707A3.668 3.668 0 1 0 1.107 6.26l.706.707L7 12.153l5.187-5.186.706-.707a3.667 3.667 0 0 0 0-5.187Z"
      />
   </Svg>
)
