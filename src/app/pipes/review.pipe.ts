import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'review'
})
export class ReviewPipe implements PipeTransform {

  transform(reviews: any, prod:string): any {
    return reviews.filter((x:any)=>x.product == prod)
  }

}
