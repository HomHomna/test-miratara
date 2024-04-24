import React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
  width?: string,
  height?: string,
  fill?: string
}

const User: React.FC<Props> = (props) => {
  const { fill, width, height } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 18" fill="none">
      <path d="M15 17V15C15 12.7909 13.433 11 11.5 11H4.5C2.567 11 1 12.7909 1 15V17" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <ellipse cx="7.99989" cy="5" rx="3.55556" ry="4" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default React.memo(User)

User.defaultProps = {
  width: "16",
  height: "18",
  fill: "#FFFFFF"
  // fill: "#62D5AB"
}