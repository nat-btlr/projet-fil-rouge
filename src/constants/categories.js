
export const CATEGORIES = {
  HEALTH: 'HEALTH',
  PREPARATION: 'PREPARATION', 
  ECOLOGY: 'ECOLOGY',
  COSMETICS: 'COSMETICS'
};

export const CATEGORY_LIST = Object.values(CATEGORIES);

export const isValidCategory = (category) => {
  return CATEGORY_LIST.includes(category);
};