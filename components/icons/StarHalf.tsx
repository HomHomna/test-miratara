import React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
  width?: string,
  height?: string,
  fill?: string
  base?: string
}

const StarHalf: React.FC<Props> = (props) => {
  const { fill, width, height, base } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 11 11" fill="none">
      <defs>
        <linearGradient id="grad">
          <stop offset="50%" stop-color={fill} />
          <stop offset="50%" stop-color={base} />
        </linearGradient>
      </defs>
      <path opacity="0.999249" d="M5.5 8.84258L8.89884 11L7.99975 6.9304L11 4.194L7.04471 3.83665L5.5 0L3.95502 3.83665L0 4.194L3.00028 6.9304L2.10093 11L5.5 8.84258Z" fill="url(#grad)" />
    </svg>
  )
}

export default React.memo(StarHalf)

StarHalf.defaultProps = {
  width: "11",
  height: "11",
  fill: "#FFC362",
  base: "#727C8E",
}