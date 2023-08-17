import React, { useState } from 'react';
import { Text } from '@consta/uikit/Text';
import { Button } from '@consta/uikit/Button';
import { IconAdd } from '@consta/uikit/IconAdd';
import { IconRemove } from '@consta/uikit/IconRemove';
import { TextField } from '@consta/uikit/TextField';
import { IconClose } from '@consta/uikit/IconClose';
import { Graph } from '@antv/x6';
import './ToolbarNavigate.scss';

function ToolbarNavigate() {
 
  const [zoomLavel, setZoomLavel] = useState<number | any>(10);

  const handleZoomIn = () => {
    
  };
  const handleZoomOut = () => {
   
  };
const handleResetItem=()=>{
  setZoomLavel(null);
}
  return (
    <>
      <Text size="s" weight="regular" className="navigate-info">
        Инфраструктурных объектов
      </Text>
      <div className="zoom-wrapp">
        <Button size="s" view="ghost" iconLeft={IconAdd} onlyIcon onClick={handleZoomIn} />
        <div className="item-zoom-wrapp">
          {' '}
          <TextField size="s" type="number" className="item-zoom" value={zoomLavel} />
          <Button className="remove-button" size="s" view="clear" iconLeft={IconClose} label={'%'} onClick={handleResetItem} />
        </div>

        <Button size="s" view="ghost" iconLeft={IconRemove} onlyIcon onClick={handleZoomOut} />
      </div>
    </>
  );
}
export { ToolbarNavigate };
