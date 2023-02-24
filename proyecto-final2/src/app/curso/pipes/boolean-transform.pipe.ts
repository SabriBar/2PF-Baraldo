import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanTransform'
})
export class BooleanTransformPipe implements PipeTransform {

  transform(Boolean: boolean, ...args: any[]): string {
    return Boolean ? args[0] : args[1];
  }

}
