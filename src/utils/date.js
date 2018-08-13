export const getDate = () => {
  const date = new Date()
  return `${date.toLocaleDateString().replace(/\//g, '-')} ${date.toLocaleTimeString()}`
}