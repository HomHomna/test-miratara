import React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
  width?: string,
  height?: string,
  fill?: string
}

const Heart: React.FC<Props> = (props) => {
  const { fill, width, height } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 21 18" fill="none">
      <path d="M18.4298 2.41452C16.5446 0.528495 13.4873 0.528494 11.6021 2.41452L10.6719 3.34476L9.74167 2.41452C7.85627 0.529123 4.79944 0.529123 2.91405 2.41452C1.02865 4.29991 1.02865 7.35674 2.91405 9.24214L3.84429 10.1724L10.6719 17L17.4995 10.1724L18.4298 9.24214C20.3158 7.357 20.3158 4.29965 18.4298 2.41452Z" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default React.memo(Heart)

Heart.defaultProps = {
  width: "21",
  height: "18",
  fill: "#FFFFFF"
  // fill: "#62D5AB"
}