import awards1 from '../assets/awards/awards_1.jpeg';
import awards2 from '../assets/awards/awards_2.jpeg';
import awards3 from '../assets/awards/awards_3.jpeg';
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

export const brandLogo = logo;

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
  officeGallery,
  studentPhotos,
};
