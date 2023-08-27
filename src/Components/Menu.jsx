import React from 'react'

const Menu = ({menuItems}) => {
  return (
    <>
    <div className='my-5'>
        <div className="row">
        {menuItems.map((item) => {
          return (
            <div key={item.id} className="col-md-6 col-lg-4 col-sm-12">
                  <div className="card m-2" style={{ Width: "540px" , Height: "420px" }}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={item.image_Url}
                          className="img-fluid rounded-start"
                          alt="food menu app"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{item.title}</h5>
                          <p className="card-text">{item.description}</p>
                          <p className="card-text">
                            <small id='price' className="text-body-secondary">
                              Price : {item.price} EGP{" "}
                            </small>
                          </p>
                          <div className="d-flex buttonCard">
                            <button className='w-50'>Buy</button>
                            <button className='w-50'>Wishlist</button>
                          </div>
                          <p className="card-text">
                            <small className="text-body-secondary">
                              Last updated {Math.floor(Math.random()*15)} mins ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            
          );
        })}
        </div>
       
    </div>
    
    </>
  )
}

export default Menu