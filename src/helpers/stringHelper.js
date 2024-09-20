export const formatWithThousandSeparator = (number) => new Intl.NumberFormat().format(number);
export const capitalizeFirstLetter = (word) => word?.charAt(0).toUpperCase() + word.slice(1);
export const kebabToCapitalized = (kebabString) => kebabString?.split('-').map(word => capitalizeFirstLetter(word)).join(' ')