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
  Normal: 'hover:border-[#A8A77A] focus:border-[#A8A77A]',
  Fire: 'hover:border-[#EE8130] focus:border-[#EE8130]',
  Water: 'hover:border-[#6390F0] focus:border-[#6390F0]',
  Electric: 'hover:border-[#F7D02C] focus:border-[#F7D02C]',
  Grass: 'hover:border-[#7AC74C] focus:border-[#7AC74C]',
  Ice: 'hover:border-[#96D9D6] focus:border-[#96D9D6]',
  Fighting: 'hover:border-[#C22E28] focus:border-[#C22E28]',
  Poison: 'hover:border-[#A33EA1] focus:border-[#A33EA1]',
  Ground: 'hover:border-[#E2BF65] focus:border-[#E2BF65]',
  Flying: 'hover:border-[#A98FF3] focus:border-[#A98FF3]',
  Psychic: 'hover:border-[#F95587] focus:border-[#F95587]',
  Bug: 'hover:border-[#A6B91A] focus:border-[#A6B91A]',
  Rock: 'hover:border-[#B6A136] focus:border-[#B6A136]',
  Ghost: 'hover:border-[#735797] focus:border-[#735797]',
  Dragon: 'hover:border-[#6F35FC] focus:border-[#6F35FC]',
  Dark: 'hover:border-[#705746] focus:border-[#705746]',
  Steel: 'hover:border-[#B7B7CE] focus:border-[#B7B7CE]',
  Fairy: 'hover:border-[#D685AD] focus:border-[#D685AD]',
};

const borderColors = {
  Normal: 'border-[#A8A77A]',
  Fire: 'border-[#EE8130]',
  Water: 'border-[#6390F0]',
  Electric: 'border-[#F7D02C]',
  Grass: 'border-[#7AC74C]',
  Ice: 'border-[#96D9D6]',
  Fighting: 'border-[#C22E28]',
  Poison: 'border-[#A33EA1]',
  Ground: 'border-[#E2BF65]',
  Flying: 'border-[#A98FF3]',
  Psychic: 'border-[#F95587]',
  Bug: 'border-[#A6B91A]',
  Rock: 'border-[#B6A136]',
  Ghost: 'border-[#735797]',
  Dragon: 'border-[#6F35FC]',
  Dark: 'border-[#705746]',
  Steel: 'border-[#B7B7CE]',
  Fairy: 'border-[#D685AD]',
};

const boxShadows = {
  Normal: 'shadow-[24px_24px_48px_#A8A77A,-24px_-24px_48px_#ffffff]',
  Fire: 'shadow-[24px_24px_48px_#EE8130,-24px_-24px_48px_#ffffff]',
  Water: 'shadow-[24px_24px_48px_#6390F0,-24px_-24px_48px_#ffffff]',
  Electric: 'shadow-[24px_24px_48px_#F7D02C,-24px_-24px_48px_#ffffff]',
  Grass: 'shadow-[24px_24px_48px_#7AC74C,-24px_-24px_48px_#ffffff]',
  Ice: 'shadow-[24px_24px_48px_#96D9D6,-24px_-24px_48px_#ffffff]',
  Fighting: 'shadow-[24px_24px_48px_#C22E28,-24px_-24px_48px_#ffffff]',
  Poison: 'shadow-[24px_24px_48px_#A33EA1,-24px_-24px_48px_#ffffff]',
  Ground: 'shadow-[24px_24px_48px_#E2BF65,-24px_-24px_48px_#ffffff]',
  Flying: 'shadow-[24px_24px_48px_#A98FF3,-24px_-24px_48px_#ffffff]',
  Psychic: 'shadow-[24px_24px_48px_#F95587,-24px_-24px_48px_#ffffff]',
  Bug: 'shadow-[24px_24px_48px_#A6B91A,-24px_-24px_48px_#ffffff]',
  Rock: 'shadow-[24px_24px_48px_#B6A136,-24px_-24px_48px_#ffffff]',
  Ghost: 'shadow-[24px_24px_48px_#735797,-24px_-24px_48px_#ffffff]',
  Dragon: 'shadow-[24px_24px_48px_#6F35FC,-24px_-24px_48px_#ffffff]',
  Dark: 'shadow-[24px_24px_48px_#705746,-24px_-24px_48px_#ffffff]',
  Steel: 'shadow-[24px_24px_48px_#B7B7CE,-24px_-24px_48px_#ffffff]',
  Fairy: 'shadow-[24px_24px_48px_#D685AD,-24px_-24px_48px_#ffffff]',
};

module.exports = (type) => colors[type] || '#777';
module.exports.colors = colors;
module.exports.borderColors = borderColors;
module.exports.borderHoverColors = borderHoverColors;
module.exports.boxShadows = boxShadows;
