import {
  StarFill,
  StarHalf,
  Park,
  Bath,
  Drink,
  Gym,
  More,
} from '@/components/icons'

const star = (rate: number) => {
  const numStars = Math.floor(rate)
  const hasHalfStar = rate - numStars >= 0.5

  const stars = Array.from({ length: numStars }, (_, index) => (
    <StarFill fill="#FFC362" />
  ))

  if (hasHalfStar) {
    stars.push(<StarHalf fill="#FFC362" />)
  }

  const emptyStars = Array.from({ length: 5 - stars.length }, (_, index) => (
    <StarFill fill="#727C8E" />
  ))

  const allStars = [...stars, ...emptyStars]
  return allStars
}

export default star