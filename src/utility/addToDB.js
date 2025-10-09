const getStoredApps = () => {
  try {
    const stored = localStorage.getItem('installList');
    const parsed = stored ? JSON.parse(stored) : [];
    if (!Array.isArray(parsed)) return [];
    return parsed.map(String);
  } catch (err) {
    console.error('Error', err);
    return [];
  }
};

const addToStoreDB = (id) => {
  const storedAppsData = getStoredApps();
  const strId = id.toString();
  if (storedAppsData.includes(strId)) return;
  storedAppsData.push(strId);
  localStorage.setItem('installList', JSON.stringify(storedAppsData));
};



const removeFromWishlist = id => {
  const wishlist = getStoredApps();
  try {
    const updatedWishlist = wishlist.filter(p => p.toString() !== id.toString());
    localStorage.setItem('installList', JSON.stringify(updatedWishlist));
  } catch (err) {
    console.log(err);
  }
}

export { getStoredApps, addToStoreDB, removeFromWishlist };
