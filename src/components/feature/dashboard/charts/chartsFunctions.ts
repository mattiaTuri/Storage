import { BooksProps } from "../../../../models/Book";

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
      occurencesList.push({ key: elem, value: occurences });
    });
    return occurencesList;
  };

  export const getLastFiverYears = () => {
    const date = new Date();
    let currentYear = date.getFullYear() - 4
    let years:string[] = []

    for(let i = 0; i < 5; i++) {
      const year = currentYear + i
      years.push(year.toString())
    }

    return years
  }

  export const getReadingBooksValues = (booksList:BooksProps[], years:string[]) => {
    const yearsList = booksList.map((book: BooksProps) => {
      return book.reading_year
    })
  
    let readingYearsBooksList = getChartValue(yearsList)
    const missingYears = checkYears(readingYearsBooksList, years)

    const newYearsList = readingYearsBooksList.concat(missingYears)
    newYearsList.sort((a,b) => a.key - b.key)
    return newYearsList.slice(newYearsList.length - 5)
  }

  export const checkYears = (readingYearsBooksList:any, years:string[]) => {

    let yearsList:any[] = []

    years.map((year) => {
      const yearFound = readingYearsBooksList.find((elem:any) => elem.key.includes(year))
        if(yearFound == undefined)
        yearsList.push({ key: year.toString(), value: 0 })
      })
 
    return yearsList
  }

 
