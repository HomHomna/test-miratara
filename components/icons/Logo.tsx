import React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
  width?: string,
  height?: string,
  fill?: string
}

const Logo: React.FC<Props> = (props) => {
  const { fill, width, height } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 30 34" fill="none">
      <circle cx="8" cy="8" r="8" fill={fill} />
      <circle cx="7.5" cy="27.5" r="6.5" fill={fill} />
      <circle cx="23.5" cy="21.5" r="6.5" fill={fill} />
    </svg>
  )
}

export default React.memo(Logo)

Logo.defaultProps = {
  width: "30",
  height: "34",
  fill: "white"
  // fill: "#62D5AB"
}