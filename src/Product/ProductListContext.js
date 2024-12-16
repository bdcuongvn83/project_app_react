import { useContext } from 'react';
import { ProductsDispatchContext, ProductsContext } from './ProductsContext'
import numeral from 'numeral';

export default function ProductListContext() {
  const dispatch = useContext(ProductsDispatchContext);
  const products = useContext(ProductsContext);

  if (products == null) {
    throw new Error('TaskAddContext must be used within a TaskAppContext');
  }

  return (
    <>
      <div className='content_list'>
        <table border="1" className='listTable'>
          <thead>
            <tr>
              <th style={{ width: '20px' }}>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th style={{ width: '120px' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((task, index) => (
              <tr key={index}>
                <td style={{ width: '20px' }}><input type='checkbox'></input></td>
                <td>{task.done ? <div className='list_item item_left'>{task.text}</div> : (
                  <input className='input-fit-column' id={`task_` + task.id} type='text' value={task.text} onChange={(e) => {
                    const updatedTask = { ...task, text: e.target.value };  // Chỉ thay đổi task hiện tại

                    dispatch({
                      type: 'changed',
                      task: { ...task, text: e.target.value },
                    });

                  }} />
                )}
                </td>
                <td>{task.done ? <div className='list_item item_right'>{numeral(task.price).format('$0,0.00')}</div> : (
                  <input className='input-fit-column' id={`task_` + task.id} type='text' value={task.price} onChange={(e) => {
                    const updatedTask = { ...task, price: e.target.value };  // Chỉ thay đổi task hiện tại

                    dispatch({
                      type: 'changed',
                      task: { ...task, price: e.target.value },
                    });

                  }} />
                )}
                </td>

                <td>
                  <button onClick={() =>
                    dispatch({
                      type: 'changed',
                      task: { ...task, done: !task.done },
                    })
                  }
                  > {task.done ? 'Edit' : 'Save'}</button>
                  &nbsp; <button onClick={() =>
                    dispatch({
                      type: 'deleted',
                      id: task.id,
                    })
                  }> Delete </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>

  );
}

