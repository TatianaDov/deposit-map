import React from 'react';
import { ToolbarNavigate } from '../../external-modules/map-module/components/ToolbarNavigate/ToolbarNavigate';
import { ToolbarFilter } from '../../external-modules/map-module/components/TollbarFilter/ToolbarFilter';

const Header = () => {
  return (
    <div className="margin-l">
      <ToolbarFilter />
      <ToolbarNavigate />
    </div>
  );
};

export { Header };
