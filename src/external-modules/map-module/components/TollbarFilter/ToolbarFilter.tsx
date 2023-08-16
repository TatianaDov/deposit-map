import React, { useState } from 'react';
import { IconAlignJustify } from '@consta/uikit/IconAlignJustify';
import { Button } from '@consta/uikit/Button';
import { Text } from '@consta/uikit/Text';
import { IconFunnel } from '@consta/uikit/IconFunnel';
import { IconMoon } from '@consta/uikit/IconMoon';
import { User } from '@consta/uikit/User';
import { Combobox } from '@consta/uikit/Combobox';
import { DatePicker } from '@consta/uikit/DatePicker';
import {dayFilterItems,dayItem} from '../../constants/index'
import "./TollbarFilter.scss"
type Item = {
  label: string;
  id: number;
};

const items: Item[] = [
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
function ToolbarFilter() {
  const [valueDay, setItemValueDay] = useState<dayItem | null>(null);
  const [valueDate, setValueDate] = useState<Date | null>(null);
  const [value,setValue] = useState<Item|null>(null)
  return (
    <header className="header">
      <div className='header-box-filter'>
      <Button iconLeft={IconAlignJustify} onlyIcon view="clear" />
      <Text  weight="bold">Анализ отклонений</Text>
      <Button label="Глобальный фильтр" iconLeft={IconFunnel} view="secondary" size='xs' />
     
      <Combobox
       className='input-filter'
      size='xs'
        placeholder="Ноябрьскнефтегаз"
        items={items}
        value={value}
        onChange={({ value }) => setValue(value)}
      />
      <Combobox
      className='input-filter'
      size='xs'
        placeholder="Месторождение"
        items={items}
        value={value}
        onChange={({ value }) => setValue(value)}
      />
      <Combobox  className='input-filter' size='xs' placeholder="День" items={dayFilterItems} value={valueDay} onChange={({ value }) => setItemValueDay(value)} />
      <DatePicker size='xs' type="date" value={valueDate} onChange={({ value }) => setValueDate(value)} />
      </div>
     
<div className='header-user-box'>
<Button iconLeft={IconMoon} view="clear" onlyIcon size='s'/>
      <User name="Имя Фамилия" withArrow size='s' view="clear"/>
     
</div>

    </header>
  );
}

export { ToolbarFilter };
