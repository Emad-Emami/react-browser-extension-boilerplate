import { DateTime } from 'luxon';

const defaultFormats = [
  "LLL dd 'yy at HH:mm",
  'd LLL yyyy',
  'LLL d',
  'EEEE, LLLL d',
  'EEEE, LLLL d⋅HH:mm',
];

function dateTimeParser(string, formats = defaultFormats, options) {
  for (let i = 0; i < formats.length; i++) {
    const dateTime = DateTime.fromFormat(string, formats[i], options);
    if (dateTime.isValid) {
      return dateTime.toISO();
    }
  }
  return null;
}

export default dateTimeParser;
