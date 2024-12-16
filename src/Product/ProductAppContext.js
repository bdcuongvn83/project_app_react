import { useReducer, useEffect } from 'react';
import ProductListContext from './ProductListContext.js';
import { ProductsContext, ProductsDispatchContext } from './ProductsContext.js';
import { useNavigate, useLocation } from 'react-router-dom';

export default function ProductAppContext() {
  const [products, dispatch] = useReducer(tasksReducer, initialTasks);
  const navigate = useNavigate();

  const location = useLocation();
  const productFromState = location.state;

  // Synchronize reducer state with location.state when available 
  // (when page register change state after register success)
  useEffect(() => {
    if (productFromState) {
      dispatch({ type: 'replace', payload: productFromState });

    }
  }, [productFromState]);

  function tasksReducer(products, action) {

    switch (action.type) {

      case 'changed': {
        const updateList = products.map((t) => {
          if (t.id === action.task.id) {
            return action.task;
          } else {
            return t;
          }
        });
      
        return updateList;
      }
      case 'deleted': {
        return products.filter((t) => t.id !== action.id);
      }
      case 'replace': {
        const updateList = action.payload;
       
        return updateList;
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }


  return (

    <ProductsContext.Provider value={products}>
      <ProductsDispatchContext.Provider value={dispatch}>
        <>
          <h1>PRODUCT MANAGEMENT</h1>
          <div className='contain_input'>
            <button className='button register' onClick={() => {

              navigate('/ProductAdd', {
                state: { products } // Pass dispatch for state updates
              })
            }}> Register Product</button>
          </div>
          <ProductListContext></ProductListContext>

        </>
      </ProductsDispatchContext.Provider>
    </ProductsContext.Provider>

  );
}



let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', price: 1000, done: true },
  { id: 1, text: 'Watch a puppet show', price: 2000, done: true },
  { id: 2, text: 'Lennon Wall pic', price: 500, done: true },
];
