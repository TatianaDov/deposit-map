import React, { useState } from 'react';
import { Sidebar } from '@consta/uikit/Sidebar';
import { Text } from '@consta/uikit/Text';
import { Button } from '@consta/uikit/Button';
import { Tabs } from '@consta/uikit/Tabs';
import { IconForward } from '@consta/uikit/IconForward';
import { IconBackward } from '@consta/uikit/IconBackward';
import { Combobox } from '@consta/uikit/Combobox';
import { Grid, GridItem } from '@consta/uikit/Grid';

import './SideBar.scss';

type Item = {
  label: string;
  id: number;
};

const itemsValue: Item[] = [
  {
    label: 'Первый',
    id: 1,
  },
  {
    label: 'Второй',
    id: 2,
  },
  {
    label: 'Третий',
    id: 3,
  },
];
function SideBar() {
  const [itemValue, setItemValue] = useState<Item | null>();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isExpandSideBar, setIsExpandSideBar] = useState(false);
  const [isSideBarSize, setIsSideBarSize] = useState<any>('1/4');
  const items: string[] = ['Информация', 'Связанные объекты'];
  const getItemLabel = (label: string) => label;
  const [value, setValue] = useState<string | null>(items[0]);

  const handleExpandSideBar = () => {
    setIsExpandSideBar(true);
    setIsSideBarSize('2/3');
  };
  const handleCollapseSideBar = () => {
    setIsExpandSideBar(false);
    setIsSideBarSize('1/4');
  };
  const handleCloseSideBar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <>
      <Sidebar size={isSideBarSize} hasOverlay={false} isOpen={isSidebarOpen}>
        <Sidebar.Content className="sidebar-wrapper">
          <Text className="sidebar-info" weight="regular" size="xl">
            Дополнительно
          </Text>
          <Tabs
            size="s"
            className="sidebar-info"
            value={value}
            onChange={({ value }) => setValue(value)}
            items={items}
            getItemLabel={getItemLabel}
          />
          <Text className="sidebar-info" weight="light" size="s">
            Выбрано на карте
          </Text>
          <Text weight="light" size="s">
            Подобъекты
          </Text>
          <Combobox
            className="items-filter"
            size="xs"
            placeholder="Не выбрано"
            items={itemsValue}
            value={itemValue}
            onChange={({ value }) => setItemValue(itemValue)}
          />
          <Text className="sidebar-info" weight="semibold">
            Добыча:
          </Text>
          <Text weight="light" size="xs">
            Текущие показатели
          </Text>
          <Grid className="index-wrapper" cols="2">
            <GridItem>Жидкость(план)</GridItem>
            <GridItem>Нефть(план)</GridItem>
            <GridItem>Жидкость(факт)</GridItem>
            <GridItem>Нефть(факт)</GridItem>
            <GridItem>Жидкость(ВР)</GridItem>
            <GridItem>Нефть(ВР)</GridItem>
          </Grid>
          <Text weight="semibold">
           ВСП:
          </Text>
        </Sidebar.Content>
        <Sidebar.Actions className='sidebar-actions-button'>
          {!isExpandSideBar ? (
            <Button
            size="xs"
            view="ghost"
              iconLeft={IconBackward}
              label="Развернуть"
              width="default"
              onClick={handleExpandSideBar}
            />
          ) : (
            <Button
            size="xs"
            view="ghost"
              iconRight={IconForward}
              label="Свернуть"
              width="default"
              onClick={handleCollapseSideBar}
            />
          )}

          <Button size="xs" view="clear" label="Закрыть" width="default" onClick={handleCloseSideBar} />
        </Sidebar.Actions>
      </Sidebar>
    </>
  );
}

export { SideBar };
