export default {
  getAllData: () => fetch('/data.json').then(res => res.json()),
}
