import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ServicoService {
    private currentValueSubject: BehaviorSubject<string> | undefined;
    public currentValue: Observable<string>;
    constructor() {

        this.currentValueSubject = new BehaviorSubject<string>('');
        this.currentValue = this.currentValueSubject.asObservable();
    }


    public get currentUserValue(): any {
        if (this.currentValueSubject) {
            return this.currentValueSubject.value;
        }
        return null;
    }

    public changeValue(value: string): void {
        if (this.currentValueSubject) {
            this.currentValueSubject.next(value);
        }
    }

    public clearValue(): void {
        if (this.currentValueSubject) {
            this.currentValueSubject.next('');
        }
    }

    public getValue(): Observable<string> {
        if (this.currentValueSubject) {
            return this.currentValueSubject.asObservable();
        }
        return new Observable<string>();
    }
}
