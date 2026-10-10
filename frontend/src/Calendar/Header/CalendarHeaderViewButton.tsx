import React, { useCallback } from 'react';
import { CalendarView } from 'Calendar/calendarViews';
import getCalendarViewLabel from 'Calendar/getCalendarViewLabel';
import Link, { LinkProps } from 'Components/Link/Link';

interface CalendarHeaderViewButtonProps
  extends Omit<LinkProps, 'children' | 'onPress'> {
  view: CalendarView;
  selectedView: CalendarView;
  onPress: (view: CalendarView) => void;
}

function CalendarHeaderViewButton({
  view,
  selectedView,
  onPress,
  ...otherProps
}: CalendarHeaderViewButtonProps) {
  const handlePress = useCallback(() => {
    onPress(view);
  }, [view, onPress]);

  return (
    <Link
      isDisabled={selectedView === view}
      aria-pressed={selectedView === view}
      {...otherProps}
      onPress={handlePress}
    >
      {getCalendarViewLabel(view)}
    </Link>
  );
}

export default CalendarHeaderViewButton;
