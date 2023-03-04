import React from 'react'
import "./main.css"
import Section04 from './section04/section04';

const Main = () => {

  const section03List = [
    "shoes",
    "sneakers",
    "running shoes",
    "tracksuits",
    "slides",
    "jacket"
  ];

  const discountOfferTrigger = () => {
    document.querySelector('#discount10').classList.add("d-none");
  }

  const addButtonClass = (id) => {
    document.querySelector("#" + id).classList.toggle('main-btn-onClick');
    document.querySelector("#" + id + " .border-button").classList.toggle('border-button-onClick');

    setTimeout(() => {
      document.querySelector("#" + id).classList.toggle('main-btn-onClick');
      document.querySelector("#" + id + " .border-button").classList.toggle('border-button-onClick');

    }, 150);
  }




  return (
    <div>
      <div id='discount10' className='d-flex justify-content-center align-items-center pe-5 p-md-2' style={{ backgroundColor: "#007bc6" }}>
        <div className='text-white text-center ps-4 pe-2 py-2 ms-3'>

          UP TO 60% OFF. MEMBERS GET EXTRA 10% OFF
          <a href='' className='text-decoration-underline px-2 fs-6 text-white'>SHOP NOW</a>
        </div>
        <div role='button' className='text-white position-absolute end-0 me-4' onClick={discountOfferTrigger} >
          <i class="fa-solid fa-xmark fs-4"></i>
        </div>
      </div>
      <section className='position-relative'>
        <picture >
          <source media="(min-width: 960px)" srcset="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enIN/Images/IN-SS23-EXTRA-10-HP-MH-IMAGE_tcm209-996851.jpg" />
          <source media="(min-width: 600px)" srcset="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_960,w_960/enIN/Images/IN-SS23-EXTRA-10-HP-MH-IMAGE-T_tcm209-996853.jpg" />
          <source srcset="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_600,w_600/enIN/Images/IN-SS23-EXTRA-10-HP-MH-IMAGE-D_tcm209-996852.jpg" />
          <img width='100%' src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enIN/Images/IN-SS23-EXTRA-10-HP-MH-IMAGE_tcm209-996851.jpg" />
        </picture>
        <div className='button-container pe-md-5'>
          <div className='mb-lg-4 pb-lg-4  me-md-5 pe-md-5'>

            <div className='fs-1 fw-bolder'>
              UP TO 60% OFF
            </div>
            <div className='fs-5 pb-2'>

              EXTRA 10% FOR MEMBERS
            </div>
            <div className=''>
              <a href='/men' className='a-button'>

                <button id='b01' role='button' className='main-btn' onClick={() => addButtonClass("b01")} >

                  SHOP MEN
                  <i class="bi bi-arrow-right fs-4 ms-3"></i>
                  <div className='border-button'>

                  </div>
                </button>
              </a>
              <a href='/women' className='a-button'>

                <button id='b02' role='button' className='main-btn' onClick={() => addButtonClass("b02")}>
                  SHOP WOMEN
                  <i class="bi bi-arrow-right fs-4 ms-3"></i>
                  <div className='border-button'>

                  </div>
                </button>
              </a>
              <a href='/kids' className='a-button'>

                <button id='b03' role='button' className='main-btn' onClick={() => addButtonClass("b03")}>
                  SHOP KIDS
                  <i class="bi bi-arrow-right fs-4 ms-3"></i>
                  <div className='border-button'>

                  </div>
                </button>
              </a>
            </div>

          </div>
        </div>
      </section>
      <section className='position-relative'>
        <picture>
          <source media="(min-width: 960px)" srcset="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enIN/Images/IN-SS23-UB-LIGHT-ROHIT-IMAGE-D_tcm209-996409.jpg" />
          <source media="(min-width: 600px)" srcset="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_960,w_960/enIN/Images/IN-SS23-UB-LIGHT-ROHIT-IMAGE-T_tcm209-996412.jpg" />
          <source srcset="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_600,w_600/enIN/Images/IN-SS23-UB-LIGHT-ROHIT-IMAGE-Mm_tcm209-996410.jpg" />
          <img width='100%' class="high-res-picture___3SJ41 loaded___3ltPt" id="tcm:209-996413" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enIN/Images/IN-SS23-UB-LIGHT-ROHIT-IMAGE-D_tcm209-996409.jpg" decoding="async" loading="lazy" />
        </picture>
        <div className='button-container-section02 pe-md-5'>
          <div className='mb-lg-4 pb-lg-4 me-md-5  pe-md-5'>

            <div className='fs-1 fw-bolder d-inline'>
              EPIC ENERGY. LIGHTEST EVER.
            </div>
            <div className='fs-5 pb-2'>

              Our lightest Ultraboost ever.

            </div>
            <div className=''>
              <a href='/member' className='a-button'>

                <button id='b04' role='button' className='main-btn' onClick={() => addButtonClass("b04")} >

                  MEMBERS EARLY ACCESS
                  <i class="bi bi-arrow-right fs-4 ms-3"></i>
                  <div className='border-button'>

                  </div>
                </button>
              </a>
              <a href='/explore' className='a-button'>

                <button id='b05' role='button' className='main-btn' onClick={() => addButtonClass("b05")}>
                  EXPLORE MORE
                  <i class="bi bi-arrow-right fs-4 ms-3"></i>
                  <div className='border-button'>

                  </div>
                </button>
              </a>
            </div>

          </div>
        </div>
      </section>
      <section className='d-flex justify-content-center'>
        <div className='section03'>
          <div className=' section03-head'>

            Now popular in men's
          </div>
          <div className='section-grid'>
            {section03List.map((each) => {
              return (
                <a href={"/" + each} className='a-button'>

                  <div role='button' className='section03-box'>
                    <h1 className=''>

                      {each}
                    </h1>
                  </div>
                </a>

              )
            })}


          </div>
        </div>

      </section>
      <section className='section04'>
        <Section04 />
      </section>
      <section className='d-flex flex-wrap justify-content-center'>
        <div className='section05'>

          <div className="my-4 fw-bolder mx-3 pe-3" style={{fontSize:"40px",fontWeight:"700"}}>
            WHO ARE YOU SHOPPING FOR?
          </div>
          <div className='section05-grid'>
            <div>
              <picture>
                <source media="(min-width: 960px)" srcset="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/evergreen-homepage-gender-navigation-men-dt_tcm209-761437.jpg" />
                <source media="(min-width: 600px)" srcset="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/evergreen-homepage-gender-navigation-men-tb_tcm209-761432.jpg" />
                <source srcset="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/evergreen-homepage-gender-navigation-men-mb_tcm209-761438.jpg" />
                <img class="high-res-picture___3SJ41 loaded___3ltPt img___zgj1u ps-3" id="tcm:209-761453" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/evergreen-homepage-gender-navigation-men-dt_tcm209-761437.jpg" decoding="async" loading="lazy" />
              </picture>
              <div className='fw-bold fs-5 m-2 ms-3'>
                MEN
              </div>
            </div>
            <div>
              <picture>
                <source media="(min-width: 960px)" srcset="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/womens_1_tcm209-792193.png" />
                <source media="(min-width: 600px)" srcset="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/womens_3_tcm209-792187.png" />
                <source srcset="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/womens_2_tcm209-792186.png" />
                <img class="high-res-picture___3SJ41 loaded___3ltPt img___zgj1" id="tcm:209-761452" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/womens_1_tcm209-792193.png" decoding="async" loading="lazy" />
              </picture>
              <div className='fw-bold fs-5 m-2 ms-3'>
                WOMEN
              </div>
            </div>
            <div>
            <picture>
            <source media="(min-width: 960px)" srcset="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/kids_1_tcm209-792188.png" />
            <source media="(min-width: 600px)" srcset="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/kids_3_tcm209-792189.png" />
            <source srcset="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/kids_2_tcm209-792185.png" />
            <img class="high-res-picture___3SJ41 loaded___3ltPt img___zgj1 pe-3" id="tcm:209-761454" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/enIN/Images/kids_1_tcm209-792188.png" decoding="async" loading="lazy" />
            </picture>
            <div className='fw-bold fs-5 m-2 ms-3'>
                KIDS
              </div>
            </div>

          </div>
        </div>

      </section>
      <div style={{ height: "1000px" }}>

      </div>



    </div>
  )
}

export default Main;
