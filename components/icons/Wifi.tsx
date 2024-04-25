import React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
  width?: string,
  height?: string,
  fill?: string
}

const Wifi: React.FC<Props> = (props) => {
  const { fill, width, height } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 15 11" fill="none">
      <path d="M3.30493 6.19399C5.84156 4.08117 9.52518 4.08117 12.0618 6.194" stroke={fill} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1.07837 3.9861C4.8389 0.671299 10.478 0.6713 14.2386 3.9861" stroke={fill} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.50024 8.40783C6.79439 7.4884 8.52856 7.4884 9.82271 8.40783" stroke={fill} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="7.6" y1="10.4" x2="7.4" y2="10.4" stroke={fill} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default React.memo(Wifi)

Wifi.defaultProps = {
  width: "15",
  height: "11",
  fill: "#003AA8"
}