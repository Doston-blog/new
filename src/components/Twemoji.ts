import kebabCase from '@/lib/kebabCase'

const Twemoji = ({ emoji, size = 'twa-lg', className }) => {
  let cls = `inline-block twa ${size} twa-${kebabCase(emoji)} ${className || ''}`
  return <i className={cls.trim()} />
}

export default Twemoji