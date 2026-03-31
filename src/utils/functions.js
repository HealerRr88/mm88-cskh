import { LINK_DEVICES, DEFAULT_LINKS } from "./config";

export function getLinkByKey(links, key, isMobile) {
  if (!links || !key) return '#';

  const mobilebLink = links.find(item => item.key === key && item.device === LINK_DEVICES.MOBILE);
  const desktopLink = links.find(item => item.key === key && item.device === LINK_DEVICES.DESKTOP);
  const allLink = links.find(item => item.key === key && item.device === LINK_DEVICES.ALL);

  const mobileDefaultLink = DEFAULT_LINKS.find(item => item.key === key && item.device === LINK_DEVICES.MOBILE);
  const desktopDefaultLink = DEFAULT_LINKS.find(item => item.key === key && item.device === LINK_DEVICES.DESKTOP);
  const allDefaultLink = DEFAULT_LINKS.find(item => item.key === key && item.device === LINK_DEVICES.ALL);

  if (isMobile && mobilebLink) {
    return mobilebLink.url;
  }
  else if (!isMobile && desktopLink) {
    return desktopLink.url;
  }
  else if (allLink) {
    return allLink.url;
  }
  // Trường hợp không get được link từ API thì sẽ lấy link mặc định từ DEFAULT_LINKS
  else {
    if (isMobile && mobileDefaultLink) {
      return mobileDefaultLink.url;
    }
    else if (!isMobile && desktopDefaultLink) {
      return desktopDefaultLink.url;
    }
    else if (allDefaultLink) {
      return allDefaultLink.url;
    }
    else {
      return '#';
    }
  }
}