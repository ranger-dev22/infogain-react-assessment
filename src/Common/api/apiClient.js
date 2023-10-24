const apiClient = async (endpoint, { body, ...customConfig } = {}) => {
  const headers = { "Content-Type": "application/json" };
  const config = {
    method: body ? "POST" : "GET",
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(`${endpoint}`, config);
  return response.json();
};

export default apiClient;
