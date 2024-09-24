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

export const copyToClipboard = (text) => {
  const tempTextArea = document.createElement('textarea');
  tempTextArea.value = text;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  tempTextArea.setSelectionRange(0, 99999);
  document.execCommand('copy');
  document.body.removeChild(tempTextArea);
};