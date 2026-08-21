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
    title: 'Leadership Interaction',
    sectionId: 'featured',
    aspect: 'aspect-[16/10]',
    featured: true,
    objectPos: 'object-center',
  },
  {
    id: 2,
    src: award01,
    title: 'Recognition Moment',
    sectionId: 'featured',
    aspect: 'aspect-[4/3]',
    featured: true,
    objectPos: 'object-center',
  },
  {
    id: 3,
    src: eventHighlight01,
    title: 'Business Meet Gathering',
    sectionId: 'featured',
    aspect: 'aspect-[4/3]',
    featured: true,
    objectPos: 'object-center',
  },

  // 02. TIMELINE (EDITORIAL MAGAZINE SPREAD)
  {
    id: 4,
    src: venue01,
    title: 'Business Meet Gathering',
    sectionId: 'journey',
    aspect: 'aspect-[21/10]',
    gridSpan: 'col-span-12',
    objectPos: 'object-center',
  },
  {
    id: 5,
    src: meeting01,
    title: 'Business Discussion',
    sectionId: 'journey',
    aspect: 'aspect-[4/3]',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-4',
    objectPos: 'object-center',
  },
  {
    id: 6,
    src: businessHead01,
    title: 'Leadership Address',
    sectionId: 'journey',
    aspect: 'aspect-[3/4]',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-4',
    objectPos: 'object-top',
  },
  {
    id: 7,
    src: eventHighlight02,
    title: 'Leadership Interaction',
    sectionId: 'journey',
    aspect: 'aspect-[4/3]',
    gridSpan: 'col-span-12 md:col-span-12 lg:col-span-4',
    objectPos: 'object-center',
  },

  // 03. PARTNERSHIPS
  {
    id: 8,
    src: businessPartners01,
    title: 'Business Partner Meet',
    sectionId: 'business-partners',
    aspect: 'aspect-[16/9]',
    gridSpan: 'col-span-12 lg:col-span-6',
    objectPos: 'object-center',
  },
  {
    id: 9,
    src: businessPartners02,
    title: 'Partner Engagement',
    sectionId: 'business-partners',
    aspect: 'aspect-[16/9]',
    gridSpan: 'col-span-12 lg:col-span-6',
    objectPos: 'object-center',
  },

  // 04. KEYNOTES & PRESENTATIONS
  {
    id: 10,
    src: conference01,
    title: 'Business Presentation',
    sectionId: 'conference',
    aspect: 'aspect-[16/10]',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-4',
    objectPos: 'object-center',
  },
  {
    id: 11,
    src: conference02,
    title: 'Corporate Presentation',
    sectionId: 'conference',
    aspect: 'aspect-[16/10]',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-4',
    objectPos: 'object-center',
  },
  {
    id: 12,
    src: conference03,
    title: 'Speaker Session',
    sectionId: 'conference',
    aspect: 'aspect-[16/10]',
    gridSpan: 'col-span-12 md:col-span-12 lg:col-span-4',
    objectPos: 'object-center',
  },

  // 05. LEADERSHIP
  {
    id: 13,
    src: director01,
    title: 'Leadership Address',
    sectionId: 'leadership',
    aspect: 'aspect-[4/3]',
    gridSpan: 'col-span-12 md:col-span-6',
    objectPos: 'object-top',
  },
  {
    id: 14,
    src: director02,
    title: 'Leadership Session',
    sectionId: 'leadership',
    aspect: 'aspect-[4/3]',
    gridSpan: 'col-span-12 md:col-span-6',
    objectPos: 'object-top',
  },

  // 06. HONORS & ACCOLADES
  {
    id: 15,
    src: award02,
    title: 'Recognition Moment',
    sectionId: 'awards',
    aspect: 'aspect-[16/9]',
    gridSpan: 'col-span-12 md:col-span-6',
    objectPos: 'object-center',
  },
  {
    id: 16,
    src: venue02,
    title: 'Appreciation Moment',
    sectionId: 'awards',
    aspect: 'aspect-[16/9]',
    gridSpan: 'col-span-12 md:col-span-6',
    objectPos: 'object-center',
  },

  // 07. ATMOSPHERE & DELEGATES
  {
    id: 17,
    src: audience01,
    title: 'Audience Interaction',
    sectionId: 'audience',
    aspect: 'aspect-[4/3]',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-4',
    objectPos: 'object-center',
  },
  {
    id: 18,
    src: audience02,
    title: 'Interactive Business Session',
    sectionId: 'audience',
    aspect: 'aspect-[4/3]',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-4',
    objectPos: 'object-center',
  },
  {
    id: 19,
    src: audience03,
    title: 'Business Discussion',
    sectionId: 'audience',
    aspect: 'aspect-[4/3]',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-4',
    objectPos: 'object-center',
  },
  {
    id: 20,
    src: audience04,
    title: 'Business Meet Gathering',
    sectionId: 'audience',
    aspect: 'aspect-[4/3]',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-4',
    objectPos: 'object-center',
  },
  {
    id: 21,
    src: audience05,
    title: 'Business Meet Discussion',
    sectionId: 'audience',
    aspect: 'aspect-[4/3]',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-4',
    objectPos: 'object-center',
  },
  {
    id: 22,
    src: audience06,
    title: 'Networking Session',
    sectionId: 'audience',
    aspect: 'aspect-[4/3]',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-4',
    objectPos: 'object-center',
  },
]
