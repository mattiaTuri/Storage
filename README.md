# Storage

## Table of Contents

- [Description](#description)
- [Database Reference](#database-reference)
- [Folder structure](#folder-structure)
- [Used Technologies](#used-technologies)

## Description

This project serves as storage for book and resource management.

#### `Dashboard`

The dashboard displays an overview of the data in the application, specifically:

- the name of the current user
- the total number of books and resources present
- a graph showing how many books have been read in the last 5 years, dividing them by year
- a pie chart showing the books in the app by grouping them by genre
- a pie chart showing the resources in the app grouping them by tags

This projects serves as a manager for managing books and resources, with the option to add new items and remove them. It provides an overview with charts and data collection, and a system page with multi-language and light/dark theme.The website also provides a kanban board page where you can create a new book and move it along three columns: new, active, and complete. When a book is marked as complete, it is moved to the reference table.

#### `Storage`

The storage section contains two tabs:

##### BOOKS TAB

This tab contains a table containing only books read.
The properties of the books are : title, author, genre, rating, and year read.

Features:

- add new book
- remove existing book
- filter existing books

##### RESOURCES TAB

This tab contains a table containing resources already seen or to be seen in the future
The properties of the resources are : title, link, description, tag.

Features:

- add new resource
- remove existing resource

#### `Boards`

The board section is a camban board for books.

The board section is a camban board for books, divided into three columns:

- New, represents new books added to the list that have not yet been read. The properties in this case will be, title, author and genre. It is not possible to add a grade or year of reading because it is an unread book.
- Active, are the books that are being read right now
- Complete, here you can find the finished books

Features

- add new book which will automatically be inserted into the new column
- each book contains a button with three actions: edit, to modify the book data; delete, to remove the book; save, to save the book to the book table in the storage section. The save button is enabled only when the book is in the complete column, in which case you will also be required to enter a rating and reading date.

#### `Settings`

The setting menu contains user and system data.

##### SYSTEM DATA

- possibility of changing the language between Italian, English and Spanish
- change theme between light and dark mode

##### USER SETTINGS (IN DEVELOPMENT)

#### Live project

https://storage-dun.vercel.app/

## Database Reference

#### Book model

|   Property   |  Type  | Description                                                                                     |
| :----------: | :----: | :---------------------------------------------------------------------------------------------- |
|      id      | string | The id of the book (primary key), compose by adding the character "\_" on the title empy spaces |
|    title     | string | Title of the book                                                                               |
|    genre     | string | Genre of the book (only one, choosing, selectable from those listed)                            |
|    rating    | number | The book rating                                                                                 |
| reading year | string | The reading year of the book                                                                    |

#### Resource model

|  Property   |  Type  | Description                                                                                         |
| :---------: | :----: | :-------------------------------------------------------------------------------------------------- |
|     id      | string | The id of the resource (primary key), compose by adding the character "\_" on the title empy spaces |
|    title    | string | Title of the resource                                                                               |
|    link     | string | Link to access the resource                                                                         |
| description | string | Description of the resource                                                                         |
|     tag     | string | The tag to which the resource belongs (free choice)                                                 |

## Folder structure

```
storage/
  node_modules
  public/
    fonts/
    locales/
  src/
    components/
    controller/
    date/
    models/
    router/
    store/
    style/
    theme/
  README.md
  tailwind.config.js
  tsconfig.json
```

#### `Components`

The components folder contain every single component of the entire application. This folder is also divided in:

```
components/
  core/
  feature/
  pages/
  shared/
```

Where core, contains all the components always visible (like the sidebar), feature contains the components used per page, pages are the entry point of every section and shared contains all the components used on the entire application (like buttons)

#### `Controller`

Api folder that contains all the logics.

#### `Date`

Contains the local data

#### `Models`

Keeps all the interface files.

#### `Router`

Application routing system

#### `Store`

Global states that are stored and can be easily used throughout the application.

#### `Style`

This folder contains the css files where is present the global.css.

#### `Theme`

This folder is for the theming of the entire application.

## Used Technologies

This app is made by React v18.2 with TypeScript.

`State managment`

- Redux

`Routing`

- React router

`Database`

- Firebase

`Style`

- Mui
- Tailwind css

`Chart`

- Echarts

`Language system`

- i18next
