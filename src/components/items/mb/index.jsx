import nhap_code_item_img from "../../../assets/images/nhap-code-item.gif";
import livestream_item_img from "../../../assets/images/livestream-item.gif";
import ma_du_thuong_item_img from "../../../assets/images/ma-du-thuong-item.gif";
import qua_tang_item_img from "../../../assets/images/qua-tang-item.gif";
import video_item_img from "../../../assets/images/video-item.gif";
import thien_nguyen_item_img from "../../../assets/images/thien-nguyen-item.gif";
import circle_lights_img from "../../../assets/images/circle-lights.gif";
import items_bg_img from "../../../assets/images/items-bg-mb.png";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { getLinkByKey } from "../../../utils/functions";
import { LINK_KEYS } from "../../../utils/config";
import { isMobile } from "react-device-detect";


export default function MBItemsComponent({ links }) {
  return (
    <div className="position-relative mt-3">
      <img className="w-100" src={items_bg_img} alt="items_bg_img" />
      <div className="w-100 h-100 position-absolute top-0 start-0 d-flex flex-wrap justify-content-center mt-md-4 mt-3 pb-4">
        <Link to={getLinkByKey(links, LINK_KEYS.NHAP_CODE, isMobile)} className={`col-4 px-3`}>
          <div className={`position-relative`}>
            <img className="w-100" src={circle_lights_img} alt="circle_lights_img" />
            <div className="w-100 h-100 position-absolute start-0 top-0 d-flex justify-content-center align-items-center">
              <img className="col-11" src={nhap_code_item_img} alt="nhap_code_item_img" />
            </div>
          </div>
          <div className={`text-center text-white ${styles.itemText}`}>
            Nhập CODE
          </div>
        </Link>
        <Link to={getLinkByKey(links, LINK_KEYS.LIVESTREAM, isMobile)} className={`col-4 px-3`}>
          <div className={`position-relative`}>
            <img className="w-100" src={circle_lights_img} alt="circle_lights_img" />
            <div className="w-100 h-100 position-absolute start-0 top-0 d-flex justify-content-center align-items-center">
              <img className="col-11" src={livestream_item_img} alt="livestream_item_img" />
            </div>
          </div>
          <div className={`text-center text-white ${styles.itemText}`}>
            Livestream
          </div>
        </Link>
        <Link to={getLinkByKey(links, LINK_KEYS.MA_DU_THUONG, isMobile)} className={`col-4 px-3`}>
          <div className={`position-relative`}>
            <img className="w-100" src={circle_lights_img} alt="circle_lights_img" />
            <div className="w-100 h-100 position-absolute start-0 top-0 d-flex justify-content-center align-items-center">
              <img className="col-11" src={ma_du_thuong_item_img} alt="ma_du_thuong_item_img" />
            </div>
          </div>
          <div className={`text-center text-white ${styles.itemText}`}>
            Mã dự thưởng
          </div>
        </Link>
        <Link to={getLinkByKey(links, LINK_KEYS.QUA_TANG, isMobile)} className={`col-4 px-3`}>
          <div className={`position-relative`}>
            <img className="w-100" src={circle_lights_img} alt="circle_lights_img" />
            <div className="w-100 h-100 position-absolute start-0 top-0 d-flex justify-content-center align-items-center">
              <img className="col-11" src={qua_tang_item_img} alt="qua_tang_item_img" />
            </div>
          </div>
          <div className={`text-center text-white ${styles.itemText}`}>
            Quà tặng
          </div>
        </Link>
        <Link to={getLinkByKey(links, LINK_KEYS.VIDEO, isMobile)} className={`col-4 px-3`}>
          <div className={`position-relative`}>
            <img className="w-100" src={circle_lights_img} alt="circle_lights_img" />
            <div className="w-100 h-100 position-absolute start-0 top-0 d-flex justify-content-center align-items-center">
              <img className="col-11" src={video_item_img} alt="video_item_img" />
            </div>
          </div>
          <div className={`text-center text-white ${styles.itemText}`}>
            Video
          </div>
        </Link>
        <Link to={getLinkByKey(links, LINK_KEYS.THIEN_NGUYEN, isMobile)} className={`col-4 px-3`}>
          <div className={`position-relative`}>
            <img className="w-100" src={circle_lights_img} alt="circle_lights_img" />
            <div className="w-100 h-100 position-absolute start-0 top-0 d-flex justify-content-center align-items-center">
              <img className="col-11" src={thien_nguyen_item_img} alt="thien_nguyen_item_img" />
            </div>
          </div>
          <div className={`text-center text-white ${styles.itemText}`}>
            Thiện nguyện
          </div>
        </Link>
      </div>
    </div>
  )
}