import title_img from "../../../assets/images/title.png";
import left_gift_box_img from "../../../assets/images/left-gift-box.png";
import right_gift_box_img from "../../../assets/images/right-gift-box.png";
import MainTabsComponent from "../../../components/main_tabs";
import styles from "./style.module.css";
import { Player } from "@lottiefiles/react-lottie-player";
import HeaderComponent from "../../../components/header";
import PCItemsComponent from "../../../components/items/pc";
import { createRef, Fragment, useRef } from "react";
import { Link } from "react-router-dom";
import { R2_BUCKET_URL } from "../../../utils/config";
import Draggable from "react-draggable";
import { buildFileUrl } from "../../../utils/functions";

const backgroundLottie = "https://pub-aaea1466aec5487293102caebb4f8a3c.r2.dev/lotties/background.json";

export default function PCPage({ links, gifs }) {

  const gifsRef = useRef([]);

  const getGifRef = (index) => {
    if (!gifsRef.current[index]) {
      gifsRef.current[index] = createRef();
    }

    return gifsRef.current[index];
  };

  return (
    <>
      <HeaderComponent
        links={links}
      />
      <div className="position-relative">
        <Player
          autoplay
          loop
          src={backgroundLottie}
          className={`${styles.background}`}
        />
        <div className="position-absolute start-50 top-0 translate-middle-x overflow-hidden" style={{ width: 1568, height: 'calc(100vh - 71px)' }}>
          <div className={`position-absolute start-0 ${styles.leftGiftBox}`}>
            <img src={left_gift_box_img} alt="left_gift_box_img" className={`${styles.leftGiftBox}`} />
          </div>
          <div className={`position-absolute ${styles.rightGiftBox}`}>
            <img src={right_gift_box_img} alt="right_gift_box_img" className={`${styles.rightGiftBox}`} />
          </div>
        </div>
        <div className={`h-100 container position-absolute start-50 top-0 translate-middle-x z-3 d-flex flex-column`} style={{ minWidth: 1320 }}>
          <div className="col-6 mx-auto text-center pt-4">
            <img className="w-100" src={title_img} alt="title" />
          </div>

          <MainTabsComponent
            links={links}
          />

          {/* comment to update */}

          {/* <AppDownloadComponent
            links={links}
          /> */}

          <PCItemsComponent
            links={links}
          />
        </div>
      </div>

      {
        gifs.length > 0 && gifs.map((item, index) => {
          const gifRef = getGifRef(index);

          return (
            <Fragment key={index}>
              {
                item.file && (
                  <Draggable
                    axis="both"
                    defaultPosition={{ x: 0, y: 0 }}
                    nodeRef={gifRef}
                  >

                    <div
                      ref={gifRef}
                      style={{
                        position: 'fixed',
                        right: `${item.xPosition}${item.xPositionUnit}`,
                        bottom: `${item.yPosition}${item.yPositionUnit}`,
                        zIndex: 9999,
                      }}
                    >
                      <Link
                        to={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onDragStart={(event) => event.preventDefault()}
                      >
                        <img
                          className={`object-fit-cover`}
                          style={{ width: item.width ? `${item.width}${item.widthUnit}` : 200, height: item.height ? `${item.height}${item.heightUnit}` : 'auto' }}
                          src={buildFileUrl(R2_BUCKET_URL, item.file?.path)}
                          alt={item.title}
                          onDragStart={(event) => event.preventDefault()}
                        />
                      </Link>
                      <div
                        className={`position-absolute top-0 start-100 translate-middle cursor-pointer ${styles.closeButton}`}
                        onClick={() => {
                          if (gifRef.current) {
                            gifRef.current.style.display = 'none';
                          }
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"></path>
                        </svg>
                      </div>
                    </div>
                  </Draggable>

                )
              }
            </Fragment>
          )
        })
      }
    </>
  )
}