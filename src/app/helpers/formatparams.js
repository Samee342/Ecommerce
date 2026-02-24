function formatparams(searchparams) {
  let query = "";

  Object.entries(searchparams).map((param) => {
    const [key, value] = param;

    if (value) query = `${query == "" ? "" : query + "&"}${key}=${value}`;
  });

  return query;
}

export default formatparams;
