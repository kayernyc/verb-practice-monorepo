export const languageBasedHydration = (hydrationFunction, pronounMapping)
  => hydration = (req, res) => {
    const sourceJson = hydrationFunction(req);
    return pronounMapping(sourceJson);
  };

export default languageBasedHydration;

// author_list = function(req, res) {
//   res.send('NOT IMPLEMENTED: Author list');
// };
