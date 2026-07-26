import audience01 from '../assets/gallery/audience-session-01.jpg'
import audience02 from '../assets/gallery/audience-session-02.jpg'
import audience03 from '../assets/gallery/audience-session-03.jpg'
import audience04 from '../assets/gallery/audience-session-04.png'
import audience05 from '../assets/gallery/audience-session-05.jpg'
import audience06 from '../assets/gallery/audience-session-06.png'

import award01 from '../assets/gallery/award-01.jpg'
import award02 from '../assets/gallery/award-02.png'

import businessHead01 from '../assets/gallery/business-head-01.png'
import businessPartners01 from '../assets/gallery/business-partners-meet-01.png'
import businessPartners02 from '../assets/gallery/business-partners-meet-02.jpg'

import conference01 from '../assets/gallery/conference-presentation-01.png'
import conference02 from '../assets/gallery/conference-presentation-02.jpg'
import conference03 from '../assets/gallery/conference-presentation-03.png'

import director01 from '../assets/gallery/director-01.jpg'
import director02 from '../assets/gallery/director-02.jpg'
import directorFounder01 from '../assets/gallery/director-founder-01.jpg'

import eventHighlight01 from '../assets/gallery/event-highlight-01.png'
import eventHighlight02 from '../assets/gallery/event-highlight-02.png'

import meeting01 from '../assets/gallery/meeting-01.jpg'
import venue01 from '../assets/gallery/venue-01.png'
import venue02 from '../assets/gallery/venue-02.png'

export const gallerySectionsInfo = [
  { id: 'featured', label: 'Flagship', number: '01' },
  { id: 'journey', label: 'Timeline', number: '02' },
  { id: 'business-partners', label: 'Partnerships', number: '03' },
  { id: 'conference', label: 'Keynotes', number: '04' },
  { id: 'leadership', label: 'Leadership', number: '05' },
  { id: 'awards', label: 'Honors', number: '06' },
  { id: 'audience', label: 'Atmosphere', number: '07' },
]

