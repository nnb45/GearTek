import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
export const ProfileIcons = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#939393"
      fillRule="evenodd"
      d="M12 2.083c-5.477 0-9.917 4.44-9.917 9.917 0 5.477 4.44 9.917 9.917 9.917 5.477 0 9.917-4.44 9.917-9.917 0-5.477-4.44-9.917-9.917-9.917ZM.917 12C.917 5.879 5.879.917 12 .917S23.083 5.879 23.083 12 18.121 23.083 12 23.083.917 18.121.917 12Z"
      clipRule="evenodd"
    />
    <Path
      fill="#939393"
      fillRule="evenodd"
      d="M12 6.75a2.917 2.917 0 1 0 0 5.833 2.917 2.917 0 0 0 0-5.833ZM7.917 9.667a4.083 4.083 0 1 1 8.166 0 4.083 4.083 0 0 1-8.166 0ZM12 16.667a7.58 7.58 0 0 0-6.57 3.792l-1.01-.584A8.747 8.747 0 0 1 12 15.5c3.24 0 6.067 1.76 7.579 4.375l-1.01.584A7.58 7.58 0 0 0 12 16.667Z"
      clipRule="evenodd"
    />
  </Svg>
)