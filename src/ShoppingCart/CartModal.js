import React from "react";

export default function CartModal(props) {

  let {cartArrayProps} = props;

  const renderCartItem = (cartArrayProps) =>{
    return cartArrayProps.map((cartItem, index) => {
      return (
        <tr key={index}>
                  <th scope="row">{cartItem.id}</th>
                  <td>{cartItem.name}</td>
                  
                  <td><img src={cartItem.img}  alt=""  style={{width:'20%'}}/></td>
                  <td>{cartItem.quantity}</td>
                  
                  <td>{cartItem.price}</td>
                  <td>{(cartItem.price * cartItem.quantity).toLocaleString()}</td>
                  <button type="button" class=" btn-danger" onClick={() =>props.removeProduct((cartItem.id))}>Delete</button>
                </tr>
      )

    });
  }
  return (
    <div>
      <div>
        {/* Modal */}
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">

              <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">name</th>
                  <th scope="col">Image</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {renderCartItem(cartArrayProps)}
              </tbody>
            </table>




              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
