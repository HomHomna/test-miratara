import React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
  width?: string,
  height?: string,
  fill?: string
}

const Car: React.FC<Props> = (props) => {
  const { fill, width, height } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 46 37" fill="none">
      <path d="M13.281 25.083L8.68636 20.4884C7.78607 19.5901 6.59269 19.0952 5.32134 19.0952H2.13894C1.61363 19.0952 1.18726 19.5216 1.18726 20.0469C1.18726 20.5722 1.61363 20.9985 2.13894 20.9985H5.32125C6.07112 20.9985 6.8077 21.303 7.33873 21.834L10.3098 24.8051H2.13894C1.61363 24.8051 1.18726 25.2314 1.18726 25.7567C1.18726 26.282 1.61363 26.7084 2.13894 26.7084H12.6071C12.9916 26.7084 13.338 26.4762 13.4865 26.1203C13.6349 25.7644 13.5531 25.3552 13.281 25.083Z" fill={fill} />
      <path d="M12.6072 29.5093C12.0819 29.5093 11.6555 29.9357 11.6555 30.461V33.316C11.6555 33.8412 11.2273 34.2676 10.7038 34.2676H4.99388C4.47044 34.2676 4.0422 33.8412 4.0422 33.316V29.5093C4.0422 28.984 3.61583 28.5576 3.09051 28.5576C2.5652 28.5576 2.13892 28.984 2.13892 29.5093V33.316C2.13892 34.89 3.41982 36.1709 4.99388 36.1709H10.7038C12.2779 36.1709 13.5588 34.89 13.5588 33.316V30.461C13.5588 29.9357 13.1325 29.5093 12.6072 29.5093Z" fill={fill} />
      <path d="M41.5965 13.4395C38.9738 12.0672 33.0868 11.4277 23.0753 11.4277C13.0639 11.4277 7.177 12.0672 4.55418 13.4395C1.56601 15.0002 0.235596 17.6078 0.235596 21.8959C0.235596 26.0185 1.17961 29.6043 1.21958 29.7547C1.32994 30.1715 1.7068 30.4608 2.13888 30.4608H10.4792L14.0841 32.2633C14.2173 32.3299 14.3638 32.3642 14.5104 32.3642H31.6402C31.7868 32.3642 31.9333 32.3299 32.0646 32.2633L35.6714 30.4608H44.0118C44.4439 30.4608 44.8207 30.1715 44.9311 29.7547C44.9711 29.6043 45.9151 26.0185 45.9151 21.8959C45.9151 17.6078 44.5847 15.0002 41.5965 13.4395ZM43.2599 28.5574H35.4488C35.3003 28.5574 35.1537 28.5917 35.0224 28.6584L31.4156 30.4608H14.735L11.1301 28.6584C10.9969 28.5917 10.8504 28.5574 10.7038 28.5574H2.89259C2.62806 27.3451 2.13888 24.7261 2.13888 21.8958C2.13888 18.3119 3.09431 16.3496 5.43351 15.1257C7.71365 13.9342 13.6482 13.3309 23.0753 13.3309C32.5024 13.3309 38.4369 13.9343 40.7172 15.1257C43.0564 16.3495 44.0118 18.3119 44.0118 21.8958C44.0118 24.7261 43.5226 27.3451 43.2599 28.5574Z" fill={fill} />
      <path d="M44.0117 24.8051H35.8408L38.81 21.8341C39.3429 21.3031 40.0775 20.9986 40.8294 20.9986H44.0117C44.537 20.9986 44.9634 20.5722 44.9634 20.0469C44.9634 19.5216 44.537 19.0952 44.0117 19.0952H40.8294C39.558 19.0952 38.3646 19.5901 37.4644 20.4884L32.8698 25.0831C32.5995 25.3553 32.5176 25.7644 32.6642 26.1204C32.8108 26.4764 33.1591 26.7085 33.5435 26.7085H44.0117C44.537 26.7085 44.9634 26.2821 44.9634 25.7568C44.9633 25.2314 44.537 24.8051 44.0117 24.8051Z" fill={fill} />
      <path d="M34.4056 19.6434C34.2476 19.3083 33.9127 19.0952 33.5434 19.0952H12.6071C12.2378 19.0952 11.9029 19.3083 11.7449 19.6434C11.5888 19.9764 11.6382 20.3724 11.8762 20.6559L16.6344 26.3658C16.8153 26.5828 17.0836 26.7084 17.3653 26.7084H28.7852C29.0668 26.7084 29.3352 26.5828 29.516 26.3658L34.2743 20.6559C34.5122 20.3723 34.5618 19.9764 34.4056 19.6434ZM28.3379 24.8051H17.8107L14.6378 20.9985H31.5107L28.3379 24.8051Z" fill={fill} />
      <path d="M42.0306 14.067C40.9475 11.5775 37.3237 3.3723 36.0637 2.3007C34.4934 0.966454 29.9959 0.170898 24.0271 0.170898H22.1238C16.1551 0.170898 11.6575 0.966454 10.0873 2.29883C8.82728 3.37042 5.20147 11.5756 4.12042 14.0651C3.91299 14.5486 4.13371 15.1082 4.61531 15.3175C5.09494 15.5269 5.65835 15.3079 5.86765 14.8245C8.01647 9.87788 10.645 4.38108 11.3206 3.75111C12.0534 3.12873 15.1539 2.07426 22.1238 2.07426H24.0271C30.9971 2.07426 34.0976 3.12873 34.8265 3.74728C35.506 4.38108 38.1344 9.87591 40.2833 14.8246C40.4394 15.1843 40.7915 15.3974 41.1569 15.3974C41.2825 15.3974 41.4139 15.3727 41.5356 15.3194C42.0172 15.11 42.238 14.5485 42.0306 14.067Z" fill={fill} />
      <path d="M43.0602 28.5576C42.5349 28.5576 42.1085 28.984 42.1085 29.5093V33.316C42.1085 33.8412 41.6802 34.2676 41.1568 34.2676H35.4469C34.9234 34.2676 34.4952 33.8412 34.4952 33.316V30.461C34.4952 29.9357 34.0688 29.5093 33.5435 29.5093C33.0182 29.5093 32.5918 29.9357 32.5918 30.461V33.316C32.5918 34.89 33.8727 36.1709 35.4468 36.1709H41.1567C42.7308 36.1709 44.0117 34.89 44.0117 33.316V29.5093C44.0119 28.984 43.5855 28.5576 43.0602 28.5576Z" fill={fill} />
    </svg>
  )
}

export default React.memo(Car)

Car.defaultProps = {
  width: "46",
  height: "37",
  fill: "#707070"
  // fill: {fill}
  // fill: "#62D5AB"
}