import { Pipe } from '@angular/core';

@Pipe({
  name: 'zzmm',
})
export class ZzmmPipe {
  transform(val, format, type) {
    console.log('======>', format, type);
    if (type == 'DL') {
      if (format == 'Ontario') {
        return val.replace(/(.{5})/g, '$1-').slice(0, -1);
      } else {
        return val;
      }
    } else if (type == 'RIN') {
      if (format == 'Ontario') {
        return val.replace(/(.{3})/g, '$1-').slice(0, -1);
      } else {
        return val;
      }
    }
  }
}
