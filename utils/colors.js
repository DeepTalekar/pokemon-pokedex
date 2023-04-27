const colors = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};

const borderHoverColors = {
  normal: 'hover:border-[#A8A77A] focus:border-[#A8A77A]',
  fire: 'hover:border-[#EE8130] focus:border-[#EE8130]',
  water: 'hover:border-[#6390F0] focus:border-[#6390F0]',
  electric: 'hover:border-[#F7D02C] focus:border-[#F7D02C]',
  grass: 'hover:border-[#7AC74C] focus:border-[#7AC74C]',
  ice: 'hover:border-[#96D9D6] focus:border-[#96D9D6]',
  fighting: 'hover:border-[#C22E28] focus:border-[#C22E28]',
  poison: 'hover:border-[#A33EA1] focus:border-[#A33EA1]',
  ground: 'hover:border-[#E2BF65] focus:border-[#E2BF65]',
  flying: 'hover:border-[#A98FF3] focus:border-[#A98FF3]',
  psychic: 'hover:border-[#F95587] focus:border-[#F95587]',
  bug: 'hover:border-[#A6B91A] focus:border-[#A6B91A]',
  rock: 'hover:border-[#B6A136] focus:border-[#B6A136]',
  ghost: 'hover:border-[#735797] focus:border-[#735797]',
  dragon: 'hover:border-[#6F35FC] focus:border-[#6F35FC]',
  dark: 'hover:border-[#705746] focus:border-[#705746]',
  steel: 'hover:border-[#B7B7CE] focus:border-[#B7B7CE]',
  fairy: 'hover:border-[#D685AD] focus:border-[#D685AD]',
};

const borderColors = {
  normal: 'border-[#A8A77A]',
  fire: 'border-[#EE8130]',
  water: 'border-[#6390F0]',
  electric: 'border-[#F7D02C]',
  grass: 'border-[#7AC74C]',
  ice: 'border-[#96D9D6]',
  fighting: 'border-[#C22E28]',
  poison: 'border-[#A33EA1]',
  ground: 'border-[#E2BF65]',
  flying: 'border-[#A98FF3]',
  psychic: 'border-[#F95587]',
  bug: 'border-[#A6B91A]',
  rock: 'border-[#B6A136]',
  ghost: 'border-[#735797]',
  dragon: 'border-[#6F35FC]',
  dark: 'border-[#705746]',
  steel: 'border-[#B7B7CE]',
  fairy: 'border-[#D685AD]',
};

module.exports = (type) => colors[type] || '#777';
module.exports.colors = colors;
module.exports.borderColors = borderColors;
module.exports.borderHoverColors = borderHoverColors;
