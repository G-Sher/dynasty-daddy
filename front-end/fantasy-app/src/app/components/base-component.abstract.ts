import {Injectable, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';

@Injectable()
export class BaseComponent implements OnDestroy {
  /**
   * List of components subscribed to
   */
  protected subscriptions: Subscription[] = [];

  /**
   * deletes each subscription for component
   * if your child component still needs to use ngOnDestroy,
   * add a call to super.ngOnDestroy() to run
   */
  public ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  /** add subscription to list
   * Whenever there's a sub in a class just add this.addSubscription
   * @param subs list of subscriptions
   * @protected
   */
  protected addSubscriptions(...subs: Subscription[]): void {
    this.subscriptions.push(...subs);
  }
}
