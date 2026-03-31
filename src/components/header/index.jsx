import styles from "./style.module.css";
import logo_img from "../../assets/images/logo.png";
import register_btn_img from "../../assets/images/register-btn.png";
import login_btn_img from "../../assets/images/login-btn.png";
import { Link } from "react-router-dom";
import { getLinkByKey } from "../../utils/functions";
import { LINK_KEYS } from "../../utils/config";
import { isMobile } from "react-device-detect";

export default function HeaderComponent({ links }) {
  return (
    <div className={`py-1 bg-white sticky-top ${styles.header}`}>
      <div className={`col-md-5 col-12 mx-auto px-md-0 px-2 d-flex justify-content-between align-items-center ${styles.headerInner}`}>
        <div className={`${styles.logo} flex-shrink-0`}>
          <Link to={getLinkByKey(links, LINK_KEYS.TRANG_CHU, isMobile)}>
            <img className="w-100" src={logo_img} alt="logo" />
          </Link>
        </div>
        <div className="col-md-auto col-6 d-flex pt-1">
          <Link to={getLinkByKey(links, LINK_KEYS.DANG_KY, isMobile)} className={`${styles.headerBtn}`}>
            <img className="w-100" src={register_btn_img} alt="register" />
          </Link>
          <Link to={getLinkByKey(links, LINK_KEYS.DANG_NHAP, isMobile)} className={`${styles.headerBtn}`}>
            <img className="w-100" src={login_btn_img} alt="login" />
          </Link>
        </div>
      </div>
    </div >
  )
}