import React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
  width?: string,
  height?: string,
  fill?: string
}

const Home: React.FC<Props> = (props) => {
  const { fill, width, height } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 19 21" fill="none">
      <path d="M0.951172 7.65159L9.50008 1.00244L18.049 7.65159V18.1002C18.049 19.1495 17.1984 20 16.1492 20C16.1492 20 11.4904 20 9.53771 20C7.58504 20 8.33853 20 8.33853 20H2.85093C1.80172 20 0.951172 19.1495 0.951172 18.1002V7.65159Z" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.5 20V10H12.5V20" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default React.memo(Home)

Home.defaultProps = {
  width: "19",
  height: "21",
  fill: "#FFFFFF"
  // fill: "#62D5AB"
}