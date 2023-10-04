import {Pipe} from '@angular/core'

@Pipe({
  name:'sex'
})

export class SexPipeline {

  transform(val,lang='zh'){
    if(val==1){
      return 'Male'
    } else if(val==0){
      return 'Female'
    } else {
      return 'Unknown'
    }
  }
}
