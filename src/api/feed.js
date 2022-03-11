export const readPhotos = async (callback) => {
  const photosHTTP = await fetch("http://10.0.2.2:3030/feed");
  const photosJson = await photosHTTP.json();
  callback(photosJson);
};
