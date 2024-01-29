import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
export const FavoriteIcons = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#939393"
      fillRule="evenodd"
      d="M23.193 5.924c-2.411-2.339-6.258-2.45-8.805-.329A.582.582 0 0 1 14 5.73a.582.582 0 0 1-.388-.135c-2.547-2.12-6.394-2.01-8.805.33a6.115 6.115 0 0 0-.339 8.49.588.588 0 0 1 .065.09L14 23.687l9.467-9.182a.59.59 0 0 1 .065-.09 6.115 6.115 0 0 0-.339-8.49Zm1.315 9.146a7.281 7.281 0 0 0-.503-9.983C21.273 2.436 16.992 2.214 14 4.417c-2.992-2.203-7.272-1.981-10.005.67a7.281 7.281 0 0 0-.503 9.983c.029.061.07.117.119.165l9.983 9.684c.226.22.586.22.812 0l9.983-9.684a.583.583 0 0 0 .12-.165Z"
      clipRule="evenodd"
    />
    <Path
      fill="#939393"
      fillRule="evenodd"
      d="M21.583 10.5a2.917 2.917 0 0 0-2.916-2.917V6.417A4.083 4.083 0 0 1 22.75 10.5h-1.167Z"
      clipRule="evenodd"
    />
  </Svg>
)