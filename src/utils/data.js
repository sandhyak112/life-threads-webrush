export const money=n=>`₹${Math.round(n).toLocaleString('en-IN')}`
export const pct=n=>`${n.toFixed(1)}%`
export function searchItems(items,q){if(!q.trim())return items;const s=q.toLowerCase();return items.filter(x=>Object.values(x).some(v=>String(v).toLowerCase().includes(s)))}
