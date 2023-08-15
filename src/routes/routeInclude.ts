const routeInclude = (path: string, route: string): boolean => {
  if (path === route) return true;

  const routArr = /[A-Za-z0-9_-]+/.exec(route);
  const clearRout: string | null = routArr ? routArr[0] : null;

  if (clearRout) {
    return path.split('/').includes(clearRout);
  }

  return false;
};

export default routeInclude;
