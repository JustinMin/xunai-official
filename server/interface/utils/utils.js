export function filter(id, list=[]) {
  return list.filter((item) => item.id === Number(id));

}
