import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler as DevExpressScheduler,
  WeekView,
  DayView,
  Appointments,
  Toolbar,
  DateNavigator,
  ViewSwitcher,
  AppointmentForm,
  AppointmentTooltip,
  TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  {
    root: {},
  },
  { name: 'Scheduler' },
);

export default function Scheduler({
  className,
  data,
  loading,
  currentDate,
  currentViewName,
  onCurrentViewNameChange,
  onCurrentDateChange,
}) {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)}>
      <DevExpressScheduler data={data} height={660}>
        <ViewState
          currentDate={currentDate}
          currentViewName={currentViewName}
          onCurrentViewNameChange={onCurrentViewNameChange}
          onCurrentDateChange={onCurrentDateChange}
        />
        <DayView startDayHour={9} endDayHour={18} />
        <WeekView startDayHour={9} endDayHour={18} />
        <Appointments />
        <Toolbar />
        <DateNavigator />
        <TodayButton />
        <ViewSwitcher />
        <AppointmentTooltip showOpenButton showCloseButton />
        <AppointmentForm />
      </DevExpressScheduler>
    </div>
  );
}

Scheduler.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
