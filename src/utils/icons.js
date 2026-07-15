import {
  IoGlobeOutline,
  IoSchoolOutline,
  IoDocumentTextOutline,
  IoWalletOutline,
  IoAirplaneOutline,
  IoHomeOutline,
  IoShieldCheckmarkOutline,
  IoLocateOutline,
} from 'react-icons/io5';
import { HiOutlineAcademicCap } from 'react-icons/hi2';
import { MdOutlineTrackChanges } from 'react-icons/md';

const iconMap = {
  target: MdOutlineTrackChanges,
  globe: IoGlobeOutline,
  graduation: HiOutlineAcademicCap,
  document: IoDocumentTextOutline,
  bank: IoWalletOutline,
  passport: IoShieldCheckmarkOutline,
  home: IoHomeOutline,
  plane: IoAirplaneOutline,
  trophy: IoSchoolOutline,
  shield: IoShieldCheckmarkOutline,
  headset: IoLocateOutline,
  calendar: IoDocumentTextOutline,
  location: IoLocateOutline,
  university: HiOutlineAcademicCap,
};

export const getServiceIcon = (name) => iconMap[name] || IoGlobeOutline;

export default iconMap;
