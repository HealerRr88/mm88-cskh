export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:1234/api';

export const LINK_DEVICES = {
  ALL: 0,
  DESKTOP: 1,
  MOBILE: 2
}

export const LINK_KEYS = {
  THIEN_NGUYEN: 'thien-nguyen',
  VIDEO: 'video',
  QUA_TANG: 'qua-tang',
  MA_DU_THUONG: 'ma-du-thuong',
  LIVESTREAM: 'livestream',
  NHAP_CODE: 'nhap-code',
  LINK_TOC_DO_CAO: 'link-toc-do-cao',
  KENH_TIKTOK: 'kenh-tiktok',
  KENH_TELEGRAM: 'kenh-telegram',
  FANPAGE: 'fanpage',
  NEN_TANG_CONG_DONG: 'nen-tang-cong-dong',
  NEN_TANG_LIVESTREAM: 'nen-tang-livestream',
  TELEGRAM_KHIEU_NAI: 'telegram-khieu-nai',
  THAY_DOI_THONG_TIN: 'thay-doi-thong-tin',
  QUA_TANG_TRI_AN: 'qua-tang-tri-an',
  HOTLINE: 'hotline',
  GOP_Y_NHAN_THUONG: 'gop-y-nhan-thuong',
  HOP_TAC_DAI_LY: 'hop-tac-dai-ly',
  CAM_NANG_HUONG_DAN: 'cam-nang-huong-dan',
  TRUNG_TAM_KHUYEN_MAI: 'trung-tam-khuyen-mai',
  HO_TRO_RUT_TIEN: 'ho-tro-rut-tien',
  HO_TRO_NAP_TIEN: 'ho-tro-nap-tien',
  SUA_DOI_THONG_TIN: 'sua-doi-thong-tin',
  KHUYEN_MAI_VA_SAN_PHAM: 'khuyen-mai-va-san-pham',
  TRANG_CHU: 'trang-chu',
  DANG_KY: 'dang-ky',
  DANG_NHAP: 'dang-nhap',
  TAI_APP_ANDROID: 'tai-app-android',
  TAI_APP_IOS: 'tai-app-ios',
}

export const DEFAULT_LINKS = [
  {
    key: LINK_KEYS.THIEN_NGUYEN,
    url: '#',
    device: LINK_DEVICES.ALL
  },
  {
    key: LINK_KEYS.VIDEO,
    url: '#',
    device: LINK_DEVICES.ALL
  },
  {
    key: LINK_KEYS.QUA_TANG,
    url: '#',
    device: LINK_DEVICES.ALL
  },
  {
    key: LINK_KEYS.MA_DU_THUONG,
    url: '#',
    device: LINK_DEVICES.ALL
  },
  {
    key: LINK_KEYS.LIVESTREAM,
    url: 'https://live.kjc20250.com/',
    device: LINK_DEVICES.ALL
  },
  {
    key: LINK_KEYS.NHAP_CODE,
    url: '#',
    device: LINK_DEVICES.ALL
  },
  {
    key: LINK_KEYS.LINK_TOC_DO_CAO,
    url: 'https://pc-mm88-link.rr88tino.workers.dev/',
    device: LINK_DEVICES.ALL
  },
  {
    key: LINK_KEYS.KENH_TIKTOK,
    url: '#',
    device: LINK_DEVICES.ALL
  },
  {
    key: LINK_KEYS.KENH_TELEGRAM,
    url: 'https://t.me/addlist/VXEZ29nUUvUxZDY9',
    device: LINK_DEVICES.ALL
  },
  {
    key: LINK_KEYS.FANPAGE,
    url: 'https://www.facebook.com/congdongmm88vn/',
    device: LINK_DEVICES.ALL
  },
  {
    key: LINK_KEYS.NEN_TANG_CONG_DONG,
    url: '#',
    device: LINK_DEVICES.ALL
  },
  {
    key: LINK_KEYS.NEN_TANG_LIVESTREAM,
    url: 'https://live.kjc20250.com/',
    device: LINK_DEVICES.ALL
  },
  {
    key: LINK_KEYS.TELEGRAM_KHIEU_NAI,
    url: 'https://t.me/Khieunaimm888',
    device: LINK_DEVICES.ALL
  },
  {
    key: LINK_KEYS.THAY_DOI_THONG_TIN,
    url: '#',
    device: LINK_DEVICES.ALL
  },
  {
    key: LINK_KEYS.QUA_TANG_TRI_AN,
    url: 'https://mm88gift.com/',
    device: LINK_DEVICES.ALL
  },
  {
    key: LINK_KEYS.HOTLINE,
    url: '0938586333',
    device: LINK_DEVICES.ALL
  },
  {
    key: LINK_KEYS.GOP_Y_NHAN_THUONG,
    url: '#',
    device: LINK_DEVICES.ALL
  },
  {
    key: LINK_KEYS.HOP_TAC_DAI_LY,
    url: 'https://t.me/CSDL1MM88',
    device: LINK_DEVICES.ALL
  },
  {
    key: LINK_KEYS.CAM_NANG_HUONG_DAN,
    url: '#',
    device: LINK_DEVICES.ALL
  },
  {
    key: LINK_KEYS.TRUNG_TAM_KHUYEN_MAI,
    url: 'https://mm88ttkm.com/',
    device: LINK_DEVICES.ALL
  },
  {
    key: LINK_KEYS.HO_TRO_RUT_TIEN,
    url: '#',
    device: LINK_DEVICES.ALL
  },
  {
    key: LINK_KEYS.HO_TRO_NAP_TIEN,
    url: '#',
    device: LINK_DEVICES.ALL
  },
  {
    key: LINK_KEYS.SUA_DOI_THONG_TIN,
    url: 'https://mm88support.com/',
    device: LINK_DEVICES.ALL
  },
  {
    key: LINK_KEYS.KHUYEN_MAI_VA_SAN_PHAM,
    url: '#',
    device: LINK_DEVICES.ALL
  },
  {
    key: LINK_KEYS.DANG_NHAP,
    url: '#',
    device: LINK_DEVICES.ALL
  },
  {
    key: LINK_KEYS.DANG_KY,
    url: '#',
    device: LINK_DEVICES.ALL
  },
  {
    key: LINK_KEYS.TRANG_CHU,
    url: 'https://pc-mm88-link.rr88tino.workers.dev/',
    device: LINK_DEVICES.ALL
  },
  {
    key: LINK_KEYS.TRANG_CHU,
    url: 'https://pc-mm88-link.rr88tino.workers.dev/',
    device: LINK_DEVICES.DESKTOP
  },
  {
    key: LINK_KEYS.TRANG_CHU,
    url: 'https://mb-mm88-link.rr88tino.workers.dev/',
    device: LINK_DEVICES.MOBILE
  },
  {
    key: LINK_KEYS.TAI_APP_ANDROID,
    url: 'https://mm88-download-app.pages.dev/',
    device: LINK_DEVICES.ALL
  },
  {
    key: LINK_KEYS.TAI_APP_IOS,
    url: 'https://mm88-download-app.pages.dev/',
    device: LINK_DEVICES.ALL
  }
]