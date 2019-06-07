import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'limitTo'
})

export class LimitToPipe implements PipeTransform {
	public transform(value: string, limit: number) {
		return value.length > limit ? value.substring(0, limit) + '...' : value;
	}
}