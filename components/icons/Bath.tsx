import React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
  width?: string,
  height?: string,
  fill?: string
}

const Bath: React.FC<Props> = (props) => {
  const { fill, width, height } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 18 17" fill="none">
      <path d="M16.9345 8.49649H3.32938V4.02293C3.32366 3.43552 3.64422 2.89341 4.1617 2.61537C4.44245 2.46322 4.76239 2.39877 5.08015 2.43034C4.75035 3.42915 5.00945 4.52855 5.75057 5.27497L6.59937 6.12373C6.91183 6.43634 7.41858 6.43634 7.73104 6.12373L10.5603 3.29453C10.8729 2.98207 10.8729 2.47531 10.5603 2.16286L9.71147 1.3141C8.73547 0.342484 7.19734 0.226172 6.08632 1.03997C5.10193 0.655515 3.99112 0.78267 3.11907 1.37963C2.24702 1.9766 1.72656 2.96613 1.72878 4.02294L1.72878 8.49649H0.928476C0.486481 8.49649 0.128174 8.8548 0.128174 9.29679C0.128174 9.73879 0.486481 10.0971 0.928476 10.0971H1.72878V12.498C1.7319 13.5121 2.37288 14.4145 3.32938 14.7514L3.32938 15.6992C3.32938 16.1412 3.68769 16.4995 4.12968 16.4995C4.57168 16.4995 4.92998 16.1412 4.92998 15.6992V14.8989H12.933V15.6992C12.933 16.1412 13.2913 16.4995 13.7333 16.4995C14.1753 16.4995 14.5336 16.1412 14.5336 15.6992V14.7514C15.4901 14.4145 16.1311 13.5121 16.1342 12.498L16.1342 10.0971H16.9345C17.3765 10.0971 17.7348 9.73879 17.7348 9.29679C17.7348 8.8548 17.3765 8.49649 16.9345 8.49649ZM6.88228 2.44577C7.3514 1.97789 8.11068 1.97789 8.5798 2.44577L8.86272 2.72869L7.16523 4.42621L6.88231 4.14329C6.41415 3.67429 6.41414 2.91479 6.88228 2.44577ZM14.5336 12.498C14.5333 12.9399 14.1752 13.298 13.7333 13.2983L4.12968 13.2983C3.68781 13.298 3.32968 12.9399 3.32938 12.498V10.0971H14.5336V12.498Z" fill={fill} />
    </svg>
  )
}

export default React.memo(Bath)

Bath.defaultProps = {
  width: "18",
  height: "17",
  fill: "#003AA8"
}