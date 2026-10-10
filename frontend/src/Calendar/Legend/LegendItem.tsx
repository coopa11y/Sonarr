import classNames from 'classnames';
import React from 'react';
import Icon, { IconName, IconProps } from 'Components/Icon';
import ScreenReaderOnly from 'Components/ScreenReaderOnly';
import { CalendarStatus } from 'typings/Calendar';
import titleCase from 'Utilities/String/titleCase';
import styles from './LegendItem.module.css';

interface LegendItemProps {
  name?: string;
  tooltip: string;
  fullColorEvents: boolean;
  status?: CalendarStatus;
  icon?: IconName;
  kind?: IconProps['kind'];
}

function LegendItem(props: LegendItemProps) {
  const { name, tooltip, fullColorEvents, status, icon, kind } = props;

  return (
    <div className={styles.legendItem} role="listitem" title={tooltip}>
      <span className={styles.indicator} aria-hidden={true}>
        {icon ? (
          <Icon
            className={classNames(
              styles.icon,
              fullColorEvents && styles.fullColor
            )}
            name={icon}
            kind={kind}
          />
        ) : (
          <span className={classNames(styles.bar, status && styles[status])} />
        )}
      </span>

      <span aria-hidden={true}>
        {name ?? (status ? titleCase(status) : null)}
      </span>
      <ScreenReaderOnly>
        {name ?? (status ? titleCase(status) : null)}. {tooltip}
      </ScreenReaderOnly>
    </div>
  );
}

export default LegendItem;
