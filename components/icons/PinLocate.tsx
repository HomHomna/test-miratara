import React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
  width?: string,
  height?: string,
  fill?: string
}

const PinLocate: React.FC<Props> = (props) => {
  const { fill, width, height } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 19 27" fill="none">
    <path d="M9.40244 1C4.75844 1 1.00244 4.756 1.00244 9.4C1.00244 15.7 9.40244 25 9.40244 25C9.40244 25 17.8024 15.7 17.8024 9.4C17.8024 4.756 14.0464 1 9.40244 1ZM9.40244 12.4C7.74644 12.4 6.40244 11.056 6.40244 9.4C6.40244 7.744 7.74644 6.4 9.40244 6.4C11.0584 6.4 12.4024 7.744 12.4024 9.4C12.4024 11.056 11.0584 12.4 9.40244 12.4Z" stroke={fill} stroke-width="2"/>
    </svg>
  )
}

export default React.memo(PinLocate)

PinLocate.defaultProps = {
  width: "19",
  height: "27",
  fill: "#8E8E8E"
  // fill: "#696969"
  // fill: "#62D5AB"
}