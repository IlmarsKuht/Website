# Personal Product list website by Ilmārs Kuhtarkis

**docker-compose absolute file paths need to be adjusted and npm installed, afterward in terminal can use the command "docker-compose up" and page will open in Localhost:3000**

**Webpage consists of**
 - **React, SASS for frontend** 
 - **SQL, PHP for backend.**


Front page of the website includes:
  - Products stored in the database (stored on the computer)
  - Products can be added or deleted using mass deleted
  - Product types: 
    - DVD (Size in MB)
    - Book (Weight in KG)
    - Furniture (Dimensions in length, width, height)
 
![webpage_front](https://user-images.githubusercontent.com/115834230/195984609-ec784161-96af-43e5-a547-c52259235964.png)

Product add has:
- Input verification and check for duplicate ID's 
- Errors and solutions on wrong input
- Type Switcher inputs dynamically change depending on type selected.

![Add_Product](https://user-images.githubusercontent.com/115834230/195984615-f5ee2b51-2f49-453b-b669-7c4e946ac303.png)
