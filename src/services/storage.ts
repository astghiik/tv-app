export default {
  getIdsOrder: () => sessionStorage.getItem('idsOrder'),
  setIdsOrder: (ids: string[]) => sessionStorage.setItem('idsOrder', JSON.stringify(ids)),
  reorderIds: (id: string) => {
    const parsedIds = JSON.parse(sessionStorage.getItem('idsOrder')!);
    sessionStorage.setItem('idsOrder', JSON.stringify([...new Set([id, ...parsedIds])]));
  },
}
