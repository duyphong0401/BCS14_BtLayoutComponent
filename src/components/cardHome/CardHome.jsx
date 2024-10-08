import React from 'react'

const CardHome = () => {
  return (
    <>
      <div className='row'>
        <div className="col-3 ">
          <div className="card" >
            <img style={{ width: '100%' }} src="../../../public/img/black-car.jpg" className="card-img-top" alt="..." />
            <div className="card-body text-center ">
              <h5 className="card-title ">Black Car</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p></div>
              <div className="card-footer d-flex justify-content-center">
              <a style={{ alignItems: 'center' }} href="#" className="btn btn-primary ">Find Out More</a>
              </div>
            
          </div>

        </div>
        <div className="col-3 ">
          <div className="card" >
            <img style={{ width: '100%' }} src="../../../public/img/red-car.jpg" className="card-img-top" alt="..." />
            <div className="card-body text-center ">
              <h5 className="card-title ">Red Car</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p></div>
              <div className="card-footer d-flex justify-content-center">
              <a style={{ alignItems: 'center' }} href="#" className="btn btn-primary ">Find Out More</a>
              </div>
            
          </div>

        </div>
        <div className="col-3 ">
          <div className="card" >
            <img style={{ width: '100%' }} src="../../../public/img/silver-car.jpg" className="card-img-top" alt="..." />
            <div className="card-body text-center ">
              <h5 className="card-title ">Silver Car</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p></div>
              <div className="card-footer d-flex justify-content-center">
              <a style={{ alignItems: 'center' }} href="#" className="btn btn-primary ">Find Out More</a>
              </div>
            
          </div>

        </div>
        <div className="col-3 ">
          <div className="card" >
            <img style={{ width: '100%' }} src="../../../public/img/steel-car.jpg" className="card-img-top" alt="..." />
            <div className="card-body text-center ">
              <h5 className="card-title ">Steel Car</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p></div>
              <div className="card-footer d-flex justify-content-center">
              <a style={{ alignItems: 'center' }} href="#" className="btn btn-primary ">Find Out More</a>
              </div>
            
          </div>

        </div>

      </div>
    </>
  )
}

export default CardHome
