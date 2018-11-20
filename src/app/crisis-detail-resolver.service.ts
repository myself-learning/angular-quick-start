import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
    Router, Resolve, RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';

import { Crisis, CrisisService } from './crisis-center/crisis.service';
import { take, map } from 'rxjs/operators';

@Injectable()
export class CrisisDetailResolver implements Resolve<Crisis> {
    constructor(private cs: CrisisService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Crisis> {
        const id = route.paramMap.get('id');

        return this.cs.getCrisis(id).pipe(
            take(1),
            map(crisis => {
                if (crisis) {
                    return crisis;
                } else { // id not found
                    this.router.navigate(['/crisis-center']);
                    return null;
                }
            })
        );
    }
}