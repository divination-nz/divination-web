export const updateUrl = (query: string) => {
  const url = new URL(window.location.href);
  url.searchParams.set('q', query);
  window.history.pushState({}, '', url.toString());
};

export const resetUrl = () => {
  const url = new URL(window.location.href);
  url.searchParams.delete('q');
  window.history.pushState({}, '', url.toString());
};
