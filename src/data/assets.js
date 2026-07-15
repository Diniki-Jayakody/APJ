import awards1 from '../assets/awards/awards_1.jpeg';
import awards2 from '../assets/awards/awards_2.jpeg';
import awards3 from '../assets/awards/awards_3.jpeg';
import certificate1 from '../assets/certificates/certificate_1.jpg';
import certificate2 from '../assets/certificates/certificate_2.jpg';
import certificate3 from '../assets/certificates/certificate_3.jpg';
import office1 from '../assets/office/office_1.jpg';
import office2 from '../assets/office/office_2.jpg';
import office3 from '../assets/office/office_3.jpg';
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
    alt: 'APJ Consultancy award recognition',
    title: 'Consultancy Recognition',
  },
  {
    id: 'awards_2',
    src: awards2,
    alt: 'APJ Consultancy student success award',
    title: 'Student Success Award',
  },
  {
    id: 'awards_3',
    src: awards3,
    alt: 'APJ Consultancy educational excellence award',
    title: 'Educational Excellence',
  },
];

export const certificatesGallery = [
  {
    id: 'certificate_1',
    src: certificate1,
    alt: 'APJ Consultancy official certificate',
    title: 'Official Certificate',
  },
  {
    id: 'certificate_2',
    src: certificate2,
    alt: 'APJ Consultancy accreditation certificate',
    title: 'Accreditation Certificate',
  },
  {
    id: 'certificate_3',
    src: certificate3,
    alt: 'APJ Consultancy professional certificate',
    title: 'Professional Certificate',
  },
];

export const officeGallery = [
  {
    id: 'office_1',
    src: office1,
    alt: 'APJ Consultancy office interior',
    caption: 'Welcoming counselling space',
  },
  {
    id: 'office_2',
    src: office2,
    alt: 'APJ Consultancy team workspace',
    caption: 'Professional guidance environment',
  },
  {
    id: 'office_3',
    src: office3,
    alt: 'APJ Consultancy branch office',
    caption: 'Trusted in-person support',
  },
];

export default {
  brandLogo,
  awardsGallery,
  certificatesGallery,
  officeGallery,
  studentPhotos,
};
