import dateTimeParser from '@utils/date-time-parser';
import validateEmailAddress from '@utils/validate-email-address';

function onBookAppointmentClickHandler(object /* , tab */) {
  const { selectionText } = object;
  if (selectionText) {
    const isValidEmail = validateEmailAddress(selectionText);
    if (isValidEmail) return console.log(selectionText, 'is email address');
    const dateTime = dateTimeParser(selectionText);
    if (dateTime) return console.log(dateTime, 'is valid date');
  }
}

function contextMenus() {
  const items = [
    {
      title: 'Book an appointment',
      contexts: ['page'],
      onclick: onBookAppointmentClickHandler,
    },
    {
      title: 'Book an appointment with "%s"',
      contexts: ['selection'],
      onclick: onBookAppointmentClickHandler,
    },
  ];

  const ids = [];
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (typeof item !== 'object') return false;
    ids[i] = chrome.contextMenus.create(item);
  }
}

export default contextMenus;
