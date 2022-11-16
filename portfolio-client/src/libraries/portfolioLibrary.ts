
const getImgUrl = (input: string, baseUrl: string) => {
  let url = '';
  input = input ?? '';
  if (input.split('/')[0] === 'api') {
    url = `${baseUrl}/${input}`;
  }
  else {
    url = input
  }
  return url;
}

export { getImgUrl };