export const getChartValue = (list:string[]) => {
    const listWithoutDuplicate: string[] = [];
    list.forEach((elem: string) => {
      if (!listWithoutDuplicate.includes(elem)) {
        listWithoutDuplicate.push(elem);
      }
    });
    return countOccurences(list, listWithoutDuplicate);
  };

const countOccurences = (
    list: string[],
    listWithoutDuplicate: string[]
  ) => {
    let occurencesList: any[] = [];
    listWithoutDuplicate.forEach((elem) => {
      let occurences = 0;
      list.forEach((originalElem: string) => {
        if (elem == originalElem) occurences++;
      });
      occurencesList.push({ name: elem, value: occurences });
      // occurencesList.push({ name: t(`genres.${elem}`), value: occurences });
    });
    return occurencesList;
  };

