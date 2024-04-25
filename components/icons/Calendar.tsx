import React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
  width?: string,
  height?: string,
  fill?: string
}

const Calendar: React.FC<Props> = (props) => {
  const { fill, width, height } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 22" fill="none">
      <path d="M1.00244 4.75293C1.00244 3.64836 1.89787 2.75293 3.00244 2.75293H17.0024C18.107 2.75293 19.0024 3.64836 19.0024 4.75293V18.7529C19.0024 19.8575 18.107 20.7529 17.0024 20.7529H3.00244C1.89787 20.7529 1.00244 19.8575 1.00244 18.7529V4.75293Z" fill="white" stroke={fill} strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
      <line x1="15.0024" y1="1.75293" x2="15.0024" y2="3.75293" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="7.00244" y1="1.75293" x2="7.00244" y2="3.75293" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="2.00244" y1="7.75293" x2="18.0024" y2="7.75293" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default React.memo(Calendar)

Calendar.defaultProps = {
  width: "20",
  height: "22",
  fill: "#8E8E8E"
  // fill: "#696969"
  // fill: "#62D5AB"
}