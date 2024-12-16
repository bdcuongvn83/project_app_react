# project_app_react
# PROJECT MANAGEMENT
Personal Project: Product Management System
Description: A simple product management application with basic functionalities such as adding, deleting, and editing products stored in memory (without persisting to a database). 
The project is implemented entirely using React.
## Features:
Routing and State Management:

## Navigate between routes/pages.
Pass data via state when navigating between pages.

## React Hooks:

Use useState, useEffect, useNavigate, useReducer, and useLocation for state management and navigation.
## Form Handling:

Use a registration form on the input screen.
### Implement form validation upon form submission.

## Styling:

Simple CSS styling for the input screen.
## Technologies Used:
React: Core framework.
React-router-dom: For routing, navigation, and state management between pages.

Reference video:
https://github.com/user-attachments/assets/b23dfab2-9207-455f-9c87-5d331f0138a9

## 1. Iniital page: HomePage
![image](https://github.com/user-attachments/assets/7199834f-7dee-49dc-843d-fc175ec48268)

## 2. click navilink page: Product
![image](https://github.com/user-attachments/assets/6e5552a7-9373-4087-b363-a712b9b05d76)

## 3. click Edit button to modify Product
![image](https://github.com/user-attachments/assets/f3670071-d438-48d1-9bda-49fa57ed1da9)

## 4. Input value to change product name, and price, after that click Save button.
![image](https://github.com/user-attachments/assets/2c710244-0648-4fbe-ac84-10e9318d73d0)

## 5. Click register button to create new data
## 5.1 Initial register page 
![image](https://github.com/user-attachments/assets/facc633f-7627-4060-922c-13855bc4b892)
## 5.2 Input new data, then click register button. 

![image](https://github.com/user-attachments/assets/daf435d7-f92c-4ccc-a466-0a3aa2c8220e)

## 5.3 Submit form, handle to Update data to memory sucess, and navigate to Product List
![image](https://github.com/user-attachments/assets/f9491200-6fd0-45a1-af82-894397076945)
## 5.4 In Product List page show new data that is registered success from 5.3

![image](https://github.com/user-attachments/assets/9460c17a-992d-4b13-b783-2e06fc1a202d)

5.5 validate error in case of register page when not fill in required items as product Name, price.
![image](https://github.com/user-attachments/assets/6caf0ce1-4d32-4b3a-8d42-b78f331ed05a)
![image](https://github.com/user-attachments/assets/e5b79e61-48bb-43f9-bf7e-04c6c9f99b9d)

![image](https://github.com/user-attachments/assets/d58b73e2-1502-4a1d-a21e-c186e1ee8bc7)

# HOW TO IMPLEMENT THIS PROJECT
-File app.js and source in folder Product (4 files)
![image](https://github.com/user-attachments/assets/b738a2d8-a360-474d-aee9-f1cced7ceccc)

## Page ProductAppContext : including list data product page, and button Register Product.
-![image](https://github.com/user-attachments/assets/c5bd0c54-d23a-413f-81c2-2db29d9ff0aa)

-Navigate from List page to New Data Page
-Initial list data has 3 records.
-UseContext for passing products list,ReducerHandler from main page (ProductAppContext) to List ProductListContext page.
by using ProductsContext.Provider, ProductsDispatchContex.
-Receive data from state when comeback from Register Product Page

**Note**: not pass UseContext products, and ReducerHandler when navigate to another page such as register Page.
When need to pass data to another page when navigate, we use useNavigate with state.
ex: navigate('/ProductAdd', {
                state: { products } // Pass dispatch for state updates
              })
![image](https://github.com/user-attachments/assets/784dc774-d554-4542-a4ea-5421ae48d46c)

## Page ProductAddContext register product:
-using form data contain all of input items on screen.
-using formErrors contain all errors items on screen.
-When onchange: validate items to show error according logic check such as check required.
-when click register button, check page valid, then useNavigate back to List page, and pass State with new data listpro
-use useEffect to synchronize for replace products that got from stage(case of comeback from Register Page)
![image](https://github.com/user-attachments/assets/89090bf6-94ed-4d56-96a8-3156f08b3222)

![image](https://github.com/user-attachments/assets/ad16f45b-78d1-4475-8829-5e9d3843a256)
![image](https://github.com/user-attachments/assets/0e0258f8-b4ef-45a5-9d19-05a8fdea74bd)

## Page ProductListContext : containing data product list.
-Receive product list data from useContext (pass data from Parent(ProductAppContext) to List page
-Receive reducer handler to process UJpdate/Delete records from Parent (ProductAppContext) 
![image](https://github.com/user-attachments/assets/8a3e4479-275c-4d15-b44b-6e428a7335d2)

## Page ProductsContext: export const ProductsContext, ProductsDispatchContext to share common logic
![image](https://github.com/user-attachments/assets/ae65314b-58ed-41fa-97f4-553936578cce)










