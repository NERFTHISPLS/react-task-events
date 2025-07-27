import { CategoryKey, CategoryLabel } from '@/types';

export const BASE_ANIMATION_DURATION_SECONDS = 0.8;
export const CIRCLE_DIAMETER = 530;
export const BASE_ANGLE = Math.PI / 3;

export const CHEVRON_SIZE_NORMAL = 20;

export const SWIPER_SPACE_BETWEEN_ITEMS = 80;
export const SWIPER_ITEMS_PER_VIEW = 3;

export const CATEGORY_TYPE_TO_LABEL: Record<CategoryKey, CategoryLabel> = {
  science: 'Наука',
  technology: 'Технологии',
  culture: 'Культура',
  cooking: 'Кулинария',
  sports: 'Спорт',
  nature: 'Природа',
};