export const galleryItems = [
  // 01. FLAGSHIP MOMENTS
  {
    id: 1,
    src: directorFounder01,
    title: 'Founder & Director Keynote',
    year: '2023',
    sectionId: 'featured',
    aspect: 'aspect-[16/10]',
    featured: true,
    objectPos: 'object-center',
  },
  {
    id: 2,
    src: award01,
    title: 'National FMCG Excellence Honor',
    year: '2023',
    sectionId: 'featured',
    aspect: 'aspect-[4/3]',
    featured: true,
    objectPos: 'object-center',
  },
  {
    id: 3,
    src: eventHighlight01,
    title: 'Annual Corporate Summit',
    year: '2024',
    sectionId: 'featured',
    aspect: 'aspect-[4/3]',
    featured: true,
    objectPos: 'object-center',
  },

  // 02. TIMELINE (EDITORIAL MAGAZINE SPREAD)
  {
    id: 4,
    src: venue01,
    title: 'Grand Exhibition Pavilion',
    year: '2022',
    sectionId: 'journey',
    aspect: 'aspect-[21/10]',
    gridSpan: 'col-span-12',
    objectPos: 'object-center',
  },
  {
    id: 5,
    src: meeting01,
    title: 'Strategic Executive Review',
    year: '2023',
    sectionId: 'journey',
    aspect: 'aspect-[4/3]',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-4',
    objectPos: 'object-center',
  },
  {
    id: 6,
    src: businessHead01,
    title: 'Executive Council Address',
    year: '2023',
    sectionId: 'journey',
    aspect: 'aspect-[3/4]',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-4',
    objectPos: 'object-top',
  },
  {
    id: 7,
    src: eventHighlight02,
    title: 'Milestone Vision Keynote',
    year: '2024',
    sectionId: 'journey',
    aspect: 'aspect-[4/3]',
    gridSpan: 'col-span-12 md:col-span-12 lg:col-span-4',
    objectPos: 'object-center',
  },

  // 03. PARTNERSHIPS
  {
    id: 8,
    src: businessPartners01,
    title: 'Pan-India Distributor Conclave',
    year: '2022',
    sectionId: 'business-partners',
    aspect: 'aspect-[16/9]',
    gridSpan: 'col-span-12 lg:col-span-6',
    objectPos: 'object-center',
  },
  {
    id: 9,
    src: businessPartners02,
    title: 'Regional Partner Honors',
    year: '2023',
    sectionId: 'business-partners',
    aspect: 'aspect-[16/9]',
    gridSpan: 'col-span-12 lg:col-span-6',
    objectPos: 'object-center',
  },

  // 04. KEYNOTES & PRESENTATIONS
  {
    id: 10,
    src: conference01,
    title: 'FMCG Innovation Address',
    year: '2023',
    sectionId: 'conference',
    aspect: 'aspect-[16/10]',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-4',
    objectPos: 'object-center',
  },
  {
    id: 11,
    src: conference02,
    title: 'Global Trade Expo Address',
    year: '2022',
    sectionId: 'conference',
    aspect: 'aspect-[16/10]',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-4',
    objectPos: 'object-center',
  },
  {
    id: 12,
    src: conference03,
    title: 'Quality Assurance Symposium',
    year: '2024',
    sectionId: 'conference',
    aspect: 'aspect-[16/10]',
    gridSpan: 'col-span-12 md:col-span-12 lg:col-span-4',
    objectPos: 'object-center',
  },

  // 05. LEADERSHIP
  {
    id: 13,
    src: director01,
    title: 'Managing Director Address',
    year: '2023',
    sectionId: 'leadership',
    aspect: 'aspect-[4/3]',
    gridSpan: 'col-span-12 md:col-span-6',
    objectPos: 'object-top',
  },
  {
    id: 14,
    src: director02,
    title: 'Strategic Vision Directive',
    year: '2024',
    sectionId: 'leadership',
    aspect: 'aspect-[4/3]',
    gridSpan: 'col-span-12 md:col-span-6',
    objectPos: 'object-top',
  },

  // 06. HONORS & ACCOLADES
  {
    id: 15,
    src: award02,
    title: 'Manufacturing Hygiene Certification',
    year: '2023',
    sectionId: 'awards',
    aspect: 'aspect-[16/9]',
    gridSpan: 'col-span-12 md:col-span-6',
    objectPos: 'object-center',
  },
  {
    id: 16,
    src: venue02,
    title: 'Brand Legacy Recognition',
    year: '2022',
    sectionId: 'awards',
    aspect: 'aspect-[16/9]',
    gridSpan: 'col-span-12 md:col-span-6',
    objectPos: 'object-center',
  },

  // 07. ATMOSPHERE & DELEGATES
  {
    id: 17,
    src: audience01,
    title: 'Distributor Engagement Session',
    year: '2023',
    sectionId: 'audience',
    aspect: 'aspect-[4/3]',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-4',
    objectPos: 'object-center',
  },
  {
    id: 18,
    src: audience02,
    title: 'Market Insights Q&A',
    year: '2023',
    sectionId: 'audience',
    aspect: 'aspect-[4/3]',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-4',
    objectPos: 'object-center',
  },
  {
    id: 19,
    src: audience03,
    title: 'Trade Leaders Round Table',
    year: '2024',
    sectionId: 'audience',
    aspect: 'aspect-[4/3]',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-4',
    objectPos: 'object-center',
  },
  {
    id: 20,
    src: audience04,
    title: 'Expo Networking Foyer',
    year: '2022',
    sectionId: 'audience',
    aspect: 'aspect-[4/3]',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-4',
    objectPos: 'object-center',
  },
  {
    id: 21,
    src: audience05,
    title: 'Zonal Strategy Meet',
    year: '2023',
    sectionId: 'audience',
    aspect: 'aspect-[4/3]',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-4',
    objectPos: 'object-center',
  },
  {
    id: 22,
    src: audience06,
    title: 'National Delegate Conclave',
    year: '2024',
    sectionId: 'audience',
    aspect: 'aspect-[4/3]',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-4',
    objectPos: 'object-center',
  },
]
