import React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
  width?: string,
  height?: string,
  fill?: string
}

const Search: React.FC<Props> = (props) => {
  const { fill, width, height } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 17 18" fill="none">
      <circle cx="8" cy="8" r="7" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="15.9393" y1="17" x2="13.5001" y2="14.5608" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default React.memo(Search)

Search.defaultProps = {
  width: "17",
  height: "18",
  fill: "#FFFFFF"
  // fill: "#2D3DDF"
}