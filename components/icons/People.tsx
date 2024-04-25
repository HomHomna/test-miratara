import React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
  width?: string,
  height?: string,
  fill?: string
}

const People: React.FC<Props> = (props) => {
  const { fill, width, height } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 20" fill="none">
      <path d="M17.0024 19V17C17.0024 14.7909 15.2116 13 13.0024 13H5.00244C2.7933 13 1.00244 14.7909 1.00244 17V19" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="5" r="4" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M23.0024 18.9999V16.9999C23.0011 15.177 21.7674 13.5856 20.0024 13.1299" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.0024 1.12988C17.7724 1.58305 19.0103 3.17787 19.0103 5.00488C19.0103 6.83189 17.7724 8.42671 16.0024 8.87988" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default React.memo(People)

People.defaultProps = {
  width: "24",
  height: "20",
  fill: "#8E8E8E"
  // fill: "#696969"
  // fill: "#62D5AB"
}