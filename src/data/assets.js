import awards1 from '../assets/awards/awards_1.jpeg';
import awards2 from '../assets/awards/awards_2.jpeg';
import awards3 from '../assets/awards/awards_3.jpeg';
import awards4 from '../assets/awards/awards_4.jpeg';
import certificate1 from '../assets/certificates/certificate_1.jpg';
import certificate2 from '../assets/certificates/certificate_2.jpg';
import certificate3 from '../assets/certificates/certificate_3.jpg';
import office1 from '../assets/office/office_1.jpeg';
import office2 from '../assets/office/office_2.jpeg';
import office3 from '../assets/office/office_3.jpeg';
import office4 from '../assets/office/office_4.jpeg';
import office5 from '../assets/office/office_5.jpeg';
import logo from '../assets/apj_logo.png';

import studentDarshana from '../assets/testimonials/student_Darshana.jpeg';
import studentMalindu from '../assets/testimonials/student_Malindu.jpeg';
import studentMithun from '../assets/testimonials/student_Mithun.jpeg';
import studentNipuni from '../assets/testimonials/student_Nipuni.jpeg';
import studentSachith from '../assets/testimonials/student_Sachith.jpeg';
import studentUmaya from '../assets/testimonials/student_Umaya.jpeg';

import youtube1 from '../assets/mediaPresence/youtube_1.jpeg';
import youtube2 from '../assets/mediaPresence/youtube_2.jpeg';
import youtube3 from '../assets/mediaPresence/youtube_3.jpeg';
import youtube4 from '../assets/mediaPresence/youtube_4.jpg';

export const brandLogo = logo;

const mediaThumbnails = {
  youtube_1: youtube1,
  youtube_2: youtube2,
  youtube_3: youtube3,
  youtube_4: youtube4,
};

export const studentPhotos = {
  darshana: studentDarshana,
  malindu: studentMalindu,
  mithun: studentMithun,
  nipuni: studentNipuni,
  sachith: studentSachith,
  umaya: studentUmaya,
};

export const awardsGallery = [
  {
    id: 'awards_1',
    src: awards1,
    alt: 'APJ Consultancy receiving the Star Agent Award 2024 and travel package from Academies Australasia College',
    title: 'Star Agent Award 2024',
    issuer: 'Academies Australasia College',
    year: '2024',
    description: 'Recognized as Star Agent with a SGD$2000 travel package for outstanding student placement performance.',
  },
  {
    id: 'awards_2',
    src: awards2,
    alt: 'APJ Consultancy accepting the Star Agent Award 2024 trophy on stage',
    title: 'Star Agent Trophy',
    issuer: 'Academies Australasia College',
    year: '2024',
    description: 'Honored on stage for excellence in student counselling and partner institution collaboration.',
  },
  {
    id: 'awards_3',
    src: awards3,
    alt: 'APJ Consultancy representing at Academies Australasia College award ceremony',
    title: 'Partner Recognition',
    issuer: 'Academies Australasia College',
    year: '2024',
    description: 'Celebrating a trusted partnership that opens stronger pathways for Sri Lankan students.',
  },

  {
    id: 'awards_4',
    src: awards4,
    alt: 'APJ Consultancy representing at Academies Australasia College award ceremony',
    title: 'Winning Moment',
    issuer: 'Academies Australasia College',
    year: '2024',
    description: 'Celebrating a trusted partnership that opens stronger pathways for Sri Lankan students.',
  },

];

export const certificatesGallery = [
  {
    id: 'certificate_1',
    src: certificate1,
    alt: 'APJ Consultancy credentials and professional certificates display',
    title: 'Professional Credentials',
  },
  {
    id: 'certificate_2',
    src: certificate2,
    alt: 'APJ Consultancy framed recognition certificate',
    title: 'Recognition Certificate',
  },
  {
    id: 'certificate_3',
    src: certificate3,
    alt: 'APJ Consultancy certificate of honour recognition',
    title: 'Certificate of Honour',
  },
];

/**
 * Parsed from src/assets/mediaPresence/mediaPresence.txt
 * TitleDate is used as the card title; RefImage maps to local thumbnails.
 */
export const mediaPresenceGallery = [
  {
    id: 'youtube_1',
    src: mediaThumbnails.youtube_1,
    title: '15 June 2024',
    url: 'https://youtu.be/wa_hplYE8rY?si=FgUdOQVRB4a5MBMy',
    alt: 'APJ Consultancy media appearance — 15 June 2024',
  },
  {
    id: 'youtube_2',
    src: mediaThumbnails.youtube_2,
    title: '13 November 2024',
    url: 'https://youtu.be/yf_dFrko7W8?si=ydGkJcxHJSbZW7Ji',
    alt: 'APJ Consultancy media appearance — 13 November 2024',
  },

  {
    id: 'youtube_4',
    src: mediaThumbnails.youtube_4,
    title: '18 November 2024',
    url: 'https://youtu.be/tmEvlF9UCfk?si=inf8MCNZ6VrmlPER',
    alt: 'APJ Consultancy media appearance — 18 November 2024',
  },
  {
    id: 'youtube_3',
    src: mediaThumbnails.youtube_3,
    title: '20 September 2025',
    url: 'ttps://www.youtube.com/live/qYxmAJnG664?si=n1DgyDii8bbB0odX',
    alt: 'APJ Consultancy media appearance — 20 September 2025',
  },
];

export const officeGallery = [
  {
    id: 'office_1',
    src: office1,
    alt: 'APJ Consultancy office success wall with student visa achievements',
    caption: 'Success wall celebrating approved student journeys',
  },
  {
    id: 'office_2',
    src: office2,
    alt: 'APJ Consultancy counselling and consultation space',
    caption: 'Professional counselling environment',
  },
  {
    id: 'office_3',
    src: office3,
    alt: 'APJ Consultancy team workspace',
    caption: 'Dedicated guidance workspace',
  },
  {
    id: 'office_4',
    src: office4,
    alt: 'APJ Consultancy branch office interior',
    caption: 'Welcoming branch office interior',
  },
  {
    id: 'office_5',
    src: office5,
    alt: 'APJ Consultancy in-person student support space',
    caption: 'Trusted in-person student support',
  },
];

export default {
  brandLogo,
  awardsGallery,
  certificatesGallery,
  mediaPresenceGallery,
  officeGallery,
  studentPhotos,
};
