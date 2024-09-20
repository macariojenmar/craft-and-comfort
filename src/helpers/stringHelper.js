export const formatWithThousandSeparator = (number) => new Intl.NumberFormat().format(number);

export const capitalizeFirstLetter = (word) => word?.charAt(0).toUpperCase() + word.slice(1);

export const kebabToCapitalized = (kebabString) => kebabString?.split('-').map(word => capitalizeFirstLetter(word)).join(' ')

export const searchRegex = (value) => value?.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

export const frontendSearch = (listRows, search) => {
  const regex = new RegExp(searchRegex(search ?? ''), 'i');
  listRows = listRows.filter((val) => {
    return Object.keys(val).some((field) => {
      return regex.test(val[field]?.toString());
    });
  });
  return listRows;
};