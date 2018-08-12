const validateSmallLength = (text) => {
  const pathern = /^.{5,25}$/
  return pathern.test(text)
}

const validateLargeLength = (text) => {
  const pathern = /^.{10,300}$/
  return pathern.test(text)
}

const cutSpaceText = (text) => {
  return text.trim().replace(/\s\s+/g, ' ')
}

export const validateTitle = (text) => {
  const result = cutSpaceText(text)
  return validateSmallLength(result)
}

export const validateDescription = (text) => {
  const result = cutSpaceText(text)
  return validateLargeLength(result)
}