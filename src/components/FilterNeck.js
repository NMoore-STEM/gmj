import stockData from '../data/archive/data (full original).json';

export const filtered = stockData.filter(
    (items) => items.type === "necklaces"
)