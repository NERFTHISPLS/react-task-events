import { CategoryKey, CategoryLabel } from '@/types';

export const BASE_ANIMATION_DURATION_SECONDS = 0.8;
export const CIRCLE_DIAMETER = 530;
export const BASE_ANGLE = Math.PI / 3;

export const CHEVRON_SIZE_NORMAL = 20;

export const SWIPER_SPACE_BETWEEN_ITEMS = 80;
export const SWIPER_SPACE_BETWEEN_ITEMS_MOBILE = 20;
export const SWIPER_ITEMS_PER_VIEW = 3;
export const SWIPER_ITEMS_PER_VIEW_TABLET = 2;
export const SWIPER_ITEMS_PER_VIEW_MOBILE = 1;

export const CATEGORY_TYPE_TO_LABEL: Record<CategoryKey, CategoryLabel> = {
  science: 'Наука',
  technology: 'Технологии',
  culture: 'Культура',
  cooking: 'Кулинария',
  sports: 'Спорт',
  nature: 'Природа',
};

export const SIZE: Record<Device, string> = {
  mobileS: '320px',
  mobileM: '400px',
  mobileL: '540px',

  tabletS: '660px',
  tablet: '924px',

  laptopS: '1200px',
  laptop: '1260px',
  laptopL: '1460px',
};

export const DEVICE: Record<Device, string> = {
  mobileS: `(max-width: ${SIZE.mobileS})`,
  mobileM: `(max-width: ${SIZE.mobileM})`,
  mobileL: `(max-width: ${SIZE.mobileL})`,

  tabletS: `(max-width: ${SIZE.tabletS})`,
  tablet: `(max-width: ${SIZE.tablet})`,

  laptopS: `(max-width: ${SIZE.laptopS})`,
  laptop: `(max-width: ${SIZE.laptop})`,
  laptopL: `(max-width: ${SIZE.laptopL})`,
};

type Device =
  | 'mobileS'
  | 'mobileM'
  | 'mobileL'
  | 'tabletS'
  | 'tablet'
  | 'laptopS'
  | 'laptop'
  | 'laptopL';
