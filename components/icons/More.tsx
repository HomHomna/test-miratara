import React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
  width?: string,
  height?: string,
  fill?: string
}

const More: React.FC<Props> = (props) => {
  const { fill, width, height } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 17 3" fill="none">
      <circle cx="8.74121" cy="1.5" r="1" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="15.0847" cy="1.5" r="1" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="2.39771" cy="1.5" r="1" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default React.memo(More)

More.defaultProps = {
  width: "17",
  height: "3",
  fill: "#003AA8"
}