# MBI Tech Alliance Test

**Please read the instructions carefully before start working.**


### Objective
You are going to create a one-page react application containing a **Table** and a **Graph** visualization of Star Wars Characters taken from https://swapi.dev/api/people.

For the table you may use use the `name`, `height`, `mass`, `hair_color`, and
`skin_color` column. The table shall be paginated, for pagination you can use query params provided like https://swapi.dev/api/people/?page=1,2,3 ...etc. 

The data must be stored so if you revisit the table page that already been visited before, the browser won't re-fetch same data. You may use any kind of method to achieve this.

For the graph you may use `name` label for the `x axis`, `mass` and `height` for `y axis`. The graph shall be in form of **Bar Chart**. The graph will only visualize data on current table page.

The user will be able to **add** and **delete** datas from the table. The button to add shall be placed above the table. Once clicked, the browser will show a modal popup contains a form. The field should be the same as the table header. Once the form submitted, the data will be added to the first row and first page of the table. The data must persist even after the page refreshed. You should not worry if the first page will have more data than the rest. You will also provide a delete button on each table row. Delete button will **only appear** in the row of data that added by user using `add function` that you just made before. The add and delete feature will have nothing to do with data fetching, this feature only works locally.

The layout of the page will be title, table, and graph, each ordered vertically in one page.

You should not worry about the responsiveness, aesthetics, and UI design, but you have to pay attention to the `User Experience` aspect.


### To do
- Fork this repo to your github account, then clone to your local machine, then install all dependencies (`yarn` is recommended).
- Finish the objectives, then push the changes to your forked repo.
- Upon submitting, please write Installation instruction on `README.md` (it's okay to delete the test instructions written here), also please write a list of urls of your best work / portfolio.
- Send the url of your test repo to the hiring team.

### Dos and Don'ts
- You **must** use `React Hook Form` for the `Add` feature 
- You may express your creavity in UI design, UI layout, and/or page responsiveness as long as the main objectives are fulfilled.
- You are allowed to use any plugins or library for state management, css, HTTP Request, or all other needs, except for one thing that will be stated in the next point.
- You are **not allowed** to use any kind of **Component Library** such as `React Bootstrap`, `Reactstrap`, `React Material UI`, etc. All components must be build by yourself. But you may use css library like `Bootstrap`.

### Bonus Points
- Good utilisation of `Hook API` in any kind of form
- Clean, well-documented, and readable code
- Tidy and organized source code file structure
- Code effeciency, *do more with less*
- Unit testing