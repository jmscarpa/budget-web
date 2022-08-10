import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'transactionKind'
})

export class TransactionKindPipe implements PipeTransform {
    transform(value: string): string {
        if (value) {
            if (value.toLowerCase() === 'income') {
                return 'Entrada';
            } else {
                return 'Saída';
            }
        } else {
            return '-';
        }
    }
}