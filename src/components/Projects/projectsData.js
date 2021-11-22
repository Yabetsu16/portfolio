import voyageToTheDeep from './voyage_to_the_deep.jpg';
import rrdnTruckingServices from './rrdntruckingservices.png';
import portfolio from './portfolio.png';
import cryptoverse from './cryptoverse.png';
import gpt from './gpt.png';

export const projects = [
  {
    image: voyageToTheDeep,
    name: 'Voyage to the Deep',
    description:
      'Voyage to the Deep is a 2.5D metroidvania game ' +
      'for android a project for our capstone. ' +
      'We are a three member group and my role is ' +
      'gameplay programmer and my two other groupmates are for 2D and 3D art',
    link: 'https://play.google.com/store/apps/details?id=com.JJP.VoyagetotheDeep',
    buttonDescription: 'Go to Playstore',
    skills: ['C#', 'Unity']
  },
  {
    image: rrdnTruckingServices,
    name: 'RRDN Trucking Services',
    description:
      'RRDN Trucking Services is a Quoting and Custom CMS Website. ' +
      'This project is my first project as a freelance web developer. ' +
      'I used PHP for backend, MySQL for database and Bootstrap 4 for the UI.',
    link: 'http://rrdntruckingservices.ph/',
    buttonDescription: 'Go to the Website',
    skills: ['PHP', 'MDBootstrap 4', 'MySQL']
  },
  {
    image: portfolio,
    name: 'Yabetsu Portfolio',
    description:
      'Yabetsu Portfolio is a my self portfolio project. ' +
      'This project is my first project using ReactJS as frontend framework. ' +
      'I also used Material UI 5 as my UI framework.',
    link: '#',
    buttonDescription: 'Go to the Website',
    skills: ['React JS', 'MUI 5']
  },
  {
    image: cryptoverse,
    name: 'Cryptoverse',
    description:
      'Cryptoverse is a prototype project about crypto. ' +
      'I used ReactJS as frontend framework and Ant Design for the UI.' +
      'I also used the free version of coinranking api for the content of the project.',
    link: 'https://cryptoverse-project.netlify.app/',
    buttonDescription: 'Go to the Website',
    skills: ['React JS', 'AntDesign', 'Axios']
  },
  {
    image: gpt,
    name: 'GPT3',
    description:
      'GPT3 is my design prototype project ' +
      'I used ReactJS as frontend framework and CSS for styling. ' +
      'I also learned and used BEM naming convention standard when naming my class selectors',
    link: 'https://yabetsu16.github.io/gpt-prototype/',
    buttonDescription: 'Go to the Website',
    skills: ['React JS', 'CSS']
  }
];
